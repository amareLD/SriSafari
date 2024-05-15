import React, { useState } from 'react';
import { GiWorld } from "react-icons/gi";

const NavBarL = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "EVENTS", link: "/" },
        { name: "PACKAGES", link: "/" },
        { name: "ABOUT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-none w-full fixed top-0 left-0 bg-white bg-opacity-30'>
            <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 text-white'>
                    <GiWorld className='w-7 h-7 text-blue-600' /> {/* WorldIcon */}
                    <span>TravelPro</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:justify-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`} style={{ margin: '0 auto' }}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                </ul>
               
                
            </div>
        </div>
    );
};

export default NavBarL;
