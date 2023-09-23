import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
import allTickets from '../data/allTickets'
export const Table = () => {
    const tableHead= ['Date Created','Priority','Organization','Ticket type','Assets','Incident type','Indicators','Reporter','Assignee','Action'];
    return (
    <div className='mt-6 bg-surface-light-primary overflow-hidden h-full rounded-md border border-borderColor-secondary'>
        <div className='p-4 flex justify-between items-center gap-2'>
            <div className='relative'>
                <FiSearch className='text-2xl text-textColor-muted absolute top-2 left-2'/>
                <input type="text" placeholder='Search by any ticket details...' className='outline-none border border-borderColor-secondary rounded-md pl-10 pr-4 h-10 w-[532px]' />
            </div>
            <div className='flex items-center gap-x-2 text-sm font-medium'>
              <p>Showing</p>
              <select name="" id="" className='p-1 pr-4 border rounded-md outline-none appearance-none bg-surface-light-secondary'>
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>
              <p>of  1,647 of Results</p>
            </div>
        </div>
        <div className='mt-2 overflow-hidden'>
            <table className='table-auto w-full'>
                <thead>
                        {tableHead.map((title,key)=>(
                            <th key={key} className={`${title === 'Assets' && 'hidden 2xl:table-cell'}`}>{title}</th>
                        ))}
                </thead>
                <tbody>
                    {
                        allTickets.map((item,key)=>(
                            <tr key={key}>
                                <td className='p-2'>{item.dateCreated}</td>
                                <td className='p-2'>
                                    {
                                        item.priority === 1 
                                        ? <span className='priority-chip priority-low'>Low</span> 
                                        : item.priority === 2 
                                        ? <span className='priority-chip priority-medium'>Medium</span> 
                                        : item.priority === 3 
                                        ? <span className='priority-chip priority-high'>High</span>
                                        : item.priority === 4
                                        ? <span className='priority-chip priority-critical'>Critical</span>
                                        : '-'
                                    }
                                </td>
                                <td className='max-w-[100px] 2xl:max-w-[250px]'>{item.organization} - {item.location}</td>
                                <td className=''>{item.ticketType}</td>
                                <td className='hidden 2xl:table-cell'>{item.assetsDevice}</td>
                                <td className=' max-w-[200px] space-x-1'>
                                    {item.incidentType.map((chip,key)=>(
                                        <span key={key} className='chip'>{chip}</span>
                                    )) }
                                </td>
                                <td className='max-w-[200px] 2xl:max-w-[240px] space-x-1'>
                                    {item.indicators.map((chip,key)=>(
                                        <span key={key} className='chip'>{chip}</span>
                                    )) }
                                </td>
                                <td className=''>{item.reporter}</td>
                                <td className=''>{item.assignee}</td>
                                <td className='space-x-1'>
                                    { item.ticketType === 'Cyber' &&
                                        <button className='text-base hover:bg-primary-100 p-1 rounded-md'>
                                            <BiEditAlt/>
                                        </button>
                                    }
                                     <button className='text-base hover:bg-primary-100 p-1 rounded-md'>
                                        <AiOutlineEye/>
                                     </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}