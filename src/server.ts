import "reflect-metadata";
import connectDB from './config/database.config'
import dotenv from 'dotenv'
import express from 'express'

import clubsRoutes from './routes/clubsRoutes'
import playerRoutes from './routes/playersRoutes'
import { exceptionFilter } from "./middlewares/exceptionFilter";

dotenv.config()


const server = express()

server.use(express.json())
server.use(clubsRoutes)
server.use(playerRoutes)
server.use(exceptionFilter)

connectDB()

server.listen(4000, () => console.log('Server running!'))