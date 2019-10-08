import test from 'ava'
import { isTollFreeDay } from '../src/utils/dates'
import dayjs from 'dayjs'

test('that that monday is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(1)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})

test('that that tuesday is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(2)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})

test('that that wednesday is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(3)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})

test('that that thursday is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(4)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})

test('that that friday is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(5)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})

test('that that february 29 2024 (Thursday) is NOT toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .year(2024)
      .month(1)
      .date(29)
      .unix(),
  })

  const expected = false
  t.is(actual, expected)
})
