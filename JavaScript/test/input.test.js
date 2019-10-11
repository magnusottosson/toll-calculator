import test from 'ava'
import calculateTollFeeForVehicleType from '../src/toll-fee-calculator'
import tollRate from '../src/utils/toll-rate'
import dayjs from 'dayjs'

const TEST_DATE = '2019-10-07' //Monday

test('that unsupported vehicle throws', t => {

  const error = t.throws(() => {
    calculateTollFeeForVehicleType({
      timestamps: [],
      vehicleType: 'bus',
    })
  })

  t.is(error.message, 'Unsupported vehicle: bus')
})

test('that undefined vehicle throws', t => {

  const error = t.throws(() => {
    calculateTollFeeForVehicleType({
      timestamps: [],
    })
  })

  t.is(error.message, 'Undefined vehicle')
})

test('that undefined timestamps throws', t => {

  const error = t.throws(() => {
    calculateTollFeeForVehicleType({
      vehicleType: 'car',
    })
  })

  t.is(error.message, 'Undefined timestamps')
})

test('that timestamps in invalid formats throws', t => {

  const error = t.throws(() => {
    calculateTollFeeForVehicleType({
      timestamps: ['abc'],
      vehicleType: 'car',
    })
  })

  t.is(error.message, 'Invalid timestamps format: abc')
})

test('that tollRate with timestamps in invalid formats throws', t => {

  const error = t.throws(() => {
    tollRate({
      timestamp: 'abc',
    })
  })

  t.is(error.message, 'Invalid timestamps format: abc')
})

test('that empty list of timestamps returns 0', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [],
    vehicleType: 'car',
  })
  const expected = 0
  t.is(actual, expected)
})

test('that timestamps with multiple days calculate the correct fee', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .hour(7)
        .minute(0)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
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

test('that passes on a saturday are free', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(6)
        .unix(),
    ],
    vehicleType: 'car',
  })

  const expected = 0
  t.is(actual, expected)
})

test('that passes on a sunday are free', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(0)
        .unix(),
    ],
    vehicleType: 'car',
  })

  const expected = 0
  t.is(actual, expected)
})

test('that passes on christmas are free', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .month(11)
        .date(24)
        .unix(),
    ],
    vehicleType: 'car',
  })

  const expected = 0
  t.is(actual, expected)
})

test('that passes on a motorbike on a monday are free', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(1)
        .unix(),
    ],
    vehicleType: 'motorbike',
  })

  const expected = 0
  t.is(actual, expected)
})

test('that passes on a tractor on a tuesday are free', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(2)
        .unix(),
    ],
    vehicleType: 'tractor',
  })

  const expected = 0
  t.is(actual, expected)
})

test('that passes with a car on a monday during rush hour costs 18', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(1)
        .hour(7)
        .minute(0)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })

  const expected = 18
  t.is(actual, expected)
})

test('that two passes with a car on a monday during rush hour costs 36', t => {

  const actual = calculateTollFeeForVehicleType({
    timestamps: [
      dayjs(TEST_DATE)
        .day(1)
        .hour(7)
        .minute(0)
        .second(0)
        .unix(),
      dayjs(TEST_DATE)
        .day(1)
        .hour(15)
        .minute(30)
        .second(0)
        .unix(),
    ],
    vehicleType: 'car',
  })

  const expected = 36
  t.is(actual, expected)
})
