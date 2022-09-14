import React from 'react';

const OurStory = () => {
    return (
        <div>
            <div className='bg-primary'>
            <div className='max-w-[85rem] relative md:h-52 h-auto custom-grid container mx-auto'>
                <div className=' md:w-96 md:ml-7 w-full flex justify-center'>
                    <div className='my-5 md:my-0 z-10 bg-secondary md:absolute relative md:top-[-40px] top-0 md:h-20 h-16 flex justify-center items-center w-96 font-bold text-white'>
                        <p className='md:text-5xl text-3xl uppercase'>OUR Story</p>
                    </div>
                </div>
                <div className='md:pl-11 pl-4 pb-4 md:pb-0 flex items-center '>
                    <p className='text-white'>Dnet is a social enterprise founded in 2001 that focuses on designing technology driven solutions to create a social impact. As a non-profit social enterprise, Dnet strives to apply commercial strategies, where applicable, to maximize improvements in human and environmental well-being. Dnet’s track record on issues of legal and human rights, governance, social accountability and right to information have been recognized and replicated nationally and internationally.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurStory;