import React from 'react'
import Cat_foot from '../assets/images/png/Cat_foot.png'
import Cafe_Gato1 from '../assets/images/png/cafe_gato1.png'
import Cafe_Gato2 from '../assets/images/png/cafe_gato2.png'
import Cafe_Gato3 from '../assets/images/png/cafe_gato3.png'
import Cafe_Gato4 from '../assets/images/png/cafe_gato4.png'
import Cafe_Gato5 from '../assets/images/png/cafe_gato5.png'
import Cafe_Gato6 from '../assets/images/png/cafe_gato6.png'
import Cafe_Gato_img from '../assets/images/png/cafe_gato.png'
import ellips from '../assets/images/png/Cafe_gato_ellips.png'

const CafeGato = () => {
    return (
        <>
            <section className='pt-20 sm:pt-24 md:pt-[135px] lg:pt-[257px] relative  max-w-[1531px] mx-auto'>
                <div className="container xxl:max-w-[1280px] relative z-10">
                    <div className='flex justify-center'>
                        <img src={Cafe_Gato_img} className='max-w-[289px] max-sm:max-w-[197px]' alt="cafe_gato_img" />
                    </div>
                    <div>
                        <p className='font-inter font-normal text-md leading-170 text-primary text-center max-w-[756px] mx-auto pt-4 sm:pt-5 pb-8 '>Cat Cafe in Spanish, Cafe Gato is more than just a cafe; it's a sanctuary for both humans and cats. By combining great coffee, a cozy atmosphere, and the joy of feline companionship, we create a unique and fulfilling experience for everyone who walks through our doors. </p>
                        <div className='flex justify-end pb-7 pr-[77px] relative max-md:hidden'>
                            <img src={Cat_foot} className='w-[26px]' alt="Cat_foot" />
                            <img src={Cat_foot} className='w-[26px] absolute top-[-337%] left-[131px]' alt="Cat_foot" />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap xxl:justify-between w-full mx-auto'>
                        <div className="w-full sm:w-4/6 lg:w-5/12 px-[6.5px]">
                            <img src={Cafe_Gato1} className='h-full w-full' alt="Cafe_Gato1_img" />
                        </div>

                        <div className="w-full sm:w-4/12 lg:w-3/12 px-[6.5px] max-sm:pt-[13px]">
                            <img src={Cafe_Gato2} className='h-full w-full' alt="Cafe_Gato2_img" />
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-4/12 px-[6.5px] max-lg:pt-[13px]">
                            <img src={Cafe_Gato3} className='h-full w-full' alt="Cafe_Gato3_img" />
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-4/12 px-[6.5px] mt-[13px]">
                            <img src={Cafe_Gato4} className='h-full w-full' alt="Cafe_Gato4_img" />
                        </div>

                        <div className="w-full sm:w-4/6 lg:w-5/12 px-[6.5px] mt-[13px]">
                            <img src={Cafe_Gato5} className='h-full w-full' alt="Cafe_Gato5_img" />
                        </div>

                        <div className="w-full sm:w-4/12 lg:w-3/12 px-[6.5px] mt-[13px]">
                            <img src={Cafe_Gato6} className='h-full w-full' alt="Cafe_Gato6_img" />
                        </div>
                    </div>
                </div>
                <img src={ellips} className='max-w-[192px] absolute top-[44px] left-0 -z-0 max-sm:hidden' alt="ellips" />
            </section>
        </>
    )
}

export default CafeGato