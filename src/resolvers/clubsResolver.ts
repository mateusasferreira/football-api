import { Club } from "../models/Clubs";
import { ClubsRepository } from "../repositories/clubsRepository";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class ClubsResolver {
  private readonly clubsRepo

  constructor(){
    this.clubsRepo = new ClubsRepository(Club)
  }

  @Query(returns => [Club])
  async getClubs(
    @Arg("name", {nullable: true}) name?: string, 
    @Arg("country", {nullable: true}) country?: string, 
    ): Promise<Club[]>{
    const args = {}

    name && Object.assign(args, {name})
    country && Object.assign(args, {country})

    const clubs = await this.clubsRepo.find(args)

    return clubs
  }

  @Query(returns => Club)
  async getClub(
    @Arg("id", {nullable: false}) id: string
    ): Promise<Club>{
    const club = await this.clubsRepo.findOne(id)

    if(!club) throw new Error("No Club Found");

    return club
    
  }
}

