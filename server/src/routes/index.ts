import { Application } from 'express'

import itemsRouter from './items.router'

export const routerApi = (app: Application): void => {
  app.use('/api/items', itemsRouter)
}
