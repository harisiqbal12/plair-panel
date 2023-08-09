import { ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	color: 'btn-style-green' | 'btn-style-orange' | 'btn-style-purple';
	Icon?: any;
}

export interface OutlinedButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	border: 'btn-border-green' | 'btn-border-purple';
	Icon?: any;
}
