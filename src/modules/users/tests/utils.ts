import type { Insertable } from 'kysely'
import type { Users } from '@/database'

export const userRecordFactory = (
  overrides: Partial<Insertable<Users>> = {}
): Insertable<Users> => ({
  id: 1,
  username: 'user1',
  role: 'regular',
  ...overrides,
})

export const adminUser = {
  id: 2,
  username: 'user2',
  role: 'admin',
}
