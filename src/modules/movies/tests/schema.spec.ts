import { omit } from 'lodash/fp'
import { parse, parseInsertable, parseUpdateable } from '../schema'
import { movieRecordFactory } from './utils'

it('parses a valid movie record', () => {
  const record = movieRecordFactory()
  expect(parse(record)).toEqual(record)
})

it('throws an error due to empty/missing title', () => {
  const movieWithoutTitle = omit(['title'], movieRecordFactory())
  const movieEmptyTitle = movieRecordFactory({
    title: '',
  })

  expect(() => parse(movieWithoutTitle)).toThrow(/title/i)
  expect(() => parse(movieEmptyTitle)).toThrow(/title/i)
})

it('throws an error due to missing id', () => {
  const movieWithoutID = omit(['id'], movieRecordFactory())

  expect(() => parse(movieWithoutID)).toThrow(/id/i)
})

describe('parseInsertable', () => {
  it('omits id', () => {
    const parsed = parseInsertable(movieRecordFactory())
    expect(parsed).not.toHaveProperty('id')
  })
})

describe('parseUpdateable', () => {
  it('omits id', () => {
    const parsed = parseUpdateable(movieRecordFactory())

    expect(parsed).not.toHaveProperty('id')
  })
})
