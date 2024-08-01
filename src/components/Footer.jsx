import React from 'react'
import CageLogo from '../assets/images/webp/CafeLogo.webp'
import InstagramImg from '../assets/images/webp/InstagramImg.webp'
import FacebookImg from '../assets/images/webp/FacebookImg.webp'
import PinterImg from '../assets/images/webp/PinterImg.webp'
import YoutubeImg from '../assets/images/webp/YoutubeImg.webp'
import WhatsappImg from '../assets/images/webp/WhatsappImg.webp'
import InboxImg from '../assets/images/webp/InboxImg.webp'
import CallImg from '../assets/images/webp/CallImg.webp'

const Footer = () => {
    return (
            <div className='mt-20 sm:mt-24 md:mt-[126px] lg:mt-[150px] xl:mt-[227px] bg-primary'>
                <div className="container pt-12">
                    <a href="#">
                        <img src={CageLogo} className='mx-auto max-w-[155px]' alt="CageLogo" />
                    </a>
                    <div className='max-w-[493px] mx-auto flex items-center gap-4 sm:gap-9 justify-center pt-11 flex-wrap'>
                        <a href="https://www.instagram.com/">
                            <img src={InstagramImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="InstagramImg" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={FacebookImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="FacebookImg" />
                        </a>
                        <a href="https://www.pinterest.com/">
                            <img src={PinterImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="PinterImg" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src={YoutubeImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="YoutubeImg" />
                        </a>
                        <a href="https://www.whatsapp.com/">
                            <img src={WhatsappImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="WhatsappImg" />
                        </a>
                        <a href="mailto:someone@example.com">
                            <img src={InboxImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="InboxImg" />
                        </a>
                        <a href="tel:+18475555555">
                            <img src={CallImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-link rounded-[50%] transition-all' alt="CallImg" />
                        </a>
                    </div>
                </div>
                <div className='bg-[#3D6273] w-full h-[1px] mt-[60px]'></div>
                <div className="container">
                    <div className='font-inter font-normal text-md leading-140 text-[#CED7DC] text-center pt-4 pb-2'>©2024 CafeGato | All Rights reserved</div>
                </div>
            </div>
    )
}

export default Footer