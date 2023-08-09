import { IoIosArrowDown } from 'react-icons/io';
import { MdEdit, MdSimCardDownload } from 'react-icons/md';
import { RiDeleteBin6Fill, RiEditBoxFill } from 'react-icons/ri';

export default function Table(): JSX.Element {
	return (
		<div>
			<div className='w-full h-[40rem] overflow-y-scroll hidescrollbar rounded-lg bg-white px-0 p-4 gap-4 flex flex-col'>
				<div className='relative overflow-x-auto'>
					<table className='w-full text-sm text-left text-gray-900 font-medium '>
						<thead className='text-xxs text-gray-900 border-primary border-b-2'>
							<tr>
								<th scope='col' className='px-6 py-3 pl-0'>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Project Name</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Customer</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Contractor</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-0 py-3'>
									Quick Actions
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Name 1</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Awesome Name</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>My Project</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alisson Stewart</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alison Stewart</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Name 1</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Awesome Name</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>My Project</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alisson Stewart</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alison Stewart</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Name 1</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Saami294</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>Awesome Name</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>John Doe</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<span>My Project</span>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alisson Stewart</span>
										<RiEditBoxFill className='text-primary' />
									</div>
								</td>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<span>Alison Stewart</span>
										<RiEditBoxFill className='text-primaryOrange' />
									</div>
								</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<MdSimCardDownload size={20} />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
