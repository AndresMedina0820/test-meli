import { Request, Response, NextFunction } from 'express'
import { Author } from '../types'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Response {
      author?: Author
    }
  }
}

export const setAuthorMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.author = {
    name: 'Andres',
    lastname: 'Medina'
  }
  next()
}
