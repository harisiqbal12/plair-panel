import { ButtonHTMLAttributes } from "react";

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	color: 'btn-style-green' | 'btn-style-orange' | 'btn-style-purple';
	Icon?: any;
}
