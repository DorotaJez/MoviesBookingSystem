import type { Insertable } from 'kysely'
import type { Screenings } from '@/database'

export const screeningRecordFactory = (
  overrides: Partial<Insertable<Screenings>> = {}
): Insertable<Screenings> => ({
  id: 5832,
  timestamp: '2020-01-01T00:00:00Z',
  ticketsLeft: 5,
  movieId: 2343,
  ...overrides,
})

export const createScreeningsForTest = () => [
  {
    id: 5832,
    timestamp: '2023-11-19T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  {
    id: 3202,
    timestamp: '2023-11-20T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  { id: 293, timestamp: '2023-11-21T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  { id: 200, timestamp: '2023-11-22T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  {
    id: 38902,
    timestamp: '2023-11-23T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  {
    id: 3892,
    timestamp: '2023-11-24T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  {
    id: 3823,
    timestamp: '2023-11-25T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  { id: 43, timestamp: '2023-11-26T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  { id: 389, timestamp: '2023-11-27T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  { id: 390, timestamp: '2023-11-28T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  {
    id: 4023,
    timestamp: '2023-11-29T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  {
    id: 4903,
    timestamp: '2023-11-29T17:29:56Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  {
    id: 4930,
    timestamp: '2023-11-30T17:29:50Z',
    ticketsLeft: 5,
    movieId: 2343,
  },
  { id: 490, timestamp: '2023-12-01T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  { id: 48, timestamp: '2023-12-19T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
  { id: 900, timestamp: '2023-12-07T17:29:50Z', ticketsLeft: 5, movieId: 2343 },
]
