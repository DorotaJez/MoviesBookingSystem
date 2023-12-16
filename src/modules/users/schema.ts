import { z } from 'zod'
import type { Users } from '@/database'

const USER_ROLES = ['regular', 'admin'] as const
// const FishEnum = z.enum(VALUES);

// validation schema
type Record = Users
const schema = z.object({
  id: z.coerce.number().int().positive(),
  username: z.string().min(1).max(20),
  role: z.enum(USER_ROLES),
})

const insertable = schema.omit({
  id: true,
})

const updateable = insertable.partial()

export const parse = (record: unknown) => schema.parse(record)
export const parseId = (id: unknown) => schema.shape.id.parse(id)

export const parseInsertable = (record: unknown) => insertable.parse(record)
export const parseUpdateable = (record: unknown) => updateable.parse(record)

export const keys: (keyof Record)[] = Object.keys(
  schema.shape
) as (keyof z.infer<typeof schema>)[]
