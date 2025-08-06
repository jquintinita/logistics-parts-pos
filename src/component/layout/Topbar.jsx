import React, { useState } from 'react';
import { Sun, Moon, ChevronDown, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import userImage from '../../assets/user-image.png';
import pinIcon from '../../assets/icons/bx-pin.svg';
import TopSlider from '../widget/TopSlider';


export default function Topbar({ isDark, onToggleDark, isMobile, UserData, productsData }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="w-full flex flex-none gap-1 items-center justify-between  relative z-20 rounded-lg ">

            <div className='flex  items-center gap-4 flex-1/5 xl:flex-none md:min-w-0 xl:min-w-[136px] 2xl:min-w-[336px]'>
                <div className='w-[40px] h-[40px] flex place-items-center justify-center rounded-4xl bg-gray-300  dark:bg-zinc-800'>
                    <img
                        src={pinIcon}
                        alt="pin icon"
                        className=""
                    />
                </div>
                <h1 className="text-[22px] md:text-[32px]  lg:text-[42] leading-none font-bold text-gray-900 dark:text-gray-100">Order Logistics</h1>
            </div>


            <div className='flex flex-1 min-w-0  relative justify-end items-center gap-1 lg:gap-2 py-2 '>


                <div className=' flex-1 min-w-0 hidden xl:flex w-full ' >
                    <TopSlider items={productsData} />
                </div>


                <div className="flex  flex-none items-center gap-4   ">
                    {/* Notification Bell */}
                    <button className="p-[4px] relative rounded-full overflow-visible bg-gray-300 dark:bg-zinc-800 hover:bg-gray-400 dark:hover:bg-zinc-800">
                        <Bell className="rounded-4xl inline-block  text-amber-50 p-[6px] dark:bg-gray-600 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" size={40} />
                        <span className="bg-red-600 absolute right-0 top-0 w-[20px] h-[20px] text-white rounded-4xl flex justify-center place-items-center ">5</span>
                    </button>
                </div>


                <button
                    onClick={onToggleDark}
                    className=" hidden lg:flex p-[4px] flex-none rounded-4xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                    <Moon className={`rounded-4xl inline-block  text-amber-50 p-[6px] ${isDark ? 'bg-stone-800' : ''}`} size={40} />
                    <Sun className={`rounded-4xl inline-block  text-amber-300 p-[6px] ${isDark ? '' : 'bg-stone-800'}`} size={40} />
                </button>


                <div className={`user-dropdown flex-none  rounded-4xl flex flex-row relative gap-2 bg-gray-300 dark:bg-gray-700 pr-7 md:pr-0 ${isDropdownOpen ? 'open' : 'close'}`}>
                    <img
                        src={userImage}
                        alt="User Avatar"
                        className="rounded-full w-[38px] h-[38px] md:w-[48px] md:h-[48px] object-cover border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div className='flex pr-8 flex-col justify-center text-gray-900 dark:text-gray-100 bg-gray-300 dark:bg-gray-700  rounded-2xl '>
                        <span className='text-sm tracking-[1px] font-bold'>{UserData.name}</span>
                        <span className='text-xs'>{UserData.role}</span>
                        {isMobile ? (
                            <div className='darkmode-toggle'>
                                <hr className='border-dotted mt-4' />
                                <button
                                    onClick={onToggleDark}
                                    className="p-[4px] mt-2 rounded-4xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 max-w-[90px] dark:hover:bg-gray-600"
                                >
                                    <Moon className={`rounded-4xl inline-block  text-amber-50 p-[6px] ${isDark ? 'bg-stone-800' : ''}`} size={40} />
                                    <Sun className={`rounded-4xl inline-block  text-amber-300 p-[6px] ${isDark ? '' : 'bg-stone-800'}`} size={40} />
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <button className={`top-[10px] sm:top-[16px] right-2 absolute transition-all duration-100 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} onClick={() => setIsDropdownOpen((prev) => !prev)} >
                        <ChevronDown className={`text-gray-500 dark:text-gray-400 `} size={20} />
                    </button>

                </div>
            </div>




        </header>
    );
}
