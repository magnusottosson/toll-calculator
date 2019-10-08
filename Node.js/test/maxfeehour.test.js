import test from 'ava'
import dayjs from 'dayjs'
import tollFeeCalculator from '../src/toll-fee-calculator'

test('that 10 passages during an hour does not render more than max fee (18)', t => {

  const dates = []

  for (let i = 0; i < 10; i++) {
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
  const expected = 18

  t.is(actual, expected)
})

test('that 50 passages during an hour does not render more than max fee (18)', t => {

  const dates = []

  for (let i = 0; i < 100; i++) {
    dates.push(dayjs()
      .hour(7)
      .minute(0)
      .second(i)
      .unix())
  }

  const actual = tollFeeCalculator({
    timestamps: dates,
    vehicleType: 'car',
  })
  const expected = 18

  t.is(actual, expected)
})

test('that 2 passages during an hour uses the most expensive fee (18)', t => {

  const actual = tollFeeCalculator({
    dates: [
      dayjs()
        .hour(6)
        .minute(0)
        .second(0)
        .unix(),
      dayjs()
        .hour(6)
        .minute(30)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 13

  t.is(actual, expected)
})
