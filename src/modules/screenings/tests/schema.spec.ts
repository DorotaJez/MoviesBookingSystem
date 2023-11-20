import { omit } from 'lodash/fp'
import {
  parse,
  parseInsertable,
  parseUpdateable,
  parseTimestamp,
} from '../schema'
import { screeningRecordFactory } from './utils'

it('parses a valid screening record', () => {
  const record = screeningRecordFactory()
  expect(parse(record)).toEqual(record)
})

it('throws an error due to missing movieId', () => {
  const screeningMissingMovieID = omit(['movieId'], screeningRecordFactory())
  expect(() => parse(screeningMissingMovieID)).toThrow(/movieId/i)
})

describe('parseTimestamp', () => {
  it('parses a valid timestamp', () => {
    const correctDateTime = '2020-01-01T00:00:00Z'
    expect(parseTimestamp(correctDateTime)).toEqual(correctDateTime)
  })
  it('throws error for non-ISO 8601 timestamp', () => {
    const incorrectDateTime = '2020-01-01 00:00:00'
    expect(() => parse(parseTimestamp(incorrectDateTime))).toThrow(
      /invalid_string/i
    )
  })
})

describe('parseInsertable', () => {
  it('omits id', () => {
    const parsed = parseInsertable(screeningRecordFactory())
    expect(parsed).not.toHaveProperty('id')
    expect(parsed).not.toHaveProperty('timestamp')
  })
})

describe('parseUpdateable', () => {
  it('omits id', () => {
    const parsed = parseUpdateable(screeningRecordFactory())
    expect(parsed).not.toHaveProperty('id')
  })
})
