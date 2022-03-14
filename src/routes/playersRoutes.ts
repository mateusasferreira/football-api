import {Router} from 'express'
import { Player } from '../models/Players';
import { PlayersRepository } from '../repositories/playersRepositories';
import { PlayersController } from "../controllers/playerController";

const routes = Router()

const playerController = new PlayersController(new PlayersRepository(Player))

routes.get('/players', playerController.find.bind(playerController))
routes.get('/players/:id', playerController.findOne.bind(playerController))
routes.post('/players', playerController.insert.bind(playerController))
routes.put('/players/:id', playerController.update.bind(playerController))
routes.delete('/players/:id', playerController.delete.bind(playerController))

export default routes