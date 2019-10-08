import test from 'ava'
import { isTollFreeDay } from '../src/utils/dates'
import dayjs from 'dayjs'

test('that saturday is a free day', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(6)
      .unix(),
  })

  const expected = true
  t.is(actual, expected)
})

test('that sunday is a free day', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .day(0)
      .unix(),
  })

  const expected = true
  t.is(actual, expected)
})

test('that that february 29 2020 (Saturday) is toll free', t => {

  const actual = isTollFreeDay({
    timestamp: dayjs()
      .year(2020)
      .month(1)
      .date(29)
      .unix(),
  })

  const expected = true
  t.is(actual, expected)
})
