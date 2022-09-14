import React from 'react';
import CountUp from 'react-countup';
const NumberCounter = () => {
    return (
        <div className='max-w-[85rem] grid md:grid-cols-4 grid-cols-2  bg-primary md:h-52 h-auto  my-11 mx-auto text-white'>
            <div className='text-center my-auto p-4 md:p-0'>
                <h2 className='text-xl font-semibold'>
                Innovations In Education
                </h2>
                <p className='text-3xl font-semibold'>
                <CountUp end={200000}/>+
                </p>
                <p>Students served</p>
            </div>
            <div className='text-center my-auto p-4 md:p-0'>
                <h2 className='text-xl font-semibold'>
                Social Accountability
                </h2>
                <p className='text-3xl font-semibold'>
                <CountUp end={50000}/>+
                </p>
                <p>Benificiaries enlightened</p>
            </div>
            <div className='text-center my-auto p-4 md:p-0'>
                <h2 className='text-xl font-semibold'>
                Inclusive Healthcare
                </h2>
                <p className='text-3xl font-semibold'>
                <CountUp end={1470000}/>+
                </p>
                <p>Subscribers</p>
            </div>
            <div className='text-center my-auto p-4 md:p-0'>
                <h2 className='text-xl font-semibold'>
                Lift in Livelihood
                </h2>
                <p className='text-3xl font-semibold'>
                <CountUp end={400}/>+
                </p>
                <p>Communities served</p>
            </div>
           
        </div>
    );
};

export default NumberCounter;