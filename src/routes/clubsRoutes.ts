import { Router } from 'express'
import { ClubsController } from '../controllers/clubControllers'

const routes = Router()

const clubsController = new ClubsController()

routes.get('/clubs', clubsController.find)
routes.get('/clubs/:id', clubsController.findOne)
routes.post('/clubs', clubsController.insert)
routes.put('/clubs/:id', clubsController.update)
routes.delete('/clubs/:id', clubsController.delete)

export default routes