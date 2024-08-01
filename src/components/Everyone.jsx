import React from 'react'
import PeopleLooking from '../assets/images/webp/PeopleLooking.webp'
import CatLovers from '../assets/images/webp/CatLovers.webp'
import Family from '../assets/images/webp/Family.webp'
import CollegeStudents from '../assets/images/webp/CollegeStudents.webp'
import Ellipse from '../assets/images/webp/MissionEllipse.webp'

export const Everyone = () => {
    return (
            <div className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[167px] xl:pt-[275px] relative'>
                <div className="container">
                    <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary pb-4 lg:pb-16 text-center max-w-[617px] mx-auto'>Who is <span className='text-secondary'>Cafe Gato</span> For? Well….everyone and anyone!</h2>
                    <div className='flex flex-wrap flex-row mx-auto w-full'>
                        <div className='w-full md:w-1/2 xl:w-1/4 px-2 pl-0'>
                            <div className='px-3 py-6 border-[2px] border-solid border-primary shadow-cate_cafe rounded-md h-full hover:shadow-secondary hover:border-secondary cursor-pointer transition-all'>
                                <img src={CollegeStudents} className='w-[88px] mx-auto' alt="CollegeStudents" />
                                <h3 className='font-normal text-6xl leading-150 text-center text-primary pt-[6px]'>College Students</h3>
                                <p className='font-inter font-normal text-md text-primary text-center leading-160 pt-3'>Being so close to the biggest universities and colleges in Providence, Cafe Gato is the perfect spot for studying, taking a break, and relieving exam stress.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 xl:w-1/4 px-2 pl-0 max-md:mt-8'>
                            <div className='px-3 py-6 border-[2px] border-solid border-primary shadow-cate_cafe rounded-md h-full hover:shadow-secondary hover:border-secondary cursor-pointer transition-all'>
                                <img src={CatLovers} className='w-[88px] mx-auto' alt="CatLovers" />
                                <h3 className='font-normal text-6xl leading-150 text-center text-primary pt-[6px]'>Cat Lovers</h3>
                                <p className='font-inter font-normal text-md text-primary text-center leading-160 pt-3'>An ideal place to enjoy the company of cats, whether looking to adopt or just spend time with feline friends.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 xl:w-1/4 px-2 pl-0 max-xl:mt-8'>
                            <div className='px-3 py-6 border-[2px] border-solid border-primary shadow-cate_cafe rounded-md h-full hover:shadow-secondary hover:border-secondary cursor-pointer transition-all'>
                                <img src={Family} className='w-[88px] mx-auto' alt="Family" />
                                <h3 className='font-normal text-6xl leading-150 text-center text-primary pt-[6px]'>Families</h3>
                                <p className='font-inter font-normal text-md text-primary text-center leading-160 pt-3'>A family-friendly environment where both kids and adults can enjoy the company of cats and delicious treats.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 xl:w-1/4 px-2 pl-0 max-xl:mt-8'>
                            <div className='px-3 py-6 border-[2px] border-solid border-primary shadow-cate_cafe rounded-md h-full hover:shadow-secondary hover:border-secondary cursor-pointer transition-all'>
                                <img src={PeopleLooking} className='w-[88px] mx-auto' alt="People Looking to Adopt" />
                                <h3 className='font-normal text-6xl leading-150 text-center text-primary pt-[6px]'>People Looking to Adopt</h3>
                                <p className='font-inter font-normal text-md text-primary text-center leading-160 pt-3'>Those considering adopting a cat can interact with our residents and find the perfect match in a cage-free environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Ellipse} className='absolute top-[266px] max-md:hidden -z-0 pointer-events-none left-0 max-lg:hidden' alt="Ellipse" />
            </div>
    )
}
