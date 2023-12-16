import supertest from 'supertest'
import createTestDatabase from '@tests/utils/createTestDatabase'
import createDatabase from '@/database'
import createApp from '@/app'

const db = createDatabase(process.env.DATABASE_URL as string, {
  readonly: true,
})

const app = createApp(db)

// describe('GET', () => {
//   it('should return movies by a list of query params', async () => {

//     // ACT (When we request...)
//     const { body } = await supertest(app)
//       .get('/movies?id=133093,816692')
//       .expect(200)

//     // ASSERT (Then we should get...)
//     expect(body).toHaveLength(2)
//     expect(body).toEqual([
//       {
//         id: 133093,
//         title: 'The Matrix',
//         year: 1999,
//       },
//       {
//         id: 816692,
//         title: 'Interstellar',
//         year: 2014,
//       },
//     ])
//   })
// })

// it('should return a 400 status code with error message if no params are provided', async () => {
//   const { body } = await supertest(app).get('/movies').expect(400)
//   expect(body.error.message).toEqual('Bad request: missing movie IDs')
// })

// it('should return a 400 status code with error message if the params are empty', async () => {
//   const { body } = await supertest(app).get('/movies?id=').expect(400)
//   expect(body.error.message).toEqual('Bad request: missing movie IDs')
// })
