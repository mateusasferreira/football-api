import { Request, Response } from "express"
import { Repository } from "src/repositories/interfaces/IRepository"
import { Club } from "../models/Clubs"
// import { ClubsRepository } from "../repositories/clubsRepository"

export class ClubsController {
  private readonly clubsRepo: Repository<Club>

  constructor(clubRepo: Repository<Club>){
    this.clubsRepo = clubRepo
  }

  public async find(req: Request, res: Response){
    try {
      
      const {name, country} = req.query
    
      const args = {}

      Object.assign(args, name && {name}, country && {country})

      const clubs = await this.clubsRepo.find(args)
      
      res.status(200).json(clubs)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }
  
  async findOne(req: Request, res: Response){
    try {

      const {id} = req.params

      const club = await this.clubsRepo.findOne(id)

      if(!club) throw new Error("No Club Found");
    
      res.status(200).json(club)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }
  
  async insert(req: Request, res: Response){
    try {

      const {name, country} = req.body

      if(!name || !country) throw new Error("Fields name and country are required");
      
      const club = await this.clubsRepo.insert({name, country})
  
      res.status(201).json(club)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }

  async update(req: Request, res: Response){
    try {

      const {id} = req.params
    
      const {name, country} = req.body
      
      const args = {}

      Object.assign(args, name && {name}, country && {country})

      const club = await this.clubsRepo.update(id, {name, country})

      res.status(200).json(club)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }

  async delete(req: Request, res: Response){
    try {

      const {id} = req.params

      await this.clubsRepo.delete(id)

      res.sendStatus(200)
    } catch (e) {
      console.log(e)
      res.sendStatus(e)
    }
  }
}