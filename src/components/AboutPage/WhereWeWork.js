import React from 'react';
import countrymapImg from "../../image/about us/Maps-location4.jpg"

const WhereWeWork = () => {
    return (
        <div className='max-w-[85rem] mx-auto static md:flex items-center justify-between my-16 md:my-28  space-y-5'>
            <div className='space-y-2 w-full mx-4 md:mx-0 md:w-1/2'>
                <h2 className='text-3xl font-semibold uppercase text-black'>WHERE WE WORK</h2>
                <p>
                Headquartered in Dhaka, Dnet has inaugurated two offices in Rajshahi and Gaibandha to empower the people of the areas with our various programs including; Education and Literacy, Governance and Society, Business and Entrepreneurship, Climate and Environment, and Health and Nutrition. In addition, through our Computer Literacy Program, we have secured our footprint across 55 districts of Bangladesh by establishing 287 Computer Learning Centers and 184 Smart Classrooms.
                </p>
            </div>
            <div className='md:w-6/12 w-full'>
                <img src={countrymapImg} alt="" className='w-11/12 mx-auto md:ml-auto h-auto'/>
               
                <div className='flex justify-center'>
                <label htmlFor="about-page-modal" className="mt-2 font-light">Click to view the locations</label>
                </div>
            </div>
        </div>
    );
};

export default WhereWeWork;