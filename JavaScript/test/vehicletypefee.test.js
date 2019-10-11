import test from 'ava'
import isTollFreeVehicle from '../src/utils/toll-free-vehicle'

test('that car is NOT toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'car',
  })

  const expected = false
  t.is(actual, expected)
})

test('that motorbike is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'motorbike',
  })

  const expected = true
  t.is(actual, expected)
})

test('that tractor is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'tractor',
  })

  const expected = true
  t.is(actual, expected)
})

test('that emergency is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'emergency',
  })

  const expected = true
  t.is(actual, expected)
})

test('that diplomat is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'diplomat',
  })

  const expected = true
  t.is(actual, expected)
})

test('that foreign is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'foreign',
  })

  const expected = true
  t.is(actual, expected)
})

test('that military is toll free', t => {

  const actual = isTollFreeVehicle({
    vehicleType: 'military',
  })

  const expected = true
  t.is(actual, expected)
})
