import { NextFunction, Request, Response } from "express"
import { Repository } from "src/repositories/interfaces/IRepository"
import { Club } from "../models/Clubs"
import { HttpException } from "../utils/errors"
// import { ClubsRepository } from "../repositories/clubsRepository"

export class ClubsController {
  private readonly clubsRepo: Repository<Club>

  constructor(clubRepo: Repository<Club>){
    this.clubsRepo = clubRepo
  }

  public async find(req: Request, res: Response, next: NextFunction){
    try {

      const {name, country} = req.query

      const args = {}

      Object.assign(args, name && {name}, country && {country})

      const clubs = await this.clubsRepo.find(args)

      res.status(200).json(clubs)
    } catch (e) {
      next(e)
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction){
    try {

      const {id} = req.params

      const club = await this.clubsRepo.findOne(id)

      if(!club) throw new HttpException(404, "No Club Found");

      res.status(200).json(club)
    } catch (e) {
      next(e)
    }
  }

  async insert(req: Request, res: Response, next: NextFunction){
    try {

      const {name, country} = req.body

      if(!name || !country) throw new HttpException(400, "Fields name and country are required");

      const club = await this.clubsRepo.insert({name, country})

      res.status(201).json(club)
    } catch (e) {
      next(e)
    }
  }

  async update(req: Request, res: Response, next: NextFunction){
    try {

      const {id} = req.params

      const {name, country} = req.body

      const args = {}

      Object.assign(args, name && {name}, country && {country})

      const club = await this.clubsRepo.update(id, {name, country})

      res.status(200).json(club)
    } catch (e) {
      next(e)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction){
    try {

      const {id} = req.params

      await this.clubsRepo.delete(id)

      res.sendStatus(200)
    } catch (e) {
      next(e)
    }
  }
}