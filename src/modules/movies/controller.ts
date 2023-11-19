import { Request, Router } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'
import BadRequest from '@/utils/errors/BadRequest'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req: Request) => {
      const idsString = req.query.id as string | undefined
      if (!idsString) {
        throw new BadRequest('Bad request: missing movie IDs')
      }
      const ids = idsString.split(',').map((id) => parseInt(id, 10))
      const movies = await messages.findByIds(ids)
      return movies
    })
  )

  return router
}
