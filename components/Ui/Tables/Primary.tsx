import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsPlayFill } from 'react-icons/bs';
import { BiSolidCopy } from 'react-icons/bi';

export default function PrimaryTable(): JSX.Element {
	return (
		<div className='w-full h-[30rem] overflow-y-scroll hidescrollbar rounded-lg bg-white shadow-custom p-4 gap-4 flex flex-col'>
			<div className='flex items-center justify-between text-gray-500'>
				<span className='text-xs'>TODAY</span>
				<span className='text-xs'>TOTAL. 02:42:05</span>
			</div>
			<div className='w-full h-1 rounded-full bg-primary' />
			<div className='relative overflow-x-auto'>
				<table className='w-full text-sm text-left text-gray-500 '>
					<thead className='text-xs text-gray-700 uppercase '>
						<tr>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
							<th scope='col' className='px-6 py-1'></th>
						</tr>
					</thead>
					<tbody>
						<tr className='bg-white border-b '>
							<th
								scope='row'
								className='px-6 py-4 text-gray-900 whitespace-nowrap font-semibold '>
								My Project
							</th>
							<td className='px-6 py-4'>Saami294</td>
							<td className='px-6 py-4'>
								<div className='p-2 w-[70%] text-xs rounded-lg bg-rose-400 text-white font-semibold flex items-center justify-center'>
									<span>Pending removal</span>
								</div>
							</td>
							<td className='px-6 py-4'>8:00am-8:43am</td>
							<td className='px-6 py-4'>00:43:12</td>
							<td className='px-6 py-4'>
								<BsPlayFill size={20} className='text-primary' />
							</td>
							<td className='px-6 py-4'>
								<div className='flex items-center gap-2'>
									<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
									<BiSolidCopy size={20} />
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
										<MdEdit />
									</div>
								</div>
							</td>
						</tr>
						<tr className='bg-white border-b '>
							<th
								scope='row'
								className='px-6 py-4 text-gray-900 whitespace-nowrap font-semibold '>
								My Project
							</th>
							<td className='px-6 py-4'>Saami294</td>
							<td className='px-6 py-4'>
								<div className='p-2 w-[70%] text-xs rounded-lg bg-rose-400 text-white font-semibold flex items-center justify-center'>
									<span>Pending removal</span>
								</div>
							</td>
							<td className='px-6 py-4'>8:00am-8:43am</td>
							<td className='px-6 py-4'>00:43:12</td>
							<td className='px-6 py-4'>
								<BsPlayFill size={20} className='text-primary' />
							</td>
							<td className='px-6 py-4'>
								<div className='flex items-center gap-2'>
									<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
									<BiSolidCopy size={20} />
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
										<MdEdit />
									</div>
								</div>
							</td>
						</tr>
						<tr className='bg-white border-b '>
							<th
								scope='row'
								className='px-6 py-4 text-gray-900 whitespace-nowrap font-semibold '>
								My Project
							</th>
							<td className='px-6 py-4'>Saami294</td>
							<td className='px-6 py-4'>
								<div className='p-2 w-[70%] text-xs rounded-lg bg-rose-400 text-white font-semibold flex items-center justify-center'>
									<span>Pending removal</span>
								</div>
							</td>
							<td className='px-6 py-4'>8:00am-8:43am</td>
							<td className='px-6 py-4'>00:43:12</td>
							<td className='px-6 py-4'>
								<BsPlayFill size={20} className='text-primary' />
							</td>
							<td className='px-6 py-4'>
								<div className='flex items-center gap-2'>
									<RiDeleteBin6Fill size={20} className='text-primaryOrange' />
									<BiSolidCopy size={20} />
									<div className='w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center'>
										<MdEdit />
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
