import { Router } from 'express'
import { Club } from '../models/Clubs'
import { ClubsRepository } from '../repositories/clubsRepository'
import { ClubsController } from '../controllers/clubControllers'

const routes = Router()

const clubsController = new ClubsController(new ClubsRepository(Club))

routes.get('/clubs', clubsController.find.bind(clubsController))
routes.get('/clubs/:id', clubsController.findOne.bind(clubsController))
routes.post('/clubs', clubsController.insert.bind(clubsController))
routes.put('/clubs/:id', clubsController.update.bind(clubsController))
routes.delete('/clubs/:id', clubsController.delete.bind(clubsController))

export default routes