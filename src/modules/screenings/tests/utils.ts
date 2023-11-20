import type { Insertable } from 'kysely'
import type { Screenings } from '@/database'

export const screeningRecordFactory = (
  overrides: Partial<Insertable<Screenings>> = {}
): Insertable<Screenings> => ({
  id: 5832,
  timestamp: '2023-11-19 17:29:50',
  ticketsLeft: 5,
  movieId: 2343,
  ...overrides,
})

export const createScreeningsForTest = () => [
  { id: 5832, timestamp: '2023-11-19 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 3202, timestamp: '2023-11-20 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 293, timestamp: '2023-11-21 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 200, timestamp: '2023-11-22 17:29:50', ticketsLeft: 5, movieId: 2343 },
  {
    id: 38902,
    timestamp: '2023-11-23 17:29:50',
    ticketsLeft: 5,
    movieId: 2343,
  },
  { id: 3892, timestamp: '2023-11-24 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 3823, timestamp: '2023-11-25 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 43, timestamp: '2023-11-26 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 389, timestamp: '2023-11-27 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 390, timestamp: '2023-11-28 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 4023, timestamp: '2023-11-29 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 4903, timestamp: '2023-11-29 17:29:56', ticketsLeft: 5, movieId: 2343 },
  { id: 4930, timestamp: '2023-11-30 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 490, timestamp: '2023-12-01 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 48, timestamp: '2023-12-19 17:29:50', ticketsLeft: 5, movieId: 2343 },
  { id: 900, timestamp: '2023-12-7 17:29:50', ticketsLeft: 5, movieId: 2343 },
]
