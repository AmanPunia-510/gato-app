import React from 'react'
import Hero_bg from '../assets/images/webp/Hero_right_bg-min.webp';
import Cafe_Gato from '../assets/images/webp/Cafe_Gato_logo-min.webp';
import Cat_Thankyou from '../assets/images/webp/Cat_Thankyou-min.webp';
import Hero_Responsive from '../assets/images/webp/Hero_Responsive-min.png'
import Hero_right_Respon from '../assets/images/webp/hero-right-desktop-min.webp'

const Header = () => {

    return (
        <>
            <header className='w-full relative overflow-hidden max-w-[1531px] mx-auto bg-[#FCFBE3]'>
                <img src={Hero_bg} className='absolute right-0 -top-3 custom_xl:max-w-[740px] min-h-[980px] max-custom_xl:hidden' alt="Hero_bg" />
                <img src={Hero_Responsive} className='absolute right-0 -top-3 hidden max-custom_xl:inline-block max-md:hidden max-w-[538px] h-[396px]' alt="Hero_Responsive" />
                <div className='container relative z-10'> 
                    <img src={Cafe_Gato} className='max-w-[155px] pt-6 max-md:mx-auto cursor-pointer' alt="Cafe_Gato_logo" />
                    <div className='mt-8 sm:mt-16'>
                        <h2 className=' font-NewShelter font-norwester font-normal max-sm:text-center text-6xl sm:text-14xl md:text-18xl lg:text-25xl leading-120 custom_xl:max-w-[640px] max-custom_xl:text-center text-primary'>Join us in building Providence's  <span className='text-secondry'>first ever Cat Cafe!</span></h2>
                        <p className='mt-5 font-inter text-md sm:text-xl font-normal leading-120 text-primary max-custom_xl:text-center custom_xl:max-w-[544px] max-sm:text-center'>Hi there! We are thrilled to introduce ourselves as Cafe Gato, in the process of opening the first cat cafe in Providence, Rhode Island! Your support and enthusiasm will be instrumental in making this dream a reality, and we couldn't be more grateful to have you along for the ride.</p>
                        <img src={Cat_Thankyou} className='max-w-[477px] w-full mt-8 custom_xl:ml-[67px] max-custom_xl:mx-auto' alt="Cat_Thankyou" />
                        <img src={Hero_right_Respon} className='max-w-[600px] w-full mx-auto mt-6 custom_xl:hidden' alt="Hero_right_Respon" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header