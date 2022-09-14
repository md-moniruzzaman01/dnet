import React from 'react';
import treeImage from "../../image/our-expertise-center-img.png"
const Expertise = () => {
    return (
        <div className='max-w-[85rem] mx-auto mb-20 '>
            <h1 className='text-3xl md:text-5xl text-center my-20 font-semibold'>OUR EXPERTISE</h1>
            <div className='mx-auto max-w-[420px] px-4'>
                <p className='font-semibold text-xl text-center my-2'>Innovation</p>
                <article >Innovation is at the heart of all Dnet’s activities. We design solutions that are scale-able and sustainable to tackle pressing issues that will result in social change and a better future for all.</article>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 my-11 mx-4 md:mx-0">
                <div className="h-auto lg:h-96 my-11 lg:my-0 md:flex static lg:flex-col justify-around">
                    <div className='mx-auto w-full md:max-w-[416px] '>
                        <p className='font-semibold text-xl text-end my-2'>Innovation</p>
                        <article className=''>We deliver independent, objective, rigorous, and formative 
                        <span className='lg:block md:inline tracking-[0.018rem]'>research, to support technical and technological services</span> 
                        <span className='lg:block md:inline tracking-[0.01rem]'>
                        embedded in our programs and for clients/donors whose work converge with our core thematic areas of focus.
                         </span></article>
                    </div>
                    <div className='mx-auto w-full md:w-[416px]'>
                        <p className='font-semibold text-xl text-end my-2 '>Tech Innovations</p>
                        <article className='w-full md:w-auto'>
                           <span className='lg:block md:inline tracking-[0.035rem]'>
                           Focused Design which enables technology to be more
                           </span>
                           <span className='lg:block md:inline tracking-[0.035rem]'>
                           designed to be sustainable. Our specialty is in Human
                           </span>
                           <span className='lg:block md:inline tracking-[0.033rem]'>
                           Focused Design which enables technology to be more
                           </span>
                           <span className='lg:block md:inline tracking-[0.042rem]'>
                           approachable, user friendly and effective at reaching
                           </span>
                           communities
                           </article>
                    </div>
                </div>
                <div className=" h-96">
                    <img src={treeImage} alt="tree" className='h-full w-10/12  mx-auto' />
                </div>
                <div className="h-auto lg:h-96 my-11 lg:my-0 md:flex static lg:flex-col lg:justify-around ">
                <div className='mx-auto w-full md:w-[416px]'>
                        <p className='font-semibold text-xl my-2 '>Program Implementation</p>
                        <article className=' w-full md:w-auto '>
                           <span className='lg:block md:inline tracking-tight'>
                           Dnet designs and executes programs for social impact. Our
                           </span>
                           <span className='lg:block md:inline tracking-[0.035rem]'>
                           project journey starts with context investigation – it
                           </span>
                           <span className='lg:block md:inline tracking-tight'>
                           influences objectives, program design and innovation. Our
                           </span>
                           <span className='lg:block md:inline tracking-[0.018rem]'>
                           field action learning enables agility and robustness to
                           </span>
                           maximize outcomes.
                           </article>
                    </div>

                    <div className='mx-auto w-full md:w-[416px]'>
                        <p className='font-semibold text-xl my-2'>Business Solutions</p>
                        <article className=''>Dnet provides business solutions which include call centre
                        <span className='lg:block md:inline tracking-[0.034rem]'>support, content creation, graphic design, and motion</span> 
                        
                        graphic design.
                         </article>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Expertise;