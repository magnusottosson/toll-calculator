const dayjs = require('dayjs')

// TODO: Move to config file
const FEE_SCHEDULE = [
  { fee: 0, hour: 0, minute: 0 },
  { fee: 8, hour: 6, minute: 0 },
  { fee: 13, hour: 6, minute: 30 },
  { fee: 18, hour: 7, minute: 0 },
  { fee: 13, hour: 8, minute: 0 },
  { fee: 8, hour: 8, minute: 30 },
  { fee: 13, hour: 15, minute: 0 },
  { fee: 18, hour: 15, minute: 30 },
  { fee: 13, hour: 17, minute: 0 },
  { fee: 8, hour: 18, minute: 0 },
  { fee: 0, hour: 18, minute: 30 },
]

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

  if (!currentFee) {
    throw new Error('timestamp does not match any price scheme')
  }

  return currentFee.fee
}

module.exports = tollRate
