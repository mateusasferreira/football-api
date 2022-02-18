import { Club } from "../models/Clubs";
import { ClubsRepository } from "../repositories/clubsRepository";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

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

  @Mutation(returns =>  Club)
  async insertClub(
    @Arg("name", {nullable: false}) name: string, 
    @Arg("country", {nullable: false}) country: string,
  ): Promise<Club>{
     const club = await this.clubsRepo.insert({name, country})

     return club
  }

  @Mutation(returns => Club)
  async updateClub(
    @Arg("id", {nullable: false}) id: string,
    @Arg("name", {nullable: true}) name?: string, 
    @Arg("country", {nullable: true}) country?: string,
  ): Promise<Club>{
    const args = {}

    name && Object.assign(args, {name})
    country && Object.assign(args, {country})
    
    const club = await this.clubsRepo.update(id, args)

    if(!club) throw new Error("No club found");    

    return club
  }

  @Mutation(returns => Boolean)
  async deleteClub(
    @Arg("id", {nullable: false}) id: string,
  ): Promise<boolean>{
    return await this.clubsRepo.delete(id)
  }
}

