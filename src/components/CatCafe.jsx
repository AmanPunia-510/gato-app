import React from 'react'
import Cat_Cafe from '../assets/images/png/cat_cafe.png'
import Cat_foot from '../assets/images/png/Cat_foot.png'
import Cat_Cafe_ellips from '../assets/images/png/Cat_Cafe_ellips.png'

const CatCafe = () => {
    return (
        <>
            <section className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px] w-full max-w-[1531px] mx-auto relative'>
                <div className="container xxl:max-w-[1280px]">
                    <h2 className='font-norwester font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-14'>What is a <span className='text-secondry'> Cat Cafe?</span></h2>

                    <div className='p-3 sm:p-6 border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe'>
                        <div className='flex flex-wrap flex-row mx-auto w-full items-center relative max-lg:flex-col-reverse max-lg:gap-7'>
                            <div className="w-full lg:w-7/12">
                                <p className='font-inter font-normal text-md text-primary leading-160 max-lg:text-center'>A cat cafe is a unique establishment where guests can enjoy their favorite beverages in the company of friendly, adoptable cats. It's a place where people can relax, socialize, and experience the therapeutic benefits of spending time with cats. Cat cafes serve as a bridge between animal shelters and the community, providing a home-like environment for cats to socialize and meet potential adopters.</p>
                                    <img src={Cat_foot} className='w-[26px] absolute bottom-0 left-0 -z-10' alt="Cat_foot" />
                            </div>
                            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
                                <img src={Cat_Cafe} className='w-full max-w-[413px]'  alt="Cat_Cafe" />
                            </div>
                        </div>
                    </div>

                </div>
                <img src={Cat_Cafe_ellips} className='absolute right-0 top-[165px] -z-0 max-lg:hidden pointer-events-none' alt="Cat_Cafe_ellips" />
            </section>
        </>
    )
}

export default CatCafe