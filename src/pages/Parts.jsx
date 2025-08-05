import TopSlider from "../component/widget/TopSlider";
import pinIcon from '../assets/icons/bx-pin.svg';

const productsData = [
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-1.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-2.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-3.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-4.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-5.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-1.png" }
];

export default function Parts(){
    return (
        <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
                <div className='w-[40px] h-[40px] flex place-items-center justify-center rounded-4xl bg-gray-300  dark:bg-zinc-800'>
                    <img
                        src={pinIcon}
                        alt="pin icon"
                        className=""
                    />
                </div>
                <h1 className="text-[22px] md:text-[32px]  lg:text-[42] leading-none font-bold text-gray-900 dark:text-gray-100 line-he">Order Logistics</h1>
            </div>
            <div>
                <TopSlider items={productsData} />
            </div>
        </div>
    )
}