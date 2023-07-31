'use client';
import { motion } from 'framer-motion';
import { ButtonPrimary } from '@ui';
import { BiSolidDirectionRight } from 'react-icons/bi';

export default function QuotesCard(): JSX.Element {
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
					className={`px-2 p-1 rounded-lg text-white font-semibold text-xs mt-1 bg-primaryOrange`}>
					<span>Reviewing quote</span>
				</div>
			</div>
			<div className='w-full flex text-xss text-gray-500'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta sunt
					enim excepturi laboriosam, animi nobis debitis nostrum. Incidunt tempora
					saepe at eos nostrum laudantium unde quis sit autem officiis. Ipsa.
				</p>
			</div>
			<div className='w-full flex items-center justify-between gap-6'>
				<ButtonPrimary
					title='Turn to Project'
					Icon={BiSolidDirectionRight}
					style={{
						height: '40px',
						width: '40%',
						fontSize: '12px',
					}}
					color='btn-style-orange'
				/>
				<div className='flex flex-col items-end gap-2'>
					<div className='text-xss gap-2 flex '>
						<span>{new Date().toLocaleDateString()}</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
