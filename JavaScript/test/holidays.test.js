import test from 'ava'
import dayjs from 'dayjs'
import { isHoliday } from '../src/utils/dates'

const TEST_DATE = '2019-10-07' //Monday

test('that christmas is a holiday', t => {

  const timestamp = dayjs(TEST_DATE)
    .month(11)
    .date(24)
    .unix()

  const actual = isHoliday({
    timestamp,
  })

  const expected = true
  t.is(actual, expected)
})

test('that easter (långfredagen) is a holiday', t => {

  const timestamp = dayjs(TEST_DATE)
    .year(2020)
    .month(3)
    .date(10)
    .unix()

  const actual = isHoliday({
    timestamp,
  })

  const expected = true
  t.is(actual, expected)
})

test('that Sweden\'s national day is a holiday', t => {

  const timestamp = dayjs(TEST_DATE)
    .month(5)
    .date(6)
    .unix()

  const actual = isHoliday({
    timestamp,
  })

  const expected = true
  t.is(actual, expected)
})
