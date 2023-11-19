import { omit } from 'lodash/fp'
import { parse, parseInsertable, parseUpdateable } from '../schema'
import { movieRecordFactory } from './utils'

it('parses a valid movie record', () => {
  const record = movieRecordFactory()
  expect(parse(record)).toEqual(record)
})

it('throws an error due to empty/missing title', () => {
  const articleWithoutTitle = omit(['title'], movieRecordFactory())
  const articleEmptyTitle = movieRecordFactory({
    title: '',
  })

  expect(() => parse(articleWithoutTitle)).toThrow(/title/i)
  expect(() => parse(articleEmptyTitle)).toThrow(/title/i)
})

it('throws an error due to missing id', () => {
  const recordWithoutID = omit(['id'], movieRecordFactory())

  expect(() => parse(recordWithoutID)).toThrow(/id/i)
})

// every other function is a derivative of parse()
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
