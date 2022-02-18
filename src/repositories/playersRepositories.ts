import { Player } from "../models/Players";
import { MongoRepository } from "./base/mongoRepository";

export class PlayersRepository extends MongoRepository<Player>{}