import React from 'react'
import Mission_Img from '../assets/images/png/Mission.png'
import Mission_cat from '../assets/images/png/Mission_cat.png'
import Mission_Bg from '../assets/images/png/Our_mission_right.png'
import Mission_Md from '../assets/images/png/misson-md.png'

const OurMission = () => {
    return (
        <>
            <section className='pt-[223px] max-w-[1920px] mx-auto relative'>
                <div className='max-w-[1115px] w-full mx-auto px-6'>
                    <div className='flex flex-wrap flex-row mx-auto w-full lg:items-end items-center'>
                        <div className="w-full md:w-1/2 lg:w-5/12 px-[9px]">
                            <img src={Mission_Img} className='w-full max-md:hidden' alt="Mission_Img" />
                            <img src={Mission_Md} className='w-full md:hidden' alt="Mission_Img" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-7/12 px-[9px]">
                            <h2 className='font-norwester font-normal text-12xl leading-130 text-primary pb-5'>OUR MISSION</h2>
                            <p className='font-inter font-normal text-md leading-160 text-primary'>Cafe Gato, the first cat cafe in Providence, was founded with the mission to bring a community of coffee lovers together, one cup at a time, while fostering the well-being of our guests and cats, one adoption at a time. Cafe Gato’s purpose is to alleviate the over-crowdedness of animal shelters to allow for more cats to be rescued and increase the potential of adoptability within the feline community, as well as boost mental well-being of those in our community who are feeling the stress of everyday life. Our core values are based around our community, making a difference, and the quality of our services and products.</p>
                            <img src={Mission_cat} className='w-[118px] mt-9 max-md:hidden' alt="Mission_cat" />
                        </div>
                    </div>
                </div>
                <img src={Mission_Bg} className='absolute right-0 top-[221px] z-[-1] max-w-[930px] h-[575px] w-full' alt="Mission_Bg" />
            </section>
        </>
    )
}

export default OurMission