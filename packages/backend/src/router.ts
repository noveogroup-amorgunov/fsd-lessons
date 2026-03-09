import express from 'express'
import { authorizedMiddleware } from './middlewares/authorizedMiddleware'
import { login } from './routes/(auth)/login'
import { refresh } from './routes/(auth)/refresh'
import { register } from './routes/(auth)/register'
import { getCart } from './routes/(cart)/getCart'
import { updateCart } from './routes/(cart)/updateCart'
import { latestProducts } from './routes/(products)/latest-products'
import { getMe } from './routes/(users)/me'
import { getUsers } from './routes/(users)/users'

export function getRoutes() {
  const router = express.Router()

  // Products
  router.get('/products/latest', latestProducts)

  // Auth
  router.post('/login', login)
  router.post('/register', register)
  router.post('/auth/refresh', refresh)

  // Users
  router.get('/users', getUsers)
  router.get('/me', authorizedMiddleware, getMe)

  // Cart
  router.get('/cart', authorizedMiddleware, getCart)
  router.patch('/cart', authorizedMiddleware, updateCart)

  return router
}
