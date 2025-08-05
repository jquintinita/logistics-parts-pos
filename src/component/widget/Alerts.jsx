import { Move, MessageSquareMore, Eye, ArrowRight } from 'lucide-react';




export default function Alerts({ alertdata }) {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-300 dark:bg-stone-800 rounded-2xl pl-2 pr-1 py-2 flex flex-col gap-2 relative">
            {/* Header */}
            <div className="flex items-center justify-between pr-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Alerts</h2>
                <button className="w-[30px] h-[30px] px-[3px] py-[3px] rounded-3xl text-gray-400 hover:text-gray-100 dark:bg-zinc-800 transition-colors text-sm text-center flex justify-center items-center">
                    <Move size={16} />
                </button>
            </div>

            {/* Scrollable container */}
            <div className="flex-1 max-h-[500px] xl:max-h-[20vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200  dark:scrollbar-thumb-zinc-800 dark:scrollbar-track-stone-800 pr-1">
                <div className="flex flex-col gap-2 w-full ">
                    {alertdata.map((item, index) => (
                        item.alert_type !== "fire_alarm" ? (
                        <div key={index} className="alert-item text-gray-700 dark:text-gray-300 rounded-lg bg-gray-200 dark:bg-zinc-800">
                            <div className="w-full flex flex-row items-center h-[40px] p-2">
                                <div className="alert-label w-2/5 md:w-1/2  dark:text-gray-400 font-bold text-xs flex flex-col md:flex-row">
                                     {item.alert_data.label_warning}<span className="text-stone-950 dark:text-gray-100 relative">{item.alert_data.label_value}

                                         <Eye size={12} className="-top-[9px] -right-3 absolute w-[16px] h-[16px] rounded-full bg-green-500 text-gray-100 shadow-xl/30 shadow-zinc-900/50 shadow-[0px_4px_6px_3px_rgba(0,_0,_0,_0.2)] "/>
                                     </span>
                                   
                                </div>
                                <div className="alert-value w-3/5 md:w-1/2 flex items-center justify-between">
                                    <div className="text-center flex-1 text-gray-400 font-bold text-sm flex justify-center items-center gap-1">
                                         {item.alert_data.value_warning}<span className=" text-stone-950 dark:text-gray-100 text-[16px]">
                                            {item.alert_data.value_value}
                                         </span>
                                        
                                    </div>
                                    <button className="text-xs flex-none w-[28px] h-[28px] rounded-full text-gray-100 bg-stone-800  hover:bg-blue-500 flex items-center justify-center">
                                        <MessageSquareMore size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div key={index} className="alert-item text-gray-700 dark:text-gray-300 rounded-lg bg-gray-200 dark:bg-zinc-800">
                            <div className="w-full flex flex-row items-center h-[40px] p-2">
                                <div className="alert-label w-1/2 text-gray-400 font-bold text-xs relative">
                                   <span className="text-stone-950 dark:text-gray-100"> {item.alert_data.alert_message}</span>
                                    
                                </div>
                                <div className="alert-value w-1/2 flex items-center justify-end">
                                    
                                    <button className="text-xs px-2 h-[28px] rounded-lg text-gray-100 bg-stone-800 hover:bg-blue-500 flex items-center justify-center gap-1 font-bold">
                                        More Info <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        )
                        
                    ))}
                </div>
            </div>
             <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50/100 dark:from-stone-800/100 to-transparent"></div>
        </div>

    )

}