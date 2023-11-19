import { omit } from 'lodash/fp'
import { parse, parseInsertable, parseUpdateable } from '../schema'
import { screeningRecordFactory } from './utils'

it('parses a valid screening record', () => {
  const record = screeningRecordFactory()
  expect(parse(record)).toEqual(record)
})

it('throws an error due to missing movieId', () => {
  const screeningMissingMovieID = omit(['movieId'], screeningRecordFactory())
  expect(() => parse(screeningMissingMovieID)).toThrow(/movieId/i)
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
