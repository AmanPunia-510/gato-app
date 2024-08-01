import React from 'react'
import Accordion from './Accordion'
import VisionImg from '../assets/images/webp/VisionImg.webp'

const Vision = () => {
    return (
            <div className='pt-20 sm:pt-24 md:pt-[135px] lg:pt-[167px] xl:pt-[257px] relative'>
                <div className="container relative z-10">
                    <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-5'>Our Vision for <span className='text-secondary'>Cafe Gato</span></h2>
                    <p className='font-inter font-normal text-md leading-160 text-primary max-w-[779px] mx-auto text-center xl:pb-11'>At Cafe Gato, we envision a unique and enchanting environment that seamlessly blends an antique charm in the cafe with a playful and relaxing atmosphere of an outdoor cat lounge. Here’s what you can expect when you step into our world.</p>
                    <div className='flex flex-wrap flex-row mx-auto w-full max-xl:gap-9 items-end'>
                        <div className="xl:w-7/12 max-xl:flex max-xl:justify-center w-full">
                            <div className='max-xl:mx-auto'>
                                <Accordion />
                            </div>
                        </div>
                        <div className="w-full xl:w-5/12 max-xl:flex max-xl:justify-center">
                        <img src={VisionImg} className='w-full max-xl:max-w-[660px]' alt="vision" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Vision