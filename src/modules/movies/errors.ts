import BadRequest from '@/utils/errors/BadRequest'

export class NoCorrectIDsBadRequest extends BadRequest {
  constructor(message = 'Bad request: missing movie IDs') {
    super(message)
  }
}
