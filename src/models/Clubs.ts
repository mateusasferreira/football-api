import {prop} from '@typegoose/typegoose'
import {ArgsType, Field, ID, Int, ObjectType} from 'type-graphql'

@ObjectType()
export class Club {
	@Field(type => ID)
	id: string
	
	@Field()
	@prop({required: true})
	name: string
	
	@Field()
	@prop({required: true})
	country: string
}