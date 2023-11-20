import { z } from 'zod'
import type { Screenings } from '@/database'

// validation schema
type Record = Screenings
const schema = z.object({
  id: z.coerce.number().int().positive(),
  timestamp: z.string().datetime(),
  ticketsLeft: z.coerce.number().int().nonnegative(),
  movieId: z.coerce.number().int().positive(),
})

const insertable = schema.omit({
  id: true,
  timestamp: true,
})

const updateable = insertable.partial()

export const parse = (record: unknown) => schema.parse(record)
export const parseId = (id: unknown) => schema.shape.id.parse(id)

export const parseTimestamp = (timestamp: unknown) =>
  schema.shape.timestamp.parse(timestamp)

export const parseInsertable = (record: unknown) => insertable.parse(record)
export const parseUpdateable = (record: unknown) => updateable.parse(record)

export const keys: (keyof Record)[] = Object.keys(
  schema.shape
) as (keyof z.infer<typeof schema>)[]
