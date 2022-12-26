import { Router } from 'express'
import { UserController } from './controllers/UserController'

const routes = Router()
const controller = new UserController()

routes.get('/users', controller.getAll)

export default routes

