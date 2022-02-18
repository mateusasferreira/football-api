import "reflect-metadata";
import connectDB from './config/database.config'
import dotenv from 'dotenv'
import express, {Router, json, Request, Response} from 'express'
import { ClubsRepository } from "./repositories/clubsRepository";
import { Club } from "./models/Clubs";

dotenv.config()

connectDB()

const app = express()

const routes = Router()

app.use(routes)
app.use(json())

routes.get('/clubs', async (req: Request, res: Response) => {
  
  const clubsRepo = new ClubsRepository(Club)
  
  const clubs = await clubsRepo.find({})


  res.status(200).json(clubs)
})

routes.get('/clubs/:id', async (req: Request, res: Response) => {
  const {id} = req.params
  
  const clubsRepo = new ClubsRepository(Club)
  
  const club = await clubsRepo.findOne(id)

  res.status(200).json(club)
})

app.listen(3000, () => console.log('servidor rodando'))
