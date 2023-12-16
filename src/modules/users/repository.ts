import type { Database } from '@/database'
import { keys } from './schema'
import type { Users } from '@/database'

type userInsert = Omit<Users, 'id'>

export default (db: Database) => ({
  create: async (user: userInsert) =>
    db.insertInto('users').values(user).returning(keys).executeTakeFirst(),
})
