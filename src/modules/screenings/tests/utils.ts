import type { Insertable } from 'kysely'
import type { Screenings } from '@/database'

export const screeningPastTicketsLeft = {
  id: 1,
  screeningTimestamp: '2020-11-21T17:29:59Z',
  ticketsAll: 10,
  ticketsLeft: 5,
  movieId: 11801,
}

export const screeningFutureTicketsLeft = {
  id: 2,
  screeningTimestamp: '2024-11-21T17:29:59Z',
  ticketsAll: 10,
  ticketsLeft: 5,
  movieId: 11801,
}

export const createScreeningsForTest = () => [
  screeningPastTicketsLeft,
  screeningFutureTicketsLeft,
]
