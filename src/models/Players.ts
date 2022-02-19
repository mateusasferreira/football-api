import {prop, Ref} from '@typegoose/typegoose'
import { Club } from './Clubs'

export class Player {
	_id: string
	
	@prop({required: true})
	name: string
	
	@prop({required: true})
	position: "goalkepper" | "defender" | "midfield" | "forward"
	
	@prop({ref: () => Club})
	club?: Ref<Club>
}