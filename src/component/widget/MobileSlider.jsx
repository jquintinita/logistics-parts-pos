import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Eye } from 'lucide-react';
export default function MobileSlider({ items}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1441,
            settings: {
            slidesToShow:4
            }
        },
         {
            breakpoint: 991,
            settings: {
            slidesToShow: 3
            }
        },
         {
            breakpoint: 600,
            settings: {
            slidesToShow: 2
            }
        },
         {
            breakpoint: 450,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    };
    return (
         <div className=' rounded-xl  flex gap-1  flex-row mb-4'>
            <div className='flex rounded-l-xl overflow-hidden  flex-col gap-[1px] flex-none'>
                <div className='text-[10px]/4 uppercase flex justify-end items-center gap-1 text-gray-100 bg-green-500 pl-6 font-bold pr-1'>
                    New Items <span className='bg-zinc-750 w-[20px] h-[14px] inline-block text-center rounded-sm'>26</span>
                </div>
                <div className='text-[10px]/4 uppercase flex   justify-end items-center gap-1 dark:text-gray-100 bg-gray-50 dark:bg-zinc-800 pl-6 font-bold pr-1'>
                    Task <span className='bg-sky-500 w-[20px] h-[14px] inline-block text-center rounded-sm'>7</span>
                </div>
                <div className='text-[10px]/4 uppercase flex  justify-end items-center gap-1 dark:text-gray-100 bg-gray-50 dark:bg-zinc-800 pl-6 font-bold pr-1'>
                    Alerts <span className='bg-red-500 w-[20px] h-[14px] inline-block text-center rounded-sm'>4</span>
                </div>
            </div>
            <div className='flex-1 w-[70%] bg-gray-50 dark:bg-zinc-800 rounded-r-xl'>
                <div className="top-slider w-full max-w-6xl mx-auto px-3 py-[2px]">
                    <Slider {...settings}>
                        {items.map((item, i) => (
                        <div key={i} className="px-[2px] w-full">
                            <div className=" text-white pl-1 pr-2 text-center rounded-md flex justify-start items-center prod-item bg-stone-800 relative">
                                <div className="prod-img row-span-2"><img src={item.imgurl}/></div>
                                <div className="prod-details relative">
                                    <div className="prod-name text-xs ">{item.name.length > 13 ? item.name.slice(0, 13) + '…' : item.name}  </div>
                                <div className="prod-brand text-xs"><span className="text-gray-400">Brand:</span> {item.brand}</div>
                                </div>
                                <Eye size={12} className="top-[2px] right-[2px] absolute w-[16px] h-[16px] rounded-full bg-green-500 text-gray-100 "/>
                            </div>
                        </div>
                        ))}
                    </Slider>
                        
                </div>
            </div>
        </div>
       
    );
}