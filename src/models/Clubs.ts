import {prop, Ref} from '@typegoose/typegoose'
import { Player } from './Players'

export class Club {
	_id: string
	
	@prop({required: true})
	name: string
	
	@prop({required: true})
	country: string

	@prop({ref: () => Player})
	players?: Ref<Player>[]
}