const dayjs = require('dayjs')
const config = require('config')

const isTollFreeVehicle = require('./utils/toll-free-vehicle')
const isValidVehicle = require('./utils/valid-vehicle')
const { isTollFreeDay } = require('./utils/dates')
const tollRate = require('./utils/toll-rate')

const MAX_FEE_PER_DAY = config.maxFeePerDay

/**
 * Calculate the fee for the given vehicle and dates
 *
 * @param {string} vehicleType
 * @param {array} timestamps
 *
 * @returns {number} Total price for the given passages
 */
const calculateTollFeeForVehicleType = ({ vehicleType, timestamps }) => {

  if (!vehicleType) {
    throw new Error('Undefined vehicle')
  }

  if (!isValidVehicle({ vehicleType })) {
    throw new Error(`Unsupported vehicle: ${vehicleType}`)
  }

  if (!timestamps) {
    throw new Error('Undefined timestamps')
  }

  if (isTollFreeVehicle({ vehicleType })) {
    return 0
  }

  return getTimestampsGroupedByDay({ timestamps })
    .reduce((totalFee, batch) => {
      return totalFee + getFeeForTimeStampsInSameDay({ timestamps: batch })
    }, 0)
}

const getFeeForTimeStampsInSameDay = ({ timestamps }) => {

  const { totalFee } = timestamps
    .sort((a, b) => {
      return a - b
    })
    .reduce(({ totalFee, currentHourPeriodStart, currentHourPeriodMaxFee }, timestamp, index, sortedTimestamps) => {

      // If totalFee is already at max we can return the max fee
      if (totalFee >= MAX_FEE_PER_DAY) {
        return {
          totalFee: MAX_FEE_PER_DAY,
        }
      }

      // If timestamp is toll free day we can just return the current values
      if (isTollFreeDay({ timestamp })) {
        return {
          currentHourPeriodMaxFee,
          currentHourPeriodStart,
          totalFee,
        }
      }

      // The potential fee for the current timestamp
      const fee = tollRate({ timestamp })
      const lastItem = index === sortedTimestamps.length - 1

      // If we have a previus value that has not been added to the total yet we need to take specific actions
      if (currentHourPeriodStart) {

        const startDate = dayjs
          .unix(currentHourPeriodStart)

        const currentDate = dayjs
          .unix(timestamp)

        const diffInMinutes = currentDate.diff(startDate, 'minute')

        if (diffInMinutes >= 60) {

          // If it has been more than an our since the previous value and this is the last one we can sum everything up
          if (lastItem) {

            return {
              totalFee: totalFee + currentHourPeriodMaxFee + fee,
            }
          }

          // Reset the current period and add the last periods max value to the total
          return {
            currentHourPeriodMaxFee: fee,
            currentHourPeriodStart: timestamp,
            totalFee: totalFee + currentHourPeriodMaxFee,
          }
        }

        // If we still are within the same hour and it's the last item we can sum everything up
        if (lastItem) {

          return {
            totalFee: totalFee + Math.max(currentHourPeriodMaxFee, fee),
          }
        }

        // Set the max value for the period and continue
        return {
          currentHourPeriodMaxFee: Math.max(currentHourPeriodMaxFee, fee),
          currentHourPeriodStart: currentHourPeriodStart,
          totalFee,
        }
      }

      // If we are on the last item we can sum everything up
      if (lastItem) {
        return {
          totalFee: totalFee + fee,
        }
      }

      return {
        currentHourPeriodMaxFee: fee,
        currentHourPeriodStart: timestamp,
        totalFee: totalFee,
      }
    }, {
      totalFee: 0,
    })

  // Make sure that we do not go over the max fee
  return Math.min(totalFee, MAX_FEE_PER_DAY)
}

const getTimestampsGroupedByDay = ({ timestamps }) => {

  const index = {}

  return timestamps.reduce((result, timestamp) => {

    const date = dayjs
      .unix(timestamp)

    if (!date.isValid()) {
      throw new Error(`Invalid timestamps format: ${timestamp}`)
    }

    const key = date
      .format('YYYYMMDD')

    if (!index[key]) {
      index[key] = []
      result.push(index[key])
    }

    index[key].push(timestamp)

    return result
  }, [])
}

module.exports = calculateTollFeeForVehicleType
