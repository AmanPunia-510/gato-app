import React from 'react'
import Cat_Cafe from '../assets/images/png/cat_cafe.png'
import Cat_foot from '../assets/images/png/Cat_foot.png'

const CatCafe = () => {
    return (
        <>
            <section className='pt-[227px] w-full max-w-[1920px] mx-auto'>
                <div className="container">
                    <h2 className='font-norwester font-normal text-12xl leading-130 text-primary text-center pb-14'>What is a <span className='text-secondry'> Cat Cafe?</span></h2>

                    <div className='p-6 border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe'>
                        <div className='flex flex-wrap flex-row mx-auto w-full items-center relative'>
                            <div className="col-7 w-7/12">
                                <p className='font-inter font-normal text-md text-primary leading-160'>A cat cafe is a unique establishment where guests can enjoy their favorite beverages in the company of friendly, adoptable cats. It's a place where people can relax, socialize, and experience the therapeutic benefits of spending time with cats. Cat cafes serve as a bridge between animal shelters and the community, providing a home-like environment for cats to socialize and meet potential adopters.</p>
                                    <img src={Cat_foot} className='w-[26px] absolute bottom-0 left-0' alt="Cat_foot" />
                            </div>
                            <div className="col-5 w-5/12 flex justify-end">
                                <img src={Cat_Cafe} className='w-full max-w-[413px]'  alt="Cat_Cafe" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CatCafe