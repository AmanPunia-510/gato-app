import React from 'react'
import Email from '../assets/images/webp/Email.webp'
import Ellips from '../assets/images/webp/Our_mission_right.webp'
import HandEllips from '../assets/images/webp/Footer-ellips.webp'

const Verification = () => {
    return (
        <section className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px] relative max-w-[1531px] mx-auto'>
            <div className="container relative z-10 xxl:max-w-[1440px]">
                <h2 className='font-norwester font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-20'>Stay Connected</h2>
                <div className="flex flex-wrap flex-row mx-auto w-full items-center max-lg:gap-7">
                    <div className="w-full lg:w-5/12 max-lg:flex max-lg:justify-center">
                        <form action="" className='max-w-[471px] w-full'>
                            <div className='px-8 py-6 md:py-7 border-solid border-[3px] border-primary rounded-[72px] bg-white'>
                                <input type="text" name="Enter your name" className='font-inter font-normal text-md leading-130 text-primary border-none outline-none w-full' placeholder='Enter your name' />
                            </div>

                            <div className='px-8 py-6 md:py-7 border-solid border-[3px] border-primary rounded-[72px] mt-5 md:mt-9 bg-white'>
                                <input type="email" name="Enter your email" className='font-inter font-normal text-md leading-130 text-primary border-none outline-none w-full' placeholder='Enter your email' />
                            </div>

                            <button className='w-full h-[78px] md:h-[90px] rounded-[72px] mt-5 md:mt-9 border-none outline-none font-inter text-xl leading-130 font-semibold text-white bg-secondry'>Submit</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                        <img src={Email} className='max-w-[500px] w-full' alt="Email" />
                    </div>
                </div>
            </div>
            <img src={Ellips} className='absolute right-0 top-[371px] -z-0 max-w-[703px] max-lg:hidden' alt="Ellips" />
            <img src={HandEllips} className='absolute left-0 bottom-[-174px] -z-0 max-lg:hidden' alt="Ellips" />
        </section>
    )
}

export default Verification