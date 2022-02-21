import { Request, Response } from "express"
import { Player } from "../models/Players"
import { PlayersRepository } from "../repositories/playersRepositories"

export class PlayerController {
  private readonly playerRepo

  constructor(){
    this.playerRepo = new PlayersRepository(Player)
  }

  async find(req: Request, res: Response){
    try {
      const {name, position} = req.query

      const args = {}

      Object.assign(args, name && {name}, position && {position})

      const player = await this.playerRepo.find(args)

      res.status(200).json(player)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: e.message})
    }
  }

  async findOne(req: Request, res: Response){
    try {
      const {id} = req.params

      const player = await this.playerRepo.findOne(id)

      if(!player) throw new Error("No player found");

      res.status(200).json(player)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: e.message})
    }
  }

  async insert(req: Request, res: Response){
    try {

      const {name, position, club} = req.body

      if(!name || !position || !club) throw new Error("Fields name, position and club are required");
      
      const player = await this.playerRepo.insert({name, position, club})

      res.status(201).json(player)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }

  async update(req: Request, res: Response){
    try {

      const {id} = req.params
    
      const {name, position, club} = req.body
      
      const args = {}

      Object.assign(args, name && {name}, position && {position}, club && {club})

      const player = await this.playerRepo.update(id, {name, position, club})

      res.status(200).json(player)
    } catch (e) {
      console.log(e)
      res.status(400).json(e.message)
    }
  }

  async delete(req: Request, res: Response){
    try {

      const {id} = req.params

      await this.playerRepo.delete(id)

      res.sendStatus(200)
    } catch (e) {
      console.log(e)
      res.sendStatus(e)
    }
  }
}