import { omit } from 'lodash/fp'
import { parse, parseInsertable, parseUpdateable } from '../schema'
import { userRecordFactory } from './utils'

it('parses a valid movie record', () => {
  const record = userRecordFactory()
  expect(parse(record)).toEqual(record)
})

it('throws an error due to empty/missing username', () => {
  const userWithoutUsername = omit(['username'], userRecordFactory())
  const userWithEmptyUsername = userRecordFactory({
    username: '',
  })

  expect(() => parse(userWithoutUsername)).toThrow(/username/i)
  expect(() => parse(userWithEmptyUsername)).toThrow(/username/i)
})

it('throws an error due to missing id', () => {
  const userWithoutID = omit(['id'], userRecordFactory())

  expect(() => parse(userWithoutID)).toThrow(/id/i)
})

describe('parseInsertable', () => {
  it('omits id', () => {
    const parsed = parseInsertable(userRecordFactory())
    expect(parsed).not.toHaveProperty('id')
  })
})

describe('parseUpdateable', () => {
  it('omits id', () => {
    const parsed = parseUpdateable(userRecordFactory())

    expect(parsed).not.toHaveProperty('id')
  })
})
