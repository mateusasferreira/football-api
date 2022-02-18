import { Club } from "src/models/Clubs";
import { MongoRepository } from "./base/mongoRepository";

export class ClubsRepository extends MongoRepository<Club> {}