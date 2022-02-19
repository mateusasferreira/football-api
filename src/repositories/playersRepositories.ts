import { FilterQuery } from "mongoose";
import { Player } from "../models/Players";
import { MongoRepository } from "./base/mongoRepository";

export class PlayersRepository extends MongoRepository<Player> {
  public override async find(item: Partial<Player> = {}): Promise<Player[]> {
    return await this.collection
      .find(item as FilterQuery<Player>)
      .populate("club");
  }

  public override async findOne(
    item: string | Partial<Player>
  ): Promise<Player | null> {
    return typeof item === "string"
      ? await this.collection.findById(item).populate("club")
      : await this.collection
          .findOne(item as FilterQuery<Player>)
          .populate("club");
  }
}
