import express from 'express'
import { getItems, getItemId } from '../controllers/items.controller'
import { setAuthorMiddleware } from '../middleware/authors.middleware'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', setAuthorMiddleware, getItems)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:id', setAuthorMiddleware, getItemId)

export default router
