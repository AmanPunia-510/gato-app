import React, { useState } from 'react'
import emailImg from '../assets/images/webp/email-img.webp'
import handEllipse from '../assets/images/webp/hand-ellipse.webp'
import verificationEllipse from '../assets/images/png/verification-ellipse.png'
import handEllipseRight from '../assets/images/webp/cat-cafe-ellipse.webp'

const Verification = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: ""
    })
    const [error, setError] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (formValue.name !== "" && formValue.email !== "") {
            setError(false)
        } else {
            setError(true)
        }
    }
    return (
        <div className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px] relative'>
            <div className="container relative z-10">
                <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-20'>Stay Connected</h2>
                <div className="flex flex-wrap flex-row mx-auto w-full items-center max-lg:gap-7">
                    <div className="w-full lg:w-5/12 max-lg:flex max-lg:justify-center">
                        <form action="" className='max-w-[471px] w-full'>
                            <div className='px-8 py-6 md:py-7 border-solid border-[3px] border-primary rounded-[72px]'>
                                <input type="text" name="Enter your name" className='font-inter font-normal text-base leading-130 text-primary border-none outline-none w-full bg-transparent' placeholder='Enter your name' onChange={(e) => setFormValue({
                                    ...formValue,
                                    name: e.target.value
                                })} />
                            </div>
                            <p className='text-red-700'>
                                {error && formValue.name === '' && "Name is required"}
                            </p>

                            <div className='px-8 py-6 md:py-7 border-solid border-[3px] border-primary rounded-[72px] mt-5 md:mt-9'>
                                <input type="email" name="Enter your email" className='font-inter font-normal text-base leading-130 text-primary border-none outline-none w-full bg-transparent' placeholder='Enter your email' onChange={(e) => setFormValue({
                                    ...formValue,
                                    email: e.target.value
                                })} />
                            </div>
                            <p className='text-red-700'>
                                {error && "Email is required"}</p>

                            <button type='submit' onClick={(e) => handleSubmit(e)} className='w-full h-[78px] md:h-[90px] rounded-[72px] mt-[53px] border-none outline-none font-inter text-xl leading-130 font-semibold text-white bg-secondary hover:border-[2px] hover:border-secondary hover:border-solid hover:bg-transparent hover:text-secondary transition-all max-sm:mt-6'>Submit</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                        <img src={emailImg} className='max-w-[500px] w-full max-sm:max-w-[320px]' alt="EmailImg" />
                    </div>
                </div>
            </div>
            <img src={handEllipse} className='absolute left-0 bottom-[-174px] -z-0 max-lg:hidden pointer-events-none' alt="HandEllipse" />
            <img src={verificationEllipse} className='absolute right-0 top-[41%] z-0 max-xl:hidden pointer-events-none' alt="verificationEllipse" />
            <img src={handEllipseRight} className='absolute top-[15%] right-[-7px] max-lg:hidden pointer-events-none' alt="handEllipse" />
        </div>
    )
}
export default Verification