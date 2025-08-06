

import { Search, MoveLeft, MoveRight, Settings } from 'lucide-react';
import OrderTable from '../component/order/OrderTable';
import Alerts from '../component/widget/Alerts';
import LowInStock from '../component/widget/LowInStocks';
import PricingUpdates from '../component/widget/PricingUpdates';
import { customerOrderData, alertData, LowInStockData, PricingUpdateData } from '../Data/data';



export default function Order() {
  return (
    
    <div className="flex gap-4 xl:h-full flex-col lg:flex-col xl:flex-row overflow-hidden">
      <div className="rounded-[30px] bg-gray-50 dark:bg-zinc-800 overflow-hidden pl-2 py-2  flex-1 xl:flex-9/12 h-full">
        <div className='flex flex-col-reverse gap-3 lg:flex-row justify-between place-items-end 2xl:place-items-center pr-2'>
          {/* Tab and Search Bar */}
          <div className="filters flex flex-wrap   2lx:items-center justify-start gap-3 w-full">
            {/* Scrollable Tabs */}
            <div className=" w-full md:w-auto overflow-x-auto whitespace-nowrap">
              <div className="inline-flex gap-2 px-0">
                <button className="bg-green-500 min-w-[120px] text-white px-6 py-[10px] rounded-3xl hover:bg-green-600 transition-colors text-sm font-bold">
                  Orders
                </button>
                <button className="bg-gray-600 min-w-[120px] text-white px-6 py-[10px] rounded-3xl hover:bg-green-600 transition-colors text-sm font-bold">
                  Warehouse
                </button>
                <button className="bg-gray-600 min-w-[120px] text-white px-6 py-[10px] rounded-3xl hover:bg-green-600 transition-colors text-sm font-bold">
                  Logistics
                </button>

              </div>
            </div>

            {/* Search Form */}
            <div className="form flex-1 basis-[365px]  2xl:max-w-[365px]">
              <form className="rounded-full flex items-center gap-2 px-2 bg-gray-200 dark:bg-stone-800 w-full">
                <button type="button">
                  <MoveLeft className="text-zinc-900 dark:text-gray-100" size={16} />
                </button>
                <button type="button">
                  <MoveRight className="text-gray-500 dark:text-gray-400" size={16} />
                </button>
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="px-4 py-[8px] w-full text-gray-900 dark:text-gray-100 outline-0 bg-transparent"
                />
                <button type="submit" className="text-white px-2 py-[10px] rounded-full transition-colors">
                  <Search className="text-white" size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Create New Order button */}
          <button className="flex-1 lg:basis-[195px] bg-green-500 text-white px-2 py-[10px] rounded-3xl hover:bg-green-600 transition-colors text-sm flex justify-center gap-2 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden 2xl:flex' width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 7.5H16.3167L13.2234 2.08667L11.7767 2.91334L14.3975 7.5H5.60252L8.22419 2.91334L6.77669 2.08667L3.68336 7.5H2.50002C2.24002 7.5 1.99585 7.62167 1.83752 7.8275C1.68002 8.03417 1.62752 8.3025 1.69585 8.5525L4.02836 17.1058C4.22586 17.8292 4.88752 18.3333 5.63669 18.3333H14.3642C15.1125 18.3333 15.7742 17.8292 15.9725 17.1042L18.305 8.55167C18.3734 8.30167 18.3217 8.03334 18.1634 7.82667C18.0042 7.62167 17.76 7.5 17.5 7.5ZM14.3634 16.6667V17.5V16.6667H5.63669L3.59169 9.16667H16.4084L14.3634 16.6667Z" fill="white" />
              <path d="M7.5 10.8333H9.16667V15H7.5V10.8333ZM10.8333 10.8333H12.5V15H10.8333V10.8333Z" fill="white" />
            </svg> <span >Create New Order</span></button>
        </div>


        <div className='mt-2 flex flex-col gap-4  overflow-auto relative pr-1'>
          {/* Customer Order Table */}
          <OrderTable orders={customerOrderData} />
           <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50/100 dark:from-zinc-800/100 to-transparent"></div>
            <div className="block lg:hidden pointer-events-none absolute right-0  w-10 h-full bg-gradient-to-l from-gray-50/100 dark:from-zinc-800/100   to-transparent"></div>
        </div>
      </div>
      <div className="rounded-[30px] bg-gray-50 dark:bg-zinc-800 p-[10px] flex-1 xl:flex-3/12  flex flex-col  gap-2 h-full">
          <div className='flex-none w-full flex justify-between items-center gap-2'>
              <div className="flex-1 w-full md:w-auto overflow-x-auto whitespace-nowrap">
                  <div className="flex gap-1 px-0">
                    <button className="flex-1/3 border-2 border-green-500 h-[30px]  text-white px-6 py-[3px] rounded-3xl hover:bg-green-600 bg-gray-500 dark:bg-zinc-750 transition-colors text-sm/3 font-bold flex justify-center items-center">
                      Info Panel One
                    </button>
                  <button className="flex-1/3 border-2 border-gray-600  h-[30px] text-gray-400 hover:text-gray-100 px-4 py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-gray-600 transition-colors text-sm/3 font-bold flex justify-center items-center ">
                    Info Panel Two
                    </button>
                    <button className="flex-1/3 border-2 border-gray-600 h-[30px]  text-gray-400 hover:text-gray-100 px-4 py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-gray-600  transition-colors text-sm/3 font-bold flex justify-center items-center">
                      Info Panel Three
                    </button>
                </div>
              </div>
              <button className="border-2 border-zinc-750 w-[30px]  h-[30px] px-[3px] py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-zinc-750  transition-colors text-sm text-center flex justify-center items-center">
                <Settings className="text-white" size={16} />
              </button>
           </div>
            <div className='flex flex-wrap xl:flex-col  gap-2 h-full  ' >
              <div className='xl:flex-1 w-full  xl:max-h-1/3' >
                <Alerts alertdata={alertData} />
              </div>
              
              <div className='flex-1 w-full xl:h-1/3 xl:max-h-1/3'>
                <LowInStock datas={LowInStockData}/>
              </div>
              <div className='flex-1 w-full xl:h-1/3 xl:max-h-1/3'>
                <PricingUpdates datas={PricingUpdateData} />
              </div>
            </div>
      </div>
    </div>
  );
}
