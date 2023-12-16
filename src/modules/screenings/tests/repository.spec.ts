import createTestDatabase from '@tests/utils/createTestDatabase'
import { createFor } from '@tests/utils/records'
import buildRepository from '../repository'
import { createScreeningsForTest } from './utils'

const db = await createTestDatabase()
const repository = buildRepository(db)
const createScreenings = createFor(db, 'screenings')
const createMovies = createFor(db, 'movies')

beforeAll(async () => {
  vitest.useFakeTimers()
  vitest.setSystemTime('2023-11-21T17:29:59Z')

  await createMovies({
    id: 11801,
    title: 'Blabla',
    year: 2023,
  })
})

afterEach(async () => {
  await db.deleteFrom('screenings').execute()
})

afterAll(() => {
  vitest.useRealTimers()
  db.destroy()
})

describe('getAllScreenings', () => {
  it('should return a page of all screenings', async () => {
    await createScreenings(createScreeningsForTest())

    const screenings = await repository.getAll()
    expect(screenings).toEqual([
      {
        id: 1,
        screeningTimestamp: '2020-11-21T17:29:59Z',
        ticketsAll: 10,
        ticketsLeft: 5,
        movieId: 11801,
        title: 'Blabla',
        year: 2023,
      },
      {
        id: 2,
        screeningTimestamp: '2024-11-21T17:29:59Z',
        ticketsAll: 10,
        ticketsLeft: 5,
        movieId: 11801,
        title: 'Blabla',
        year: 2023,
      },
    ])
  })
})

describe('createScreening', () => {
  it('should create a screening based on movieId, screeningTimestamp and ticketsAll', async () => {
    const createdScreening = await repository.create({
      movieId: 11801,
      screeningTimestamp: '2020-11-21T17:29:59Z',
      ticketsAll: 10,
    })
    expect(createdScreening).toEqual([
      {
        id: 3,
        // todo comment
        movieId: 11801,
        screeningTimestamp: '2020-11-21T17:29:59Z',
        ticketsAll: 10,
        ticketsLeft: 10,
      },
    ])
  })
})
