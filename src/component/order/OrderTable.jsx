import React from 'react';
import { Search, MoveLeft, ChevronDown, Ellipsis, Clock , Eye, Printer } from 'lucide-react';

export default function OrderTable({ orders }) {
    return (
       <div className='overflow-auto max-h-[79vh] overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 dark:scrollbar-thumb-stone-800 dark:scrollbar-track-zinc-800 relative '>
            <table className="order-table min-w-[1150px] w-full">
                <thead className="sticky top-0 z-10 bg-gray-50 dark:bg-zinc-800 ">
                    <tr className="py-1 bg-gray-50 dark:bg-zinc-800">
                        <th colSpan={3}>
                            <div className="pr-2">
                            <select
                                id="customerSelect"
                                name="customerSelect"
                                className="w-full outline-0 text-sm appearance-none table-customer-selector dark:text-gray-100 px-5 py-[10px] rounded-4xl bg-gray-300 dark:bg-stone-800"
                            >
                                <option value="all">Select Customer</option>
                                {orders.map((order, index) => (
                                <option key={index} value={order.customer.shop}>
                                    {order.customer.shop}
                                </option>
                                ))}
                            </select>
                            </div>
                        </th>
                        <th>
                            <div className="dark:text-gray-100 px-1  rounded-l-2xl bg-gray-300 dark:bg-stone-800 text-sm">Cus. Type</div>
                        </th>
                        <th>
                            <div className="px-1 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Vendors</div>
                        </th>
                        <th>
                            <div className="px-1 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Items</div>
                        </th>
                        <th>
                            <div className="px-5 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Invoice</div>
                        </th>
                        <th>
                            <div className="px-1 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Payment Status</div>
                        </th>
                        <th>
                            <div className="px-1 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Created</div>
                        </th>
                        <th>
                            <div className="px-1 dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Fulfillment</div>
                        </th>
                        <th>
                            <div className="dark:text-gray-100  bg-gray-300 dark:bg-stone-800 text-sm">Store Exit</div>
                        </th>
                        <th>
                            <div className="dark:text-gray-100  rounded-r-2xl bg-gray-300 dark:bg-stone-800 text-sm">
                                <button className="dark:text-gray-100 w-[30px] h-[30px] px-1 py-[10px] relative rounded-full flex justify-center place-items-center bg-gray-400 dark:bg-zinc-800 text-sm leading-[30px]">
                                    <Ellipsis className="dark:text-gray-100" size={16} />
                                </button>
                            </div>
                        </th>
                        </tr>

                </thead>
                <tbody className='border-t-3 border-t-gray-50 dark:border-t-zinc-800 '>
                    {orders.map((order, index) => (
                        <tr key={index} className="">
                            <td>
                                <div className='rounded-l-2xl bg-gray-300  dark:bg-stone-800 flex-col justify-center '>
                                    <div className=" px-2 text-sm leading-[16px] ">
                                        <span className='dark:text-gray-100'>{order.customer.shop}</span> 
                                        <span className="text-xs block text-gray-400">{order.customer.name}</span>
                                    </div>
                                </div>
                            </td>
                            <td >
                                <div className=" bg-gray-300  dark:bg-stone-800 text-sm flex-col justify-center ">
                                    <span className="text-xs block text-gray-400">Tax Exempt</span>
                                    <span className="text-sm block dark:text-gray-100"> {order.taxExempt ? 'Yes' : 'No'}</span>
                                </div>
                            
                            </td>
                            <td>
                                <div className=" bg-gray-300  dark:bg-stone-800 text-sm flex-col justify-center ">
                                    <span className="text-xs block text-gray-400">Account</span>
                                    <span className="text-sm block dark:text-gray-100">
                                        {order.account}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className=" bg-gray-300  dark:bg-stone-800 text-sm text-center flex-col justify-center items-center">
                                    <span className="w-[28px] h-[28px] relative">
                                  

                                    {(() => {
                                        switch (order.paymentStatus) {
                                            case 1:
                                                return (
                                                    <span className='dark:text-gray-100 px-1 py-[5px] block relative rounded-lg w-[30px] h-[30px]  bg-gray-200 dark:bg-zinc-800 '>
                                                        <i className='icon-car-wrench '></i>
                                                    </span>
                                                );
                                            case 2:
                                                return (
                                                      <span className='dark:text-gray-100 px-1 py-[5px] block relative rounded-lg w-[30px] h-[30px]  bg-gray-200 dark:bg-zinc-800 '>
                                                            <i className='icon-cars '></i>
                                                        </span>
                                                );
                                        
                                            default:
                                                return (
                                                    <span className='dark:text-gray-100 px-1 py-[5px] block relative rounded-lg w-[30px] h-[30px]  bg-gray-200 dark:bg-zinc-800 '>
                                                        <i className='icon-wrench '></i>
                                                    </span>

                                                );
                                        }
                                    })()}
                                      
                                        

                                       
                                       
                                    
                                  

                                    </span>
                                </div>
                            </td>
                            <td >
                                <div className="dark:text-gray-100 bg-gray-300  dark:bg-stone-800 text-sm text-center  flex-col justify-center">{order.vendors}</div>
                            </td>
                            <td>
                                <div className=" bg-gray-300  dark:bg-stone-800 text-sm text-center flex-col justify-center items-center">
                                    <span className='text-xs block text-gray-400'>
                                        Types: <span className="dark:text-gray-100">{order.items.types}</span>
                                    </span>
                                    <span className="text-xs block text-gray-400">
                                        Quantity: <span className="dark:text-gray-100">{order.items.quantity}</span>
                                    </span>
                                </div>
                            </td>
                            <td >
                                <div className=" bg-gray-300  dark:bg-stone-800 text-xs text-center flex-col justify-center items-center">
                                    <span className="dark:text-gray-100">{order.invoice}</span>
                                    <span className="flex flex-row gap-1 justify-center items-center">
                                        <button className="text-gray-100 w-[20px] h-[20px] rounded-full flex justify-center place-items-center bg-green-500">
                                        <Printer size={12} />              
                                    </button>
                                    <button className="text-gray-100 w-[20px] h-[20px] rounded-full flex justify-center place-items-center bg-green-500">
                                        <Eye size={12} />              
                                    </button>
                                    </span>
                                </div>
                            </td>
                            <td >
                                <div className=" bg-gray-300  dark:bg-stone-800 text-sm text-center paymentStatus flex-col justify-center items-center">
                                {(() => {
                                    switch (order.paymentStatus) {
                                        case 1:
                                            return (
                                                <div className="px-1 py-[5px] block relative w-full h-7 rounded-lg  bg-slate-100 dark:bg-zinc-800 text-sm text-green-500">
                                                Paid
                                                </div>
                                            );
                                        case 2:
                                            return (
                                                <div className="px-1 py-[5px] block relative w-full h-7 rounded-lg  bg-slate-100 dark:bg-zinc-800 text-sm text-yellow-500">
                                                Partially Paid
                                                </div>
                                            );
                                    
                                        default:
                                            return (
                                                <div className="px-1 py-[5px] block relative w-full h-7 rounded-lg  bg-slate-100 dark:bg-zinc-800 text-sm text-red-500">
                                                    Not Paid
                                                </div>
                                            );
                                    }
                                })()}
                            </div>
                            </td>
                            <td>
                                <div className='  bg-gray-300  dark:bg-stone-800 text-sm flex-row justify-center items-center '>
                                    <span className="w-[28px] h-[28px] createdTime relative">
                                        <Clock className=" dark:text-gray-100 px-1 py-[5px] block relative rounded-lg w-[28px] h-[28px] text- bg-gray-200 dark:bg-zinc-800 " size={18} />
                                        <span className="text-xs block text-gray-400">{order.created}</span>

                                    </span>
                                </div>
                            
                            </td>
                            <td>
                            <div className=" bg-gray-300  dark:bg-stone-800 text-sm text-center">
                                {(() => {
                                    switch (order.fulfillment) {
                                        case 1:
                                            return (
                                                <div className="px-1 py-[10px] block relative w-full h-full rounded-lg text- bg-gray-200 dark:bg-zinc-800 text-sm text-green-500">
                                                    Ready For Pickup
                                                </div>
                                            );
            
                                        default:
                                            return (
                                                <div className="px-1 py-[10px] block relative w-full h-full rounded-lg text- bg-gray-200 dark:bg-zinc-800 text-sm text-yellow-500">
                                                Parts Picked
                                                </div>
                                            );
                                    }
                                })()}
                            </div>
                            </td>
                            <td >
                            <div className=" bg-gray-300  dark:bg-stone-800 text-sm text-center">
                                {(() => {
                                    switch (order.storeExit) {
                                        case 1:
                                            return (
                                                <div className="px-1 py-[4px] block relative w-full h-full rounded-lg text- bg-gray-200 dark:bg-zinc-800 text-sm text-yellow-500 leading-[16px]">
                                                Ready For Pickup <br/>By Customer
                                                </div>
                                            );
                                        case 2:
                                            return (
                                                <div className="px-1 py-[10px] block relative w-full h-full rounded-lg text- bg-gray-200 dark:bg-zinc-800 text-sm text-green-500">
                                                Picked By Customer
                                                </div>
                                            );
                                        default:
                                            return (
                                                <div className="px-1 py-[10px] block relative w-full h-full rounded-lg text- bg-gray-200 dark:bg-zinc-800 text-sm text-red-500">
                                                    Customer Pickup
                                                </div>
                                            );
                                    }
                                })()}
                            </div>
                                
                            
                            </td>
                            <td>   
                                <div className=" rounded-r-2xl bg-gray-300  dark:bg-stone-800 text-sm text-center justify-center items-center">
                                    <button className="dark:text-gray-100 w-[30px] h-[30px] px-1 py-[10px]  relative  rounded-full flex justify-center place-content-center  bg-gray-400 dark:bg-zinc-800 text-sm leading-[40px]">
                                    <ChevronDown className="dark:text-gray-100" size={16} />
                                    </button>
    
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
       </div>
    )
}