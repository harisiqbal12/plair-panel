'use client';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { ButtonPrimary } from '@ui';
import { AiOutlineEye } from 'react-icons/ai';
import { BiAlarmExclamation } from 'react-icons/bi';

import type { ProjectCardsProps } from './types';

export default function ProjectCards({ status }: ProjectCardsProps): JSX.Element {
	const computedStatusClassName = useMemo(() => {
		if (status === 'Awaiting Payment') return 'bg-primaryGreen';
		if (status === 'Awaiting Clarification') return 'bg-primaryOrange';
		if (status === 'Finding New Developer') return 'bg-primarySky';
	}, [status]);

	return (
		<motion.div
			initial={{
				opacity: 0,
				marginTop: 40,
			}}
			animate={{
				opacity: 1,
				marginTop: 0,
			}}
			transition={{
				type: 'keyframes',
			}}
			className='w-[40%] bg-white shadow-custom h-[20rem] rounded-lg flex flex-col p-4 justify-between duration-150 '>
			<div className='w-full flex items-start justify-between'>
				<div className='flex flex-col'>
					<span className='text-medium text-black'>The best Project</span>
					<span className='text-xss text-gray-500'>Rebelde42! - 4500$</span>
				</div>
				<div
					className={`px-2 p-1 rounded-lg text-white font-semibold text-xs mt-1 ${computedStatusClassName}`}>
					<span>{status}</span>
				</div>
			</div>
			<div className='w-full flex text-xss text-gray-500'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta sunt
					enim excepturi laboriosam, animi nobis debitis nostrum. Incidunt tempora
					saepe at eos nostrum laudantium unde quis sit autem officiis. Ipsa.
				</p>
			</div>
			<div className='flex flex-col text-gray-500 gap-1'>
				<span>PROGRESS</span>
				<div className='flex items-center gap-2'>
					<div className='w-32 h-3 rounded-full bg-gray-300'>
						<div className='w-[60%] h-full rounded-full bg-primarySky' />
					</div>
					<span className='text-gray-500'>74%</span>
				</div>
			</div>
			<div className='w-full flex items-center justify-between gap-6'>
				<ButtonPrimary
					title='View Project'
					Icon={AiOutlineEye}
					style={{
						height: '40px',
						width: '40%',
						fontSize: '12px',
					}}
					color='btn-style-orange'
				/>
				<div className='flex flex-col items-end gap-2'>
					<div className='w-8 h-8 rounded-md border-primary border-2 flex items-center justify-center text-primary'>
						<BiAlarmExclamation size={20} />
					</div>
					<div className='text-xss gap-2 flex '>
						<span className='text-gray-500'>DUE</span>
						<span>{new Date().toLocaleDateString()}</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
