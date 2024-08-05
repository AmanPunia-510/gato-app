import benefitBgImg from '../assets/images/webp/benefit-bg.webp'
import benefitBgOneImg from '../assets/images/webp/benefit-bg-one.webp'
import rightBgImg from '../assets/images/webp/mission-bg.webp'
import ellipseImg from '../assets/images/webp/mission-right-ellipse.webp'

const Benefit = () => {
    return (
        <div className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[190px] relative'>
            <div className='max-w-[1103px] mx-auto px-6 relative z-10'>
                <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-20'>BENEFITS</h2>
                <div className="flex flex-wrap flex-row mx-auto w-full items-center max-xl:gap-7">
                    <div className="w-full xl:w-5/12 xl:pr-3 max-xl:flex max-xl:justify-center">
                        <img src={benefitBgImg} className='max-w-[375px] w-full' alt="BenefitBg" />
                    </div>
                    <div className="w-full xl:w-7/12 xl:pl-3">
                        <h2 className='font-normal leading-130 text-6xl text-primary max-xl:text-center'>FOR THE CATS</h2>
                        <p className='font-inter font-normal text-primary text-base leading-160 pt-2 xl:pt-5 xl:max-w-[590px] max-xl:text-center max-xl:max-w-[713px] max-xl:mx-auto'>Partnering with our local animal shelter, we offer a larger, cage-free environment for our cats to socialize and build confidence around people and other cats. This environment helps improve their overall well-being and increases their chances of finding their forever home.</p>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row mx-auto w-full items-center max-xl:gap-7 mt-8 xl:mt-20 max-xl:flex-col-reverse">
                    <div className="w-full xl:w-7/12 xl:pr-3">
                        <h2 className='font-normal leading-130 text-6xl text-primary max-xl:text-center'>FOR CAT AND COFFEE LOVERS</h2>
                        <p className='font-inter font-normal text-primary text-base leading-160 pt-2 xl:pt-5 xl:max-w-[590px] max-xl:text-center max-xl:max-w-[713px] max-xl:mx-auto'>Spending time with cats has been shown to reduce stress and anxiety, improve mood, and offer a unique and enjoyable experience. Whether you're a student, a working professional, or a family, our café offers a little slice of happiness and relaxation for all!</p>
                    </div>
                    <div className="w-full xl:w-5/12 xl:pl-3 flex max-xl:justify-center xl:justify-end">
                        <img src={benefitBgOneImg} className='max-w-[375px] w-full' alt="BenefitBgOne" />
                    </div>
                </div>
            </div>
            <img src={rightBgImg} className='absolute right-0 max-lg:hidden lg:top-[332px] max-w-[954px] w-full -z-0' alt="RightBg" />
            <img src={ellipseImg} className='absolute -z-0 top-0 right-0 max-lg:hidden lg:top-[200px]' alt="Ellipse" />
        </div>
    )
}
export default Benefit