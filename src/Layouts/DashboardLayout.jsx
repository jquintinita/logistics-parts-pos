import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenuBar from '../component/layout/SideMenuBar';
import Topbar from '../component/layout/Topbar';
import TopSlider from '../component/widget/TopSlider';
import MobileSlider from '../component/widget/MobileSlider';

const UserData = {
  name: 'Maria Russell',
  role: 'Administrator'
};

const productsData = [
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-1.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-2.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-3.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-4.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-5.png" },
  { name: "New item name here", brand: "BOSCH", imgurl: "/assets/products/item-1.png" }
];

export default function DashboardLayout() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isOpen, setIsOpen] = useState(true);
  const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 1025;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = getIsMobile();
      setIsMobile(isNowMobile);
      if (isNowMobile) {
        setIsOpen(false);
      }
    };

    // Run on initial load
    handleResize();

    // Add event listener for subsequent resizes
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="dashboard-layout w-full p-3 sm:p-4 min-h-screen bg-gray-200 dark:bg-stone-900 flex flex-col gap-4 lg:flex-row">
      <SideMenuBar
        isOpen={isOpen}
        onToggleMenu={() => setIsOpen((prev) => !prev)}
        isMobile={isMobile}
      />
      <div className="page-content  flex-1 flex flex-col  min-w-0 gap-y-4">
      
        <Topbar
          UserData={UserData}
          productsData={productsData}
          isDark={isDark}
          onToggleDark={() => setIsDark((prev) => !prev)}
          isMobile={isMobile}
        />
        <main className="flex-1">
          <div className='block xl:hidden'>
            <MobileSlider items={productsData} />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
