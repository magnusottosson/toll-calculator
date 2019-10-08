import test from 'ava'
import tollFeeCalculator from '../src/toll-fee-calculator'
import dayjs from 'dayjs'

test('that 10 passages during a day does not render more that max fee (60)', t => {

  const dates = []

  for (let i = 0; i < 10; i++) {
    dates.push(dayjs()
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
    dates.push(dayjs()
      .hour(7)
      .minute(i)
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
