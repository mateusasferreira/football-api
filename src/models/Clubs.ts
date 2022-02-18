import {prop} from '@typegoose/typegoose'
import {ArgsType, Field, ID, Int} from 'type-graphql'

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