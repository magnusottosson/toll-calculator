import test from 'ava'
import tollFeeCalculator from '../src/toll-fee-calculator'
import dayjs from 'dayjs'

test('that unsupported vehicle throws', t => {

  const error = t.throws(() => {
    tollFeeCalculator({
      dates: [],
      vehicleType: 'bus',
    })
  })

  t.is(error.message, 'Unsupported vehicle: bus')
})

test('that undefined vehicle throws', t => {

  const error = t.throws(() => {
    tollFeeCalculator({
      dates: [],
    })
  })

  t.is(error.message, 'Undefined vehicle')
})

test('that undefined timestamps throws', t => {

  const error = t.throws(() => {
    tollFeeCalculator({
      vehicle: 'car',
    })
  })

  t.is(error.message, 'Undefined timestamps')
})

test('that empty list of timestamps returns 0', t => {

  const actual = tollFeeCalculator({
    dates: [],
    vehicleType: 'car',
  })
  const expected = 0
  t.is(actual, expected)
})

test('that dates with multiple days calculate the correct fee', t => {

  const actual = tollFeeCalculator({
    dates: [
      dayjs()
        .hour(7)
        .minute(0)
        .second(0)
        .unix(),
      dayjs()
        .add(1, 'day')
        .hour(7)
        .minute(0)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 36

  t.is(actual, expected)
})
