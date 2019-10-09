import test from 'ava'
import dayjs from 'dayjs'
import tollRate from '../src/utils/toll-rate'

test('that 05:59:59 cost 0 SEK', t => {

  const timestamp = dayjs()
    .hour(5)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 0
  t.is(actual, expected)
})

test('that 06:00 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 06:20 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(20)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 06:29:59 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(29)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 06:30:00 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 06:45 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(45)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 06:59:59 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(6)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 07:00 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(7)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 07:30 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(7)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 07:59:59 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(7)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 08:00 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(8)
    .minute(0)
    .second(13)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 08:15 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(8)
    .minute(15)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 08:29:59 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(8)
    .minute(29)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 08:30 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(8)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 14:00 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(14)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 14:30 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(14)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 14:59:59 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(14)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 15:00 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(15)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 15:15 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(15)
    .minute(15)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 15:29:59 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(15)
    .minute(29)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 15:30 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(15)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 16:00 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(16)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 16:59:59 cost 18 SEK', t => {

  const timestamp = dayjs()
    .hour(16)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 18
  t.is(actual, expected)
})

test('that 17:00 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(17)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 17:30 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(17)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 17:59:59 cost 13 SEK', t => {

  const timestamp = dayjs()
    .hour(17)
    .minute(59)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 13
  t.is(actual, expected)
})

test('that 18:00 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(18)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 18:29:59 cost 8 SEK', t => {

  const timestamp = dayjs()
    .hour(18)
    .minute(29)
    .second(59)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 8
  t.is(actual, expected)
})

test('that 18:30 cost 0 SEK', t => {

  const timestamp = dayjs()
    .hour(18)
    .minute(30)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 0
  t.is(actual, expected)
})

test('that 19:00 cost 0 SEK', t => {

  const timestamp = dayjs()
    .hour(19)
    .minute(0)
    .second(0)
    .unix()

  const actual = tollRate({
    timestamp,
  })

  const expected = 0
  t.is(actual, expected)
})
