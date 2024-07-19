import React from 'react'
import Hero_bg from '../assets/images/png/Hero_right_bg.png';
import Cafe_Gato from '../assets/images/png/Cafe_Gato_logo.png';
import Cat_Thankyou from '../assets/images/png/Cat_Thankyou.png';

const Header = () => {

    return (
        <>
            <header className='w-full relative overflow-hidden max-w-[1920px] mx-auto'>
                <img src={Hero_bg} className='absolute right-0 top-0 max-w-[693px] min-h-[985px] max-xl:right-[-200px] max-lg:blur-[8px] max-lg:opacity-70 xxl:hidden' alt="Hero_bg" />
                <div className='container relative z-10 xxl:max-w-[1280px]'>
                    <img src={Hero_bg} className='absolute right-6 top-0 max-w-[693px] min-h-[985px] pointer-events-none hidden xxl:inline-block z-[-1]' alt="Hero_bg" />
                    <img src={Cafe_Gato} className='max-w-[155px] pt-6' alt="Cafe_Gato_logo" />
                    <div className='mt-16'>
                        <h2 className=' font-NewShelter font-norwester font-normal text-22xl leading-130 max-w-[640px] text-primary'>Join us in building Providence's  <span className='text-secondry'>first ever Cat Cafe!</span></h2>
                        <p className='mt-5 font-inter text-xl font-normal leading-120 text-primary max-w-[544px]'>Hi there! We are thrilled to introduce ourselves as Cafe Gato, in the process of opening the first cat cafe in Providence, Rhode Island! Your support and enthusiasm will be instrumental in making this dream a reality, and we couldn't be more grateful to have you along for the ride.</p>
                        <img src={Cat_Thankyou} className='max-w-[477px] w-full mt-5 ml-[67px]' alt="Cat_Thankyou" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header