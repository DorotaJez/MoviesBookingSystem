// create a new user

import createTestDatabase from '@tests/utils/createTestDatabase'
import buildRepository from '../repository'

const db = await createTestDatabase()
const repository = buildRepository(db)

describe('create', () => {
  it('should add a user', async () => {
    const testUser = {
      username: 'Test',
      role: 'regular',
    }

    const result = await repository.create(testUser)
    expect(result).toEqual({
      id: 1,
      ...testUser,
    })
  })

//   it('should throw error if username is not valid', async() => {
//     const testUser = {
//         username: '',
//         role: 'regular'
//     }
//     await expect(repository.create(testUser)).rejects.toThrow()
//   })
})
