import React from 'react'
import logo from '../assets/images/webp/Cafe_Gato_logo.webp'
import insta from '../assets/images/webp/Instagram.webp'
import face from '../assets/images/webp/facebook.webp'
import pinter from '../assets/images/webp/pinterest.webp'
import youtube from '../assets/images/webp/youtube.webp'
import whatshapp from '../assets/images/webp/whatshapp.webp'
import inbox from '../assets/images/webp/inbox.webp'
import call from '../assets/images/webp/call.webp'

const Footer = () => {
    return (
        <>
            <section className='mt-20 sm:mt-24 md:mt-[126px] lg:mt-[150px] xl:mt-[227px] bg-primary max-w-[1531px] mx-auto'>
                <div className="container pt-12 xxl:max-w-[1440px]">
                    <a href="#">
                        <img src={logo} className='mx-auto max-w-[155px]' alt="logo" />
                    </a>
                    <div className='max-w-[493px] mx-auto flex items-center gap-4 sm:gap-9 justify-center pt-11 flex-wrap'>
                        <a href="https://www.instagram.com/">
                            <img src={insta} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="instagram" />
                        </a>

                        <a href="https://www.facebook.com/">
                            <img src={face} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="face" />
                        </a>

                        <a href="https://www.pinterest.com/">
                            <img src={pinter} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="pinter" />
                        </a>

                        <a href="https://www.youtube.com/">
                            <img src={youtube} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="youtube" />
                        </a>

                        <a href="https://www.whatsapp.com/">
                            <img src={whatshapp} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="whatshapp" />
                        </a>

                        <a href="mailto:someone@example.com">
                            <img src={inbox} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="inbox" />
                        </a>

                        <a href="tel:+18475555555">
                            <img src={call} className='w-[38px] h-[38px] hover:shadow-secondry hover:shadow-link rounded-[50%] transition-all' alt="call" />
                        </a>
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