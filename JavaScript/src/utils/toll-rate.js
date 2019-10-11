const dayjs = require('dayjs')
const config = require('config')
const FEE_SCHEDULE = config.feeSchedule

/**
 * Returns the toll for the given timestamp
 *
 * @param {number} unix timestamp
 * @returns {number} Price for the given timestamp
 */
const tollRate = ({ timestamp }) => {

  const date = dayjs
    .unix(timestamp)

  const hour = date.hour()
  const minute = date.minute()

  const currentFee = FEE_SCHEDULE.reduce((match, current) => {

    if (hour > current.hour || (hour === current.hour && minute >= current.minute)) {
      return current
    }

    return match
  })

  return currentFee.fee
}

module.exports = tollRate
