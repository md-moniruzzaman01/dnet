import React from 'react';
import circleImage from "../../image/about us/about-circle.png"
const HowWeWork = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center uppercase'>How We Work</h2>
            <div className='max-w-7xl grid grid-cols-6'>
                <div>
                    <img src={circleImage} alt="" className='h-44 w-auto'/>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;