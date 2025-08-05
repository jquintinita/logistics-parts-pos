

import { Search, MoveLeft, MoveRight, Settings } from 'lucide-react';
import OrderTable from '../component/order/OrderTable';
import Alerts from '../component/widget/Alerts';
import LowInStock from '../component/widget/LowInStocks';
import PricingUpdates from '../component/widget/PricingUpdates';


const customerOrderData = [
  {
    customer: { name: "Will Smith", shop: "Philly Top Mechanic" },
    taxExempt: true,
    account: "Charge",
    vendors: 2,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "324811",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "9 hours ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 2 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Will Smith", shop: "Philly Top Mechanic" },
    taxExempt: true,
    account: "Cash",
    vendors: 3,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "320139",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "10 hour ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Hart", shop: "Don's Auto Repair" },
    taxExempt: true,
    account: "Charge",
    vendors: 5,
    cusType: 2,
    items: { types: 4, quantity: 17 },
    invoice: "320580",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "11 hours ago",
    fulfillment: 1, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Hart", shop: "Don's Auto Repair" },
    taxExempt: true,
    account: "Charge",
    vendors: 2,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "328933",
    paymentStatus: 2, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "2 hour ago",
    fulfillment: 0, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Hart", shop: "Don's Auto Repair" },
    taxExempt: true,
    account: "Charge",
    vendors: 2,
    cusType: 1,
    items: { types: 4, quantity: 17 },
    invoice: "320869",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "10 hour ago",
    fulfillment: 0, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 1 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Cash",
    vendors: 4,
    cusType: 2,
    items: { types: 4, quantity: 17 },
    invoice: "327746",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "7 hour ago",
    fulfillment: 1, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 1 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Cash",
    vendors: 2,
    cusType: 1,
    items: { types: 4, quantity: 17 },
    invoice: "320104",
    paymentStatus: 2, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "3 hours ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 2 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Charge",
    vendors: 5,
    cusType: 2,
    items: { types: 4, quantity: 17 },
    invoice: "329158",
    paymentStatus: 1, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "6 hour ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 1 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Charge",
    vendors: 2,
    cusType: 2,
    items: { types: 4, quantity: 17 },
    invoice: "320529",
    paymentStatus: 1, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "2 hours ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 2 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Charge",
    vendors: 4,
    cusType: 1,
    items: { types: 4, quantity: 17 },
    invoice: "326729",
    paymentStatus: 1, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "3 hour ago",
    fulfillment: 0, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Bacon", shop: "Kens Automotive" },
    taxExempt: true,
    account: "Cash",
    vendors: 5,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "328991",
    paymentStatus: 0, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "7 hour ago",
    fulfillment: 0, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 2 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Will Smith", shop: "Philly Top Mechanic" },
    taxExempt: true,
    account: "Cash",
    vendors: 3,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "321693",
    paymentStatus: 2, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "3 hours ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Will Smith", shop: "Philly Top Mechanic" },
    taxExempt: true,
    account: "Charge",
    vendors: 2,
    cusType: 0,
    items: { types: 4, quantity: 17 },
    invoice: "329286",
    paymentStatus: 2, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "7 hours ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Kevin Hart", shop: "Don's Auto Repair" },
    taxExempt: true,
    account: "Cash",
    vendors: 2,
    cusType: 1,
    items: { types: 4, quantity: 17 },
    invoice: "327656",
    paymentStatus: 1, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "6 hours ago",
    fulfillment: 1, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 2 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  },
  {
    customer: { name: "Will Smith", shop: "Philly Top Mechanic" },
    taxExempt: true,
    account: "Charge",
    vendors: 3,
    cusType: 1,
    items: { types: 4, quantity: 17 },
    invoice: "321443",
    paymentStatus: 2, // 0: Not Paid, 1: Partially Paid, 2: Paid
    created: "10 hour ago",
    fulfillment: 2, // 0: Ready For Pickup, 1: Parts Picked, 2: In Progress
    storeExit: 0 // 0: Ready For Pickup By Customer, 1: Picked By Customer, 2: Customer Pickup
  }
];


const alertData = [
  {
    alert_type: "no_more_sales",
    alert_data: {
        label_warning: "No more sales to: ",
        label_value: "Don's Auto Repair",
        value_warning: "Balance due: ",
        value_value: "$7,250.00",
    }
  },
  {
    alert_type: "no_more_check",
    alert_data: {
        label_warning: "No more checks for: ",
        label_value: "Don's Auto Repair",
        value_warning: "Unpaid Invoice: ",
        value_value: "2",
    }
  },
  {
    alert_type: "fire_alarm",
    alert_data: {
        alert_message: "New fire alarm password",
    }
  },
  {
    alert_type: "no_more_sales",
    alert_data: {
        label_warning: "No more sales to: ",
        label_value: "Don's Auto Repair",
        value_warning: "Balance due: ",
        value_value: "$7,250.00",
    }
  },
  {
    alert_type: "no_more_check",
    alert_data: {
        label_warning: "No more checks for: ",
        label_value: "Don's Auto Repair",
        value_warning: "Unpaid Invoice: ",
        value_value: "2",
    }
  },
  {
    alert_type: "fire_alarm",
    alert_data: {
        alert_message: "New fire alarm password",
    }
  },
 
]

const LowInStockData = [
  {
    part_name: "Part Name",
    sold: "Sold 247 Pcs in 10 days",
    image: "/assets/products/item-6.png",
    stock: 5,
    optimal: 20,
    Add: 8,
    part_number: "547854123589"
  },
  {
    part_name: "Part Name",
    sold: "Sold 128 Pcs in 10 days",
    image: "/assets/products/item-7.png",
    stock: 6,
    optimal: 20,
    Add: 10,
    part_number: "345353565778"
  },
  {
    part_name: "Part Name",
    sold: "Sold 67 Pcs in 10 days",
    image: "/assets/products/item-8.png",
    stock: 9,
    optimal: 18,
    Add: 11,
    part_number: "345353565778"
  },
  {
    part_name: "Part Name",
    sold: "Sold 78 Pcs in 10 days",
    image: "/assets/products/item-9.png",
    stock: 4,
    optimal: 20,
    Add: 4,
    part_number: "345353565778"
  },
  {
    part_name: "Part Name",
    sold: "Sold 54 in 10 days",
    image: "../assets/products/item-10.png",
    stock: 5,
    optimal: 22,
    Add: 8,
    part_number: "345353565778"
  }
];



const PricingUpdateData = [
  {
    time: "1 hr 45 min ago",
    vendor: "Automan",
    part_name: "Part name",
    part_number: "345353565778",
    price_change: {
      percentage: "10%",
      amount: "$5.00",
      direction: "up"
    },
    price_range: "$50.00–$55.00"
  },
  {
    time: "2 hr 30 min ago",
    vendor: "Automan",
    part_name: "Part name",
    part_number: "123213342345",
    price_change: {
      percentage: "5%",
      amount: "$2.50",
      direction: "down"
    },
    price_range: "$47.50–$52.50"
  },
  {
    time: "3 hr 15 min ago",
    vendor: "Automan",
    part_name: "Part name",
    part_number: "45434565778",
    price_change: {
      percentage: "8%",
      amount: "$4.00",
      direction: "up"
    },
    price_range: "$48.00–$52.00"
  },
  {
    time: "4 hr ago",
    vendor: "Automan",
    part_name: "Part name",
    part_number: "324523456789",
    price_change: {
      percentage: "12%",
      amount: "$6.00",
      direction: "down"
    },
    price_range: "$44.00–$50.00"
  },
  {
    time: "5 hr 45 min ago",
    vendor: "Automan",
    part_name: "Part name",
    part_number: "653241234212",
    price_change: {
      percentage: "15%",
      amount: "$7.50",
      direction: "up"
    },
    price_range: "$42.50–$50.00"
  }
  
];


export default function Order() {
  return (
    
    <div className="flex gap-4 xl:h-full flex-col lg:flex-col xl:flex-row overflow-hidden">
      <div className="rounded-[30px] bg-gray-50 dark:bg-zinc-800 overflow-hidden pl-2 py-2  flex-1 xl:flex-9/12 h-full">
        <div className='flex flex-col-reverse gap-3 sm:flex-row justify-between place-items-end 2xl:place-items-center pr-2'>
          {/* Tab and Search Bar */}
          <div className="filters flex flex-1 flex-col-reverse 2xl:flex-row  place-items-start justify-start gap-3 w-full">
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
            <div className="form  sm:max-w-[340px] ">
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
                  className="px-4 py-[10px] w-full text-gray-900 dark:text-gray-100 outline-0 bg-transparent"
                />
                <button type="submit" className="text-white px-2 py-[10px] rounded-full transition-colors">
                  <Search className="text-white" size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Create New Order button */}
          <button className="bg-green-500 text-white px-6 py-[10px] rounded-3xl hover:bg-green-600 transition-colors text-sm flex justify-center gap-2 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 7.5H16.3167L13.2234 2.08667L11.7767 2.91334L14.3975 7.5H5.60252L8.22419 2.91334L6.77669 2.08667L3.68336 7.5H2.50002C2.24002 7.5 1.99585 7.62167 1.83752 7.8275C1.68002 8.03417 1.62752 8.3025 1.69585 8.5525L4.02836 17.1058C4.22586 17.8292 4.88752 18.3333 5.63669 18.3333H14.3642C15.1125 18.3333 15.7742 17.8292 15.9725 17.1042L18.305 8.55167C18.3734 8.30167 18.3217 8.03334 18.1634 7.82667C18.0042 7.62167 17.76 7.5 17.5 7.5ZM14.3634 16.6667V17.5V16.6667H5.63669L3.59169 9.16667H16.4084L14.3634 16.6667Z" fill="white" />
              <path d="M7.5 10.8333H9.16667V15H7.5V10.8333ZM10.8333 10.8333H12.5V15H10.8333V10.8333Z" fill="white" />
            </svg> <span className=''>Create New Order</span></button>
        </div>


        <div className='mt-4 flex flex-col gap-4  overflow-auto relative pr-1'>
          {/* Customer Order Table */}
          <OrderTable orders={customerOrderData} />
           <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50/100 dark:from-zinc-800/100 to-transparent"></div>
            <div className="block lg:hidden pointer-events-none absolute right-0  w-10 h-full bg-gradient-to-l from-gray-50/100 dark:from-zinc-800/100   to-transparent"></div>
        </div>
      </div>
      <div className="rounded-[30px] bg-gray-50 dark:bg-zinc-800 p-[10px] flex-1 xl:flex-3/12  flex flex-col  gap-2 h-full">
          <div className='flex-none w-full flex justify-between items-center gap-2'>
                <div className=" w-full md:w-auto overflow-x-auto whitespace-nowrap">
                  <div className="inline-flex gap-1 px-0">
                    <button className="border-2 border-green-500 h-[30px]  text-white px-6 py-[3px] rounded-3xl hover:bg-green-600 bg-gray-500 dark:bg-zinc-750 transition-colors text-sm/3 font-bold flex justify-center items-center">
                      Info Panel One
                    </button>
                  <button className="border-2 border-gray-600  h-[30px] text-gray-400 hover:text-gray-100 px-4 py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-gray-600 transition-colors text-sm/3 font-bold flex justify-center items-center ">
                    Info Panel Two
                    </button>
                    <button className="border-2 border-gray-600 h-[30px]  text-gray-400 hover:text-gray-100 px-4 py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-gray-600  transition-colors text-sm/3 font-bold flex justify-center items-center">
                      Info Panel Three
                    </button>
                </div>
              </div>
              <button className="border-2 border-zinc-750 w-[30px]  h-[30px] px-[3px] py-[3px] rounded-3xl hover:bg-green-600 hover:border-green-600 hover:border-2 bg-gray-500 dark:bg-zinc-750  transition-colors text-sm text-center flex justify-center items-center">
                <Settings className="text-white" size={16} />
              </button>
           </div>
            <div className='flex flex-wrap xl:flex-col  gap-2 h-full  ' >
              <div className='xl:flex-1 w-full' >
                <Alerts alertdata={alertData} />
              </div>
              
              <div className='flex-1 w-full '>
                <LowInStock datas={LowInStockData}/>
              </div>
              <div className='flex-1 w-full'>
                <PricingUpdates datas={PricingUpdateData} />
              </div>
            </div>
      </div>
    </div>
  );
}
