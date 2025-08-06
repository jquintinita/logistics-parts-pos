import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import accountingIcon from '../../assets/icons/accounting.svg';
import arrowToggleIcon from '../../assets/icons/arrow-toggle.svg';
import customersIcon from '../../assets/icons/customers.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import employeeIcon from '../../assets/icons/employee.svg';
import inventoryIcon from '../../assets/icons/inventory.svg';
import locationsIcon from '../../assets/icons/locations.svg';
import ordersIcon from '../../assets/icons/orders.svg';
import partsIcon from '../../assets/icons/parts.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import vendorsIcon from '../../assets/icons/vendors.svg';
import faqIcon from '../../assets/icons/faq.svg';


import activeAccountingIcon from '../../assets/icons/active/accounting-active.svg';
import activeCustomersIcon from '../../assets/icons/active/customers-active.svg';
import activeDashboardIcon from '../../assets/icons/active/dashboard-active.svg';
import activeEmployeeIcon from '../../assets/icons/active/employee-active.svg';
import activeInventoryIcon from '../../assets/icons/active/inventory-active.svg';
import activeLocationsIcon from '../../assets/icons/active/locations-active.svg';
import activeOrdersIcon from '../../assets/icons/active/orders-active.svg';
import activePartsIcon from '../../assets/icons/active/parts-active.svg';
import activeSettingsIcon from '../../assets/icons/active/settings-active.svg';
import activeVendorsIcon from '../../assets/icons/active/vendors-active.svg';
import activeFaqIcon from '../../assets/icons/active/faq-active.svg';
import activeArrowToggleIcon from '../../assets/icons/active/arrow-toggle-active.svg';


import logo from '../../assets/truck-parts-pos-logo.svg';
import iconlogo from '../../assets/box-logo.svg';
import {Menu, GripVertical} from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', path: '/', icon: dashboardIcon, iconActive: activeDashboardIcon },
    { name: 'Parts', path: '/parts', icon: partsIcon, iconActive: activePartsIcon },
    { name: 'Locations', path: '/locations', icon: locationsIcon, iconActive: activeLocationsIcon },
    { name: 'Vendors', path: '/vendors', icon: vendorsIcon, iconActive: activeVendorsIcon },
    { name: 'Customers', path: '/customers', icon: customersIcon, iconActive: activeCustomersIcon },
    { name: 'Employees', path: '/employees', icon: employeeIcon, iconActive: activeEmployeeIcon },
    { name: 'Accounting', path: '/accounting', icon: accountingIcon, iconActive: activeAccountingIcon },
    { name: 'Orders', path: '/order', icon: ordersIcon, iconActive: activeOrdersIcon },
    { name: 'Inventory', path: '/inventory', icon: inventoryIcon, iconActive: activeInventoryIcon },
    { name: 'Settings', path: '/settings', icon: settingsIcon, iconActive: activeSettingsIcon }
];
export default function SideMenuBar({isOpen , onToggleMenu, isMobile}) {
    const location = useLocation();
  
   

    return (
       <>
       {/* Overlay for mobile */}
        {isMobile && isOpen && (
            <div
            className="fixed inset-0 bg-black/50 z-20"
            onClick={onToggleMenu}
            />
        )}
    
            {isMobile ? (
                <div className={`side-menu-bar ${isOpen ? 'open' : 'closed'}  fixed top-0 z-[999] left-0 h-full bg-slate-600 dark:bg-zinc-600  transition-all duration-300 w-64 ${isOpen ? 'left-0' : 'left-[-260px]'}`}>
                    <button onClick={onToggleMenu} className={`top-[50%] translate-y-[-50%] text-center  w-[40px] absolute  ${isOpen ? '-right-8  ' : '-right-[40px] '}`}>
                        <svg width="15" height="15" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={` fill-slate-200 absolute -top-[14px] dark:fill-zinc-600 ml-0 ${isOpen ? 'left-[7px] ' : 'left-1 '}`}>
<path d="M0 0C0 16.8447 13.6553 30.5 30.5 30.5H0V0Z"  />
</svg>

                        <GripVertical className="text-gray-100 bg-slate-600 dark:text-gray-300 w-[32px] pr-1 h-[60px] dark:bg-zinc-600 py-2  rounded-md " size={40} />

                        <svg width="15" height="15" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-slate-600 dark:fill-zinc-600 ml-0 absolute -bottom-[14px] ${isOpen ? 'left-[7px] ' : 'left-1 '}`}>
<path d="M30.5 0C13.6553 -7.36305e-07 -5.96893e-07 13.6553 -1.3332e-06 30.5L0 -1.3332e-06L30.5 0Z" fill='bg-slate-600 dark:fill-stone-800' />
</svg>

                    </button>
                    <div className="logo-container flex items-center justify-center relative p-5">
                        <img src={logo} alt="Logo" className="w-32 h-8" />
                    </div>
                    <nav
                        className={`rounded-[30px] bg-slate-600 dark:bg-zinc-600  h-full flex flex-col justify-start 
                ${isOpen ? 'px-3 py-8' : 'px-3 py-4'}`}
                    >
                        <div>

                            <ul className="space-y-2">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={` overflow-hidden rounded-2xl flex items-center ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                                } text-sm  tracking-wide text-gray-200  bg-gray-400 dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 font-bold ${location.pathname === item.path ? 'text-green-500 dark:text-green-500 bg-slate-700 dark:bg-stone-800 ' : ''
                                                }`}
                                        >
                                            <img
                                                src={location.pathname === item.path ? item.iconActive : item.icon}
                                                alt={`${item.name} icon`}
                                                className={`${isOpen ? 'w-5 h5' : 'w-6 h-auto'} object-contain`}
                                                />
                                            
                                           
                                            <span className={`overflow-hidden transition-all duration-200 ease-in ${isOpen ? "w-full" : " w-0"}`}>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        className={` overflow-hidden w-full flex   text-sm font-bold text-gray-200 bg-gray-400 dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 rounded-2xl ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                            }`}
                                        onClick={onToggleMenu}
                                    >
                                        <img src={arrowToggleIcon} alt="Toggle Sidebar" className={`${isOpen ? 'w-5 h5  rotate-1' : 'w-6 h-auto  rotate-180 '}`} />
                                        {isOpen && <span>Minimize</span>}
                                    </button>
                                </li>
                            </ul>
                        </div>


                        <button
                            className={` mt-2 overflow-hidden w-full flex items-center  text-sm font-bold hover:text-green-500 text-gray-200   bg-gray-400 dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 rounded-2xl ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                }`}

                        >
                            <img src={faqIcon} alt="" className={`${isOpen ? 'w-5 h5 ' : 'w-6 h-auto  '}`} />
                            {isOpen && <span >FAQ</span>}
                        </button>
                    </nav>
                </div>
            ) : (
                <aside className={`side-menu-bar transition-all duration-300   ${isOpen ? 'w-44 md:w-48' : 'w-15 '} flex flex-col`}>
                    <nav
                        className={`rounded-[30px] bg-slate-600 dark:bg-zinc-800 h-full flex flex-col justify-between 
                ${isOpen ? 'px-2 py-8' : 'px-2 py-4'}`}
                    >
                        <div>

                            <div className="flex items-center justify-center mb-8">
                                <img
                                    src={ isOpen ? logo : iconlogo }
                                    alt="Logo"
                                    className={`transition-all object-contain object-left duration-300 ${isOpen ? 'w-32' : 'w-15 h-13'}`}
                                />
                            </div>


                            <ul className="space-y-2">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={` overflow-hidden rounded-2xl flex items-center ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                                } text-sm  tracking-wide text-gray-200  bg-slate-500 dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 font-bold ${location.pathname === item.path ? 'text-green-500 dark:text-green-500 bg-slate-700 dark:bg-stone-800 ' : ''
                                                }`}
                                        >
                                            <img
                                                src={location.pathname === item.path ? item.iconActive : item.icon}
                                                alt={`${item.name} icon`}
                                                className={`${isOpen ? 'w-5 h5' : 'w-6 h-auto'} object-contain`}
                                                />
                                            <span className={`overflow-hidden transition-all duration-200 ease-in ${isOpen ? "w-full" : " w-0"}`}>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        className={` overflow-hidden w-full flex   text-sm font-bold text-gray-200   bg-slate-500 dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 rounded-2xl ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                            }`}
                                        onClick={onToggleMenu}
                                    >
                                        <img src={arrowToggleIcon} alt="Toggle Sidebar" className={`${isOpen ? 'w-5 h5  rotate-1' : 'w-6 h-auto  rotate-180 '}`} />
                                        {isOpen && <span>Minimize</span>}
                                    </button>
                                </li>
                            </ul>
                        </div>


                        <button
                            className={`mt-2 overflow-hidden w-full flex items-center  text-sm font-bold hover:text-green-500 text-gray-200   bg-slate-500  dark:text-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-stone-800 rounded-2xl ${isOpen ? 'gap-3 px-4 py-3' : 'justify-center p-2 rounded-xl'
                                }`}

                        >
                            <img src={faqIcon} alt="" className={`${isOpen ? 'w-5 h5 ' : 'w-6 h-auto  '}`} />
                            {isOpen && <span >FAQ</span>}
                        </button>
                    </nav>
                </aside>
            )}

        
       </>

    );
}
