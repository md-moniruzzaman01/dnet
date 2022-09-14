import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../image/Logo.png"
import Navtop from './Navtop';
const NavbarMain = () => {
    const [active, setactive] = useState(false)


    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (window.scrollY > 80) {
                setactive(true);
            } else {
                setactive(false);
            }

        }
    }
    const aboutStyle = "hover:bg-primary hover:text-white rounded-none text-wrap"
    return (
        <div className='bg-base-100 z-20 w-full fixed '>
            <div className={`  ${active ? "hidden" : 'duration-100 block'}`}>
                <Navtop></Navtop>
            </div>

            <div className={`navbar bg-base-100 container duration-500 mx-auto ${active ? "h-20 " : "md:h-[90px] h-20 "}`}>
                <div className=" w-full flex justify-between flex-row-reverse">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white absolute left-[-125px] top">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" className='h-11' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0  rounded-none  duration-500">
                        <li> <Link to="/">HOME</Link></li>
                        <li tabIndex={0}>
                            
                                <Link to="/about">ABOUT</Link>
                                
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> */}
                          
                            <ul className="p-2 bg-white w-72 rounded-none">
                                <li className={aboutStyle}><a>About Dnet</a></li>
                                <li className={aboutStyle}><a>Our Core Team</a></li>
                                <li className={aboutStyle}><a>Governance</a></li>
                                <li className={aboutStyle}><a>Innovation Drivers</a></li>
                                <li className={aboutStyle}><a>Our Partners</a></li>
                            </ul>
                        </li>
                        <li><a>PROJECTS</a></li>
                        <li tabIndex={0}>
                            <a>
                                SERVICES
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> */}
                            </a>
                            <ul className="p-2  min-w-[800px] bg-slate-50 min-h-[500px] rounded-none absolute right-0">
                                <div className='custom-grid text-sm'>
                                    <div className='w-64 bg-white shadow m-2  break-words'>
                                        <h2 className='text-xl font-semibold text-center  my-2'>Tech Solution</h2>
                                        <li className={aboutStyle}><a>Customized software Development</a></li>
                                        <li className={aboutStyle}><a>Mobile App Development</a></li>
                                        <li className={aboutStyle}><a>CMS Development</a></li>
                                        <li className={aboutStyle}><a>Website Development</a></li>
                                        <li className={aboutStyle}><a>Data Analytics Dashboarding</a></li>
                                        <li className={aboutStyle}><a>Customized SMS, IVR & OBD Solution</a></li>
                                        <li className={aboutStyle}><a>360 Degree E-Learning Solution</a></li>
                                    </div>
                                    <div className='flex flex-wrap'>
                                        <div className='w-60 bg-white shadow m-2 p-3'>
                                        <h2 className='text-xl font-semibold text-center my-2'>BPO</h2>
                                            <li className={aboutStyle}><a>Call Center Solution</a></li>
                                            <li className={aboutStyle}><a>Telemarketing</a></li>
                                            <li className={aboutStyle}><a>Telemedicine Service</a></li>
                                            <li className={aboutStyle}><a>Phone survey</a></li>
                                            <li className={aboutStyle}><a>Robo Survey</a></li>
                                        </div>
                                        <div className='w-60 bg-white shadow m-2 p-3'>
                                        <h2 className='text-xl font-semibold text-center my-2'>Creative Solution</h2>
                                            <li className={aboutStyle}><a>Audio Visual</a></li>
                                            <li className={aboutStyle}><a>Audio Content</a></li>
                                            <li className={aboutStyle}><a>Animation</a></li>
                                            <li className={aboutStyle}><a>Graphics</a></li>
                                            <li className={aboutStyle}><a>Text Content</a></li>
                                        </div>
                                        <div className='w-60 bg-white shadow m-2 p-3'>
                                        <h2 className='text-xl font-semibold text-center my-2'>Incubation Center</h2>
                                            <li className={aboutStyle}><a>Education & Training</a></li>
                                            <li className={aboutStyle}><a>Market Linkage</a></li>
                                            <li className={aboutStyle}><a>Financial Linkage</a></li>
                                            
                                        </div>
                                        <div className='w-60 bg-white shadow m-2 p-3'>
                                        <h2 className='text-xl font-semibold text-center my-2'>Digital Marketing</h2>
                                            <li className={aboutStyle}><a>Search Engine Optimization</a></li>
                                            <li className={aboutStyle}><a>Digital Advertising</a></li>
                                            <li className={aboutStyle}><a>Social Media Marketing</a></li>

                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li><a>RESEARCH</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavbarMain;