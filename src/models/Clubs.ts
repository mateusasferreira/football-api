import {prop} from '@typegoose/typegoose'

export class Clubs {
	id: string
	
	@prop({required: true})
	name: string
	
	@prop({required: true})
	country: string
}