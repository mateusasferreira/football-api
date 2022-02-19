import {prop} from '@typegoose/typegoose'

export class Club {
	_id: string
	
	@prop({required: true})
	name: string
	
	@prop({required: true})
	country: string
}