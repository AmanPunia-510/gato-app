import React from 'react'
import logo from '../assets/images/png/Cafe_Gato_logo.png'
import insta from '../assets/images/png/Instagram.png'
import face from '../assets/images/png/facebook.png'
import pinter from '../assets/images/png/pinterest.png'
import youtube from '../assets/images/png/youtube.png'
import whatshapp from '../assets/images/png/whatshapp.png'
import inbox from '../assets/images/png/inbox.png'
import call from '../assets/images/png/call.png'

const Footer = () => {
    return (
        <>
            <section className='mt-20 sm:mt-24 md:mt-[126px] lg:mt-[150px] xl:mt-[227px] bg-primary max-w-[1531px] mx-auto'>
                <div className="container pt-12 xxl:max-w-[1440px]">
                    <img src={logo} className='mx-auto max-w-[155px]' alt="logo" />
                    <div className='max-w-[493px] mx-auto flex items-center gap-4 sm:gap-9 justify-center pt-11 flex-wrap'>
                        <img src={insta} className='w-[38px] h-[38px]' alt="instagram" />
                        <img src={face} className='w-[38px] h-[38px]' alt="face" />
                        <img src={pinter} className='w-[38px] h-[38px]' alt="pinter" />
                        <img src={youtube} className='w-[38px] h-[38px]' alt="youtube" />
                        <img src={whatshapp} className='w-[38px] h-[38px]' alt="whatshapp" />
                        <img src={inbox} className='w-[38px] h-[38px]' alt="inbox" />
                        <img src={call} className='w-[38px] h-[38px]' alt="call" />
                    </div>
                </div>
                <div className='bg-[#3D6273] w-full h-[1px] mt-[60px]'></div>
                <div className="container">
                    <div className='font-inter font-normal text-md leading-140 text-[#CED7DC] text-center pt-4 pb-2'>©2024 CafeGato | All Rights reserved</div>
                </div>
            </section>
        </>
    )
}

export default Footer