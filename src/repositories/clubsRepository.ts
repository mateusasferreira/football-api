import { Club } from "../models/Clubs";
import { MongoRepository } from "./base/mongoRepository";

export class ClubsRepository extends MongoRepository<Club> {
  public override async find(item: Partial<Club> = {}): Promise<Club[]> {
    return await this.collection
      .aggregate([{$match: item}]).lookup({from: "players", localField: "_id", foreignField: "club", as: "players"})
  }
}