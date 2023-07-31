'use client';

import { motion } from 'framer-motion';
import { MdOutlineTimer } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

import { SelectPrimary, ButtonPrimary } from '@ui';

export default function PrimarySection(): JSX.Element {
	return (
		<div className='flex items-center gap-6 duration-150'>
			<motion.div
				initial={{
					opacity: 0,
					paddingTop: 50,
				}}
				animate={{
					opacity: 1,
					paddingTop: 0,
				}}
				transition={{
					type: 'keyframes',
				}}
				className='w-[70%] flex h-64 rounded-lg bg-white shadow-custom items-center px-10 '>
				<div className='flex flex-col w-full gap-6'>
					<span className='font-bold text-large tracking-widest'>00:00:00</span>
					<div className='w-full flex items-center justify-between gap-4'>
						<SelectPrimary title='Select Project' />
						<ButtonPrimary
							title='Clock In'
							Icon={MdOutlineTimer}
							color='btn-style-green'
							style={{
								width: '62%',
							}}
						/>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					paddingTop: 50,
				}}
				animate={{
					opacity: 1,
					paddingTop: 16,
				}}
				transition={{
					type: 'keyframes',
				}}
				className='w-[30%] flex h-64 flex-col gap-6 bg-white shadow-custom rounded-lg p-4 px-6 justify-between duration-150'>
				<div className='w-full flex items-center justify-between'>
					<span className='text-medium font-bold text-black'>
						Unread messages
					</span>
					<span className='text-gray-500 text-base'>Show all</span>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-2'>
						<FaUserCircle size={32} />
						<span className='text-base text-gray-600'>Rebelde421</span>
					</div>
					<div className='text-base text-gray-800'>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
							nam beatae sint, nemo, reiciendis incidunt neque praesentium earum
							rem quibusdam ad amet saepe quasi deserunt eos, adipisci harum!
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
