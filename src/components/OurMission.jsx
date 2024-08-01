import React from 'react'
import MissionImg from '../assets/images/webp/MissionImg.webp'
import MissionCat from '../assets/images/webp/MissionCat.webp'
import MissionBg from '../assets/images/webp/MissionBg.webp'
import MissionMd from '../assets/images/webp/MissionMd.webp'
import MissionEllipse from '../assets/images/webp/MissionEllipse.webp'

const OurMission = () => {
    return (
        <>
            <section className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[223px] relative'>
                <div className='max-w-[1115px] w-full mx-auto px-6 relative z-20'>
                    <div className='flex flex-wrap flex-row mx-auto w-full lg:items-end items-center max-lg:gap-14 max-lg:flex-col-reverse max-sm:gap-7'>
                        <div className="w-full lg:w-5/12 px-[9px] max-lg:flex max-lg:justify-center">
                            <img src={MissionImg} className='w-full max-lg:hidden' alt="MissionImg" />
                            <img src={MissionMd} className='w-full lg:hidden max-w-[690px]' alt="Mission_Img" />
                        </div>
                        <div className="w-full lg:w-7/12 px-[9px]">
                            <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary pb-2 lg:pb-5 max-lg:text-center'>OUR MISSION</h2>
                            <p className='font-inter font-normal text-md leading-160 text-primary max-lg:text-center'>Cafe Gato, the first cat cafe in Providence, was founded with the mission to bring a community of coffee lovers together, one cup at a time, while fostering the well-being of our guests and cats, one adoption at a time. Cafe Gato’s purpose is to alleviate the over-crowdedness of animal shelters to allow for more cats to be rescued and increase the potential of adoptability within the feline community, as well as boost mental well-being of those in our community who are feeling the stress of everyday life. Our core values are based around our community, making a difference, and the quality of our services and products.</p>
                            <img src={MissionCat} className='w-[118px] mt-9 max-lg:hidden' alt="MissionCat" />
                        </div>
                    </div>
                </div>
                <img src={MissionBg} className='absolute right-0 top-[221px] z-0 max-w-[930px] h-[575px] w-full' alt="Mission_Bg" />
                <img src={MissionEllipse} className=' absolute left-0 bottom-12 max-lg:hidden' alt="MissionEllipse" />
            </section>
        </>
    )
}

export default OurMission