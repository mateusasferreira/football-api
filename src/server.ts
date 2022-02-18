import "reflect-metadata";
import connectDB from './config/database.config'
import dotenv from 'dotenv'
import express from 'express'

import clubsRoutes from './routes/clubsRoutes'

dotenv.config()


const server = express()

server.use(express.json())
server.use(clubsRoutes)

connectDB()

server.listen(4000, () => console.log('Server running!'))