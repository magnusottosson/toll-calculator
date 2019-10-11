import test from 'ava'
import dayjs from 'dayjs'
import tollFeeCalculator from '../src/toll-fee-calculator'

const TEST_DATE = '2019-10-07' //Monday

test('that 10 passages during an hour does not render more than max fee (18)', t => {

  const timestamps = []

  for (let i = 0; i < 10; i++) {
    timestamps.push(dayjs(TEST_DATE)
      .hour(7)
      .minute(i)
      .second(0)
      .unix())
  }

  const actual = tollFeeCalculator({
    timestamps: timestamps,
    vehicleType: 'car',
  })
  const expected = 18

  t.is(actual, expected)
})

test('that 2 passes within an hour on different hours does not render more than max fee (18)', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(7)
        .minute(30)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(8)
        .minute(29)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 18

  t.is(actual, expected)
})

test('that the order of the passes does not matter', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(8)
        .minute(29)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(7)
        .minute(30)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 18

  t.is(actual, expected)
})

test('that three passes within a little bit more that an hour returns correct fee', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(7)
        .minute(30)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(7)
        .minute(35)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(8)
        .minute(35)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 26

  t.is(actual, expected)
})

// Not sure about the rules here? If a car makes three passes in little bit more that an hour
// between the first and last, if we group the first and second the fee will be higher than if
// we group the two last ones together... The test assumes that we should group the two first ones
test('that three passes within a little bit more that an hour returns correct fee even if it would be cheaper if the two later ones were groups', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(6)
        .minute(59)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(7)
        .minute(30)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(7)
        .minute(59)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 36

  t.is(actual, expected)
})

test('that 2 passes exactly an hour apart renders the correct fee (18 + 8 = 26)', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(7)
        .minute(30)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .hour(8)
        .minute(30)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })
  const expected = 26

  t.is(actual, expected)
})

test('that 50 passages during an hour does not render more than max fee (18)', t => {

  const timestamps = []

  for (let i = 0; i < 100; i++) {
    timestamps.push(dayjs(TEST_DATE)
      .hour(7)
      .minute(0)
      .second(i)
      .unix())
  }

  const actual = tollFeeCalculator({
    timestamps: timestamps,
    vehicleType: 'car',
  })
  const expected = 18

  t.is(actual, expected)
})

test('that 2 passages during an hour uses the most expensive fee (18)', t => {

  const actual = tollFeeCalculator({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(6)
        .minute(0)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
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
