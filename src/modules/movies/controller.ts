import { Request, Response, Router, response } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req: Request, res: Response) => {
      const idsString = req.query.id
      if (!idsString) {
        res.status(400).json({ message: 'Bad request: missing movie IDs' })
      }
      const ids = idsString.split(',').map((id) => parseInt(id, 10))
      const movies = await messages.findByIds(ids)
      return movies
    })
  )

  return router
}
