import { DocumentType, getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";
import { FilterQuery } from "mongoose";
import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";

export abstract class MongoRepository<T, U extends AnyParamConstructor<T> = AnyParamConstructor<T>> implements IRead<T>, IWrite<T> {
  private readonly collection: ReturnModelType<U, T>

  constructor(cls: U){
    this.collection = getModelForClass<U, T>(cls)
  }

  public async find(item: Partial<T>): Promise<T[]> {
      return await this.collection.find(item as FilterQuery<T>)
  }

  public async findOne(item: string | Partial<T>): Promise<T | null> {
      return typeof item === 'string' ? await this.collection.findById(item) : await this.collection.findOne(item as FilterQuery<T>)
  }

  public async insert(item: Partial<T>): Promise<T> {
      return this.collection.create(item)
  }

  public insertMany(item: Partial<T[]>): Promise<T[]> {
      return this.collection.insertMany(item)
  }

  public async update(id: string, item: Partial<T>): Promise<T | null> {
    await this.collection.findByIdAndUpdate(id, item)

    return this.findOne(id)
  }

  public async delete(id: string): Promise<boolean> {
      const result = await this.collection.findByIdAndDelete(id)

      return result ? true : false
  }
}