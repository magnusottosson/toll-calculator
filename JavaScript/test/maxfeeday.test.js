import test from 'ava'
import tollFeeCalculator from '../src/toll-fee-calculator'
import dayjs from 'dayjs'

const TEST_DATE = '2019-10-07' //Monday

test('that 10 passages during a day does not render more that max fee (60)', t => {

  const dates = []

  for (let i = 0; i < 10; i++) {
    dates.push(dayjs(TEST_DATE)
      .hour(6 + i)
      .minute(0)
      .second(0)
      .unix())
  }

  const actual = tollFeeCalculator({
    timestamps: dates,
    vehicleType: 'car',
  })
  const expected = 60

  t.is(actual, expected)
})

test('that 100 passages during a day does not render more than max fee (60)', t => {

  const dates = []

  for (let i = 0; i < 100; i++) {
    dates.push(dayjs(TEST_DATE)
      .hour(6 + i % 10)
      .minute(i % 60)
      .second(0)
      .unix())
  }

  const actual = tollFeeCalculator({
    timestamps: dates,
    vehicleType: 'car',
  })
  const expected = 60

  t.is(actual, expected)
})
