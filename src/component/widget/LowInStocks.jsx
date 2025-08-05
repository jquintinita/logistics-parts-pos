import { Move, Funnel, Calendar , ArrowRight, Eye, TableProperties } from 'lucide-react';

export default function LowInStock({ datas }) {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-300 dark:bg-stone-800 rounded-2xl pl-2 pr-1 py-2 flex flex-col gap-1 relative">
            {/* Header */}
            <div className="flex items-center justify-between pr-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Low in Stock</h2>
                <div className='button-container flex items-center gap-2'>
                    <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                        <Funnel size={16} />
                    </button>
                    <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                        <Calendar size={16} />
                    </button>
                    <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                        <Move size={16} />
                    </button>
                </div>
            </div>

            {/* Scrollable container */}
            <div className="flex-1  max-h-[500px] xl:max-h-[20vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200  dark:scrollbar-thumb-zinc-800 dark:scrollbar-track-stone-800 pr-1 pt-3">
                <div className="flex flex-col gap-4 w-full min-w-md">
                    {datas.map((data, index) => (
                        <div key={index} className="alert-item text-gray-700 dark:text-gray-300 rounded-lg bg-gray-200 dark:bg-zinc-800">
                            <div className="w-full flex flex-row gap-1 items-center h-[40px] p-2">
                                <div className='flex-1 w-full'>
                                    <div className='w-full flex flex-row items-center gap-2 relative'>
                                        <div className='part-image relative'>
                                            <img src={data.image} alt="Product" className="w-[36px] h-[36px]  object-cover" />
                                             <Eye size={12} className="bottom-0 -right-2 absolute w-[16px] h-[16px] rounded-full bg-green-500 text-gray-100  shadow-[0px_4px_6px_3px_rgba(0,_0,_0,_0.2)] "/>
                                        </div>
                                        <div>
                                            <div className="part-name text-xs font-bold text-gray-900 dark:text-gray-100">{data.part_name}</div>
                                        </div>
                                        <div className='text-[10px] dark:text-gray-100 absolute -top-3 -left-1 bg-gray-500 font-bold px-1 py-0.5 rounded-xl'>
                                             {data.sold}
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
                                    <div className="product-name text-[10px] font-bold text-gray-900 dark:text-gray-100 dark:bg-zinc-900 px-1 py-1 rounded-[6px] border-2 border-red-500 relative w-[80px] text-center"> 
                                        In stock: {data.stock} Pcs
                                        <TableProperties size={16} className="top-[-8px] right-[-4px] absolute w-[16px] h-[16px] bg-gray-200 dark:bg-zinc-800 p-[2px] shadow-[0px_4px_6px_3px_rgba(0,_0,_0,_0.4)]  rounded "/>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <div className='w-full flex-col gap-1 text text-xs font-bold  '>
                                        
                                        <div className="part-number text-[10px] font-bold text-gray-900 dark:text-gray-100">
                                            <span className='dark:text-gray-400'>Optimal:</span> {data.optimal} Pcs
                                        </div>
                                          <div className="part-number text-[10px] font-bold text-gray-900 dark:text-gray-100">
                                             <span className='dark:text-gray-400'>Add:</span> {data.Add} Pcs
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none'>
                                    <button className="text-[10px]/2 px-2 h-[28px] rounded-lg text-gray-100 bg-stone-800 hover:bg-blue-500 flex items-center justify-center gap-[2px] font-bold">
                                        Order <ArrowRight size={16} />
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