import React from 'react'
import BenifitBg from '../assets/images/webp/BenifitBg.webp'
import Benifit1Bg from '../assets/images/webp/Benifit1Bg.webp'
import RightBg from '../assets/images/webp/Our_mission_right.webp'
import Ellips from '../assets/images/webp/MissionRightEllips.webp'

const Benifit = () => {
    return (
        <>
            <section className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[190px] max-w-[1531px] mx-auto relative'>
                <div className='max-w-[1103px] mx-auto px-6 relative z-10 xxl:max-w-[1440px]'>
                    <h2 className='font-norwester font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-20'>BENEFITS</h2>
                    <div className="flex flex-wrap flex-row mx-auto w-full items-center max-xl:gap-7">
                        <div className="w-full xl:w-5/12 xl:pr-3 max-xl:flex max-xl:justify-center">
                            <img src={BenifitBg} className='max-w-[375px] w-full' alt="BenifitBg" />
                        </div>
                        <div className="w-full xl:w-7/12 xl:pl-3">
                            <h2 className='font-norwester font-normal leading-130 text-6xl text-primary max-xl:text-center'>FOR THE CATS</h2>
                            <p className='font-inter font-normal text-primary text-md leading-160 pt-2 xl:pt-5 xl:max-w-[590px] max-xl:text-center max-xl:max-w-[713px] max-xl:mx-auto'>Partnering with our local animal shelter, we offer a larger, cage-free environment for our cats to socialize and build confidence around people and other cats. This environment helps improve their overall well-being and increases their chances of finding their forever home.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-row mx-auto w-full items-center max-xl:gap-7 mt-8 xl:mt-20 max-xl:flex-col-reverse">
                        <div className="w-full xl:w-7/12 xl:pr-3">
                            <h2 className='font-norwester font-normal leading-130 text-6xl text-primary max-xl:text-center'>FOR CAT AND COFFEE LOVERS</h2>
                            <p className='font-inter font-normal text-primary text-md leading-160 pt-2 xl:pt-5 xl:max-w-[590px] max-xl:text-center max-xl:max-w-[713px] max-xl:mx-auto'>Spending time with cats has been shown to reduce stress and anxiety, improve mood, and offer a unique and enjoyable experience. Whether you're a student, a working professional, or a family, our café offers a little slice of happiness and relaxation for all!</p>
                        </div>

                        <div className="w-full xl:w-5/12 xl:pl-3 flex max-xl:justify-center xl:justify-end">
                            <img src={Benifit1Bg} className='max-w-[375px] w-full' alt="Benifit1Bg" />
                        </div>
                    </div>
                </div>
                <img src={RightBg} className='absolute right-0 max-lg:hidden lg:top-[332px] max-w-[954px] w-full -z-0' alt="RightBg" />
                <img src={Ellips} className='absolute -z-0 top-0 right-0 max-lg:hidden lg:top-[200px]' alt="Ellips" />
            </section>
        </>
    )
}

export default Benifit