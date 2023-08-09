import { IoIosArrowDown } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BiSolidCopy } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

export default function SecondaryTable(): JSX.Element {
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
										<span className='font-bold'>User</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>User Status</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Email Address</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Phone number</span>
										<div className='flex flex-col'>
											<IoIosArrowDown className='rotate-180' size={12} />
											<IoIosArrowDown size={12} />
										</div>
									</div>
								</th>
								<th scope='col' className='px-6 py-3'>
									<div className='flex gap-2 items-center'>
										<span className='font-bold'>Company</span>
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
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-orange-500 text-white font-semibold flex items-center justify-center'>
										<span>Contractor</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>--</td>
								<td className='px-6 py-4 uppercase'>--</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-red-500 text-white font-semibold flex items-center justify-center'>
										<span>Admin</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-orange-500 text-white font-semibold flex items-center justify-center'>
										<span>Contractor</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>--</td>
								<td className='px-6 py-4 uppercase'>--</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-red-500 text-white font-semibold flex items-center justify-center'>
										<span>Admin</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
									</div>
								</td>
							</tr>
							<tr className='bg-white border-b '>
								<th scope='row' className='px-6 py-4 pl-0 whitespace-nowrap  '>
									<div className='w-4 h-4 rounded-sm  border border-gray-600' />
								</th>
								<td className='px-6 py-4 font-medium text-gray-900'>
									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
											<FaUserCircle size={32} color='#fff' />
										</div>
										<span>username 1</span>
									</div>
								</td>
								<td className='px-6 py-4'>
									<div className='p-2 py-1 uppercase w-fit  text-xs rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center'>
										<span>Customer</span>
									</div>
								</td>
								<td className='px-6 py-4'>example@example.com</td>
								<td className='px-6 py-4'>+00 123456789</td>
								<td className='px-6 py-4 uppercase'>Aista</td>
								<td className='px-0 py-4'>
									<div className='flex items-center gap-2 text-medium'>
										<MdEdit className='text-primary' />
										<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
										<BiSolidCopy size={20} />
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
