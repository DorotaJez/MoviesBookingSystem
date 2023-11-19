import { Request, Router } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'
import { NoCorrectIDsBadRequest } from './errors'
import { parseId } from './schema'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req: Request) => {
      const idsString = req.query.id as string | undefined
      if (!idsString) {
        throw new NoCorrectIDsBadRequest()
      }
      const ids = idsString.split(',').map((id) => parseId(id))
      const movies = await messages.findByIds(ids)
      return movies
    })
  )

  return router
}
