import React from 'react';
import focusarea1 from "../../image/area-of-focus-01.jpg"
import focusarea2 from "../../image/area-of-focus-02.png"
import focusarea3 from "../../image/area-of-focus-03.png"
import focusarea4 from "../../image/area-of-focus-04.png"
import focusarea5 from "../../image/area-of-focus-05.png"

const AreaOfFocus = () => {
    return (
        <div className='bg-gray-100 py-20 min-h-screen mb-20'>
            <div className='max-w-[85rem] mx-auto'>
                <h1 className='text-5xl font-semibold  my-11'>AREAS OF FOCUS</h1>
                <div className='grid md:grid-cols-2 grid-cols-1  gap-5 md:h-96 h-auto'>
                    <div className='bg-white duration-500 hover:bg-primary hover:text-white flex '>
                        <div className='w-6/12 flex items-center px-7'>
                            <div>
                                <h2 className='text-xl font-semibold mb-2'>Health and Nutrition</h2>
                                <article>
                                    Dnet aims to enhance healthcare services for pregnant and new mothers and improve their mental health and well-being. It advocates for sexual and reproductive health and rights (SRHR) for women and adolescents.
                                </article>
                            </div>
                        </div>
                        <div className='w-6/12'>
                            <img src={focusarea1} alt="" className='h-full' />
                        </div>
                    </div>
                    <div className=' flex flex-col justify-between bg-white duration-500 hover:bg-primary hover:text-white'>
                        <div className='flex justify-center items-center h-52  z-10'>
                            <div className='mx-11'>
                            <h2 className='font-semibold text-xl'>Education and Literacy</h2>
                            <p>Dnet works towards improving basic computer literacy skills of  school teachers and students. Dnet plans to include digital literacy, and ICT-learning for the youth and marginalized communities.</p>
                            </div>
                        </div>
                        <div>
                            <img src={focusarea2} alt="" className='h-44'/>
                        </div>

                    </div>
                </div>


                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:h-96 h-auto mt-7'>

                <div className='bg-white duration-500 hover:bg-primary hover:text-white flex '>
                        <div className=''>
                        <div className='w-full h-52'>
                            <img src={focusarea3} alt="" className='h-full' />
                        </div>
                            <div className='px-4 mt-5'>
                                <h2 className='text-xl font-semibold '>Governance and Society</h2>
                                <article className='mb-4'>
                                Dnet advocates to promote citizens' fundamental rights and freedom and strengthen institutions towards good governance. Dnet's actions include fundamental rights, democratic practices, anti-trafficking,  protection, and gender-based violence (GBV).
                                </article>
                            </div>
                        </div>
                       
                    </div>
                <div className='bg-white duration-500 hover:bg-primary hover:text-white flex '>
                <div className='w-6/12'>
                            <img src={focusarea4} alt="" className='h-full' />
                        </div>
                        <div className='w-6/12 flex items-center px-7'>
                            <div>
                                <h2 className='text-xl font-semibold mb-2'>Climate and Environment</h2>
                                <article>
                                Dnet aims to enhance healthcare services for pregnant and new mothers and improve their mental health and well-being. It advocates for sexual and reproductive health and rights (SRHR) for women and adolescents.
                                </article>
                            </div>
                        </div>
                        
                    </div>
                <div className='bg-white duration-500 hover:bg-primary hover:text-white flex flex-col justify-between'>
                        <div className='flex items-center px-4 mt-5'>
                            <div className='my-11 md:my-0'>
                                <h2 className='text-xl font-semibold mb-2'>Business and Entrepreneurship</h2>
                                <article>
                                Dnet works towards enabling women and young entrepreneurs for economic emancipation. This includes their economic development, incorporating trade and livelihood.
                                </article>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={focusarea5} alt="" className='h-52' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaOfFocus;