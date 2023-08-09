import { Attributes, HTMLProps } from 'react';

export interface ProjectCardsProps extends HTMLProps<HTMLDivElement> {
	status:
		| 'Awaiting Payment'
		| 'Awaiting Clarification'
		| 'Finding New Developer'
		| 'Getting estimate'
		| 'Reviewing quote';
	btnTitle?: string;
}
