import React from 'react'
import Execpt from '../assets/images/webp/Exepct-min.webp'

const Expect = () => {
    return (
        <>
            <section className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px]'>
                <div className="container xxl:max-w-[1440px]">
                    <div className="flex flex-wrap flex-row mx-auto w-full max-xl:gap-9">
                        <div className="w-full xl:w-1/2 xl:pr-3 max-xl:flex max-xl:justify-center">
                            <img src={Execpt} className='max-w-[631px] xl:max-w-[515px] w-full' alt="Execpt" />
                        </div>
                        <div className="w-full xl:w-1/2 xl:pl-3 flex justify-center xl:justify-end">
                            <div className='max-w-[630px] xl:max-w-[589px]'>
                                <h2 className='font-norwester font-normal text-6xl sm:text-12xl leading-130 text-primary mb-3 xl:mb-7'>What to Expect?</h2>

                                <div>
                                    <h2 className='font-norwester font-normal text-6xl leading-120 text-primary'>Relaxing Ambiance</h2>
                                    <p className='font-inter font-normal text-md leading-150 text-primary pt-[6px]'>A calm and inviting space designed to help you unwind and enjoy your time.</p>
                                </div>

                                <div className='mt-5'>
                                    <h2 className='font-norwester font-normal text-6xl leading-120 text-primary'>Interaction with Cats</h2>
                                    <p className='font-inter font-normal text-md leading-150 text-primary pt-[6px]'>Plenty of opportunities to play and cuddle with our friendly cats.</p>
                                </div>

                                <div className='mt-5'>
                                    <h2 className='font-norwester font-normal text-6xl leading-120 text-primary'>Special Events</h2>
                                    <p className='font-inter font-normal text-md leading-150 text-primary pt-[6px]'>Fun and engaging events that combine creativity and feline companionship.</p>
                                </div>

                                <div className='mt-5'>
                                    <h2 className='font-norwester font-normal text-6xl leading-120 text-primary'>Adoption Process</h2>
                                    <p className='font-inter font-normal text-md leading-150 text-primary pt-[6px]'>A straightforward and supportive adoption process for those looking to give a cat a forever home.</p>
                                </div>

                                <div className='mt-5'>
                                    <h2 className='font-norwester font-normal text-6xl leading-120 text-primary'>Delicious Coffee!</h2>
                                    <p className='font-inter font-normal text-md leading-150 text-primary pt-[6px]'>This one is self-explanatory!</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expect