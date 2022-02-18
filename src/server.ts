import "reflect-metadata";
import connectDB from './config/database.config'
import dotenv from 'dotenv'
import { buildSchema } from "type-graphql";
import { ClubsResolver } from "./resolvers/clubsResolver";
import { ApolloServer } from "apollo-server";

dotenv.config()

const main = async () => {
  try {
    connectDB()
    const schema = await buildSchema({
      resolvers: [ClubsResolver],
    })
    const server = new ApolloServer({ schema })
    await server.listen(4000)
  console.log("Server has started!")
  } catch (e) {
    console.log(e)
  }
}

main()