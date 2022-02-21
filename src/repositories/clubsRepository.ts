import { ObjectId } from "mongodb";
import { Club } from "../models/Clubs";
import { MongoRepository } from "./base/mongoRepository";

export class ClubsRepository extends MongoRepository<Club> {
  public override async find(item: Partial<Club> = {}): Promise<Club[]> {
    return await this.collection.aggregate([{ $match: item }]).lookup({
      from: "players",
      localField: "_id",
      foreignField: "club",
      as: "players",
    });
  }

  public override async findOne(
    item: string 
  ): Promise<Club | null> {
    const [club] = await this.collection
      .aggregate([{ $match: { _id: new ObjectId(item)}}])
      .lookup({
        from: "players",
        localField: "_id",
        foreignField: "club",
        as: "players",
      })

    return club
  }
}
