import "reflect-metadata";
import connectDB from './config/database.config'
import dotenv from 'dotenv'
import express from 'express'

import clubsRoutes from './routes/clubsRoutes'
import playerRoutes from './routes/playersRoutes'

dotenv.config()


const server = express()

server.use(express.json())
server.use(clubsRoutes)
server.use(playerRoutes)

connectDB()

server.listen(4000, () => console.log('Server running!'))