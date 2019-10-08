const Holidays = require('date-holidays')
const dayjs = require('dayjs')

const holidays = new Holidays('SE')

/**
 * Returns true if given timestamp is a holiday
 *
 * @param {number} unix timestamp
 * @returns {boolean} true if given timestamp is a holiday
 */
const isHoliday = ({ timestamp }) => {

  const holiday = holidays.isHoliday(
    dayjs
      .unix(timestamp)
      .toDate()
  )

  return !!holiday
}

/**
 * Returns true if given timestamp is a saturday or sunday
 *
 * @param {number} unix timestamp
 * @returns {boolean} true if given timestamp is a saturday or sunday
 */
const isWeekend = ({ timestamp }) => {

}

/**
 * Returns true if the given timestamp is a toll free day (holiday or weekend)
 *
 * @param timestamp
 * @returns {boolean} true if the given timestamp is a toll free day (holiday or weekend)
 */
const isTollFreeDay = ({ timestamp }) => {

}

module.exports = {
  isHoliday,
  isTollFreeDay,
  isWeekend,
}
