import heroBgImg from '../assets/images/webp/hero-bg.webp';
import cafeLogo from '../assets/images/webp/cafe-logo.webp';
import thankyouImg from '../assets/images/webp/thank-you-img.webp';
import heroResponsive from '../assets/images/webp/hero-responsive.png'
import heroRightImg from '../assets/images/webp/hero-right-img.webp'

const Header = () => {
    return (
        <div className='w-full relative overflow-hidden max-w-[1920px] mx-auto bg-[#FCFBE3]'>
            <img src={heroBgImg} className='absolute right-0 -top-3 custom_xl:max-w-[740px] min-h-[980px] max-custom_xl:hidden' alt="Hero_bg" />
            <img src={heroResponsive} className='absolute right-0 -top-3 hidden max-custom_xl:inline-block max-md:hidden max-w-[538px] h-[396px]' alt="HeroResponsive" />
            <div className='container relative z-10'>
                <a href="#">
                <img src={cafeLogo} className='max-w-[155px] pt-6 max-md:mx-auto' alt="CafeLogo" />
                </a>
                <div className='mt-8 sm:mt-16'>
                    <h2 className='font-normal max-sm:text-center text-6xl sm:text-14xl md:text-18xl lg:text-25xl leading-120 custom_xl:max-w-[640px] max-custom_xl:text-center text-primary'>Join us in building Providence's  <span className='text-secondary'>first ever Cat Cafe!</span></h2>
                    <p className='mt-5 font-inter text-base sm:text-xl font-normal leading-120 text-primary max-custom_xl:text-center custom_xl:max-w-[544px] max-sm:text-center'>Hi there! We are thrilled to introduce ourselves as Cafe Gato, in the process of opening the first cat cafe in Providence, Rhode Island! Your support and enthusiasm will be instrumental in making this dream a reality, and we couldn't be more grateful to have you along for the ride.</p>
                    <img src={thankyouImg} className='max-w-[477px] max-sm:max-w-[320px] w-full mt-8 custom_xl:ml-[67px] max-custom_xl:mx-auto' alt="ThankyouImg" />
                    <img src={heroRightImg} className='max-w-[600px] max-lg:max-w-[493px] max-sm:max-w-[320px] w-full mx-auto mt-6 custom_xl:hidden' alt="HeroRightImg" />
                </div>
            </div>
        </div>
    )
}
export default Header