import { ButtonPrimary } from '@ui';
import { HiDocumentDownload } from 'react-icons/hi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';

export default function DraftCard(): JSX.Element {
	return (
		<div className='w-[40%] h-[10rem] bg-white shadow-custom rounded-lg flex flex-col p-4 justify-between'>
			<div className='w-full flex items-center justify-between'>
				<span className='text-medium text-black'>The best project</span>
				<span className='text-xs text-black'>11/04/2023 - 11:22am</span>
			</div>
			<div className='flex gap-4 items-center'>
				<ButtonPrimary
					title='Edit Contract'
					Icon={MdModeEdit}
					style={{
						height: '40px',
						width: '40%',
						fontSize: '12px',
					}}
					color='btn-style-orange'
				/>
				<div className='flex items-center'>
					<HiDocumentDownload
						size={18}
						className='text-primary cursor-pointer hover:scale-110 transition duration-200'
						title='download'
					/>
					<RiDeleteBin6Fill
						size={18}
						className='text-primaryOrange cursor-pointer hover:scale-110 transition duration-200'
						title='delete'
					/>
				</div>
			</div>
		</div>
	);
}
