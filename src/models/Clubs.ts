import {prop} from '@typegoose/typegoose'

export class Club {
	id: string
	
	@prop({required: true})
	name: string
	
	@prop({required: true})
	country: string
}