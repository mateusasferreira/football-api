import { Club } from "../models/Clubs";
import { MongoRepository } from "./base/mongoRepository";

export class ClubsRepository extends MongoRepository<Club> {}