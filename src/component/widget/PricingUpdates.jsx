import { Move, ArrowRight, Funnel, Eye, TableProperties, MessageSquareMore, ChartLine, ArrowDown , ArrowUp} from 'lucide-react';

export default function PricingUpdates({ datas }) {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-300 dark:bg-stone-800 rounded-2xl pl-2 pr-1 py-2 flex flex-col gap-1 relative">
            {/* Header */}
            <div className="flex items-center justify-between pr-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Pricing Update</h2>
                <div className='button-container flex items-center gap-2'>
                    <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                        <Funnel size={16} />
                    </button>
                    <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                        <Move size={16} />
                    </button>
                </div>
            </div>

            {/* Scrollable container */}
            <div className="flex-1 max-h-[500px] xl:max-h-[20vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200  dark:scrollbar-thumb-zinc-800 dark:scrollbar-track-stone-800 pr-1 pt-3">
                <div className="flex flex-col gap-4 w-full min-w-md">
                    {datas.map((data, index) => (
                        <div key={index} className="alert-item text-gray-700 dark:text-gray-300 rounded-lg bg-gray-200 dark:bg-zinc-800">
                            <div className="w-full flex flex-row gap-1 items-center h-[40px] p-2">
                                <div className='flex-1 w-full'>
                                    <div className='w-full flex flex-row items-center pt-2 gap-1 relative pr-[10px]'>
                                         <div className='flex-1/2 text-[10px]/2 font-bold text-gray-500 dark:text-gray-400 pt-[2px]'>Vendor: <span className='text-gray-900 text-xs dark:text-gray-100'> {data.vendor}</span></div>

                                         <div className="part-name text-xs/2 font-bold text-gray-900 dark:text-gray-100 relative break-keep">{data.part_name}   <Eye size={12} className="-top-4 -right-2 absolute w-[16px] h-[16px] rounded-full bg-green-500 text-gray-100 shadow-[0px_4px_6px_3px_rgba(0,_0,_0,_0.3)] "/></div>
                                        <div className='flex-1/2 text-[10px] dark:text-gray-100 absolute -top-3 -left-1 bg-gray-500 font-bold px-1 py-0.5 rounded-xl'>
                                            {data.time}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className='w-full flex-col gap-1 text text-[10px] font-bold pr-1 dark:text-gray-400'>
                                        Part Number:
                                        <div className="part-number text-[10px] font-bold text-gray-900 dark:text-gray-100">
                                            {data.part_number}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className={`product-name text-[10px] font-bold text-gray-900 dark:text-gray-100 dark:bg-zinc-900  py-1 rounded-[6px] border-2 relative w-[74px] text-center flex items-center justify-center gap-[2px] ${data.price_change.direction === "up" ? 'border-red-500' : 'border-green-500'}`}> 
                                        {
                                            data.price_change.direction === "up" ? (
                                                <ArrowUp size={12}  className="inline-block text-red-500 w-[16px] h-[16px]" />
                                            ) : (
                                                 <ArrowDown size={12} className="inline-block text-green-500 w-[16px] h-[16px]" />
                                            )
                                        }

                                        {data.price_change.percentage}/{data.price_change.amount}

                                        <TableProperties size={16} className="top-[-8px] right-[-4px] absolute w-[16px] h-[16px] bg-gray-200 dark:bg-zinc-800 p-[2px] rounded shadow-[0px_4px_6px_3px_rgba(0,_0,_0,_0.3)]"/>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className='w-full flex-col gap-1 text text-xs font-bold  '>
                                          <div className="part-number text-[10px] font-bold text-gray-900 dark:text-gray-100">
                                            {data.price_range}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none flex  gap-[2px]'>
                                     <button className="text-xs flex-none w-[24px] h-[24px] rounded-full text-gray-100 bg-stone-800 p-[4px] hover:bg-blue-500 flex items-center border-2 border-sky-400 justify-center">
                                        <ChartLine size={16} />
                                    </button>
                                     <button className="text-xs flex-none w-[24px] h-[24px] rounded-full text-gray-100 p-[6px] bg-stone-800  hover:bg-blue-500 flex items-center justify-center">
                                        <MessageSquareMore size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50/100 dark:from-stone-800/100 to-transparent"></div>
        </div>

    )
    
}