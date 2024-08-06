import catFootImg from '../assets/images/webp/cat-foot.webp'
import cafeImgOneImg from '../assets/images/webp/cafe-img-one.webp'
import cafeImgTwoImg from '../assets/images/webp/cafe-img-two.webp'
import cafeImgThreeImg from '../assets/images/webp/cafe-img-three.webp'
import cafeImgFourImg from '../assets/images/webp/cafe-img-four.webp'
import cafeImgFiveImg from '../assets/images/webp/cafe-img-five.webp'
import cafeImgSixImg from '../assets/images/webp/cafe-img-six.webp'
import cafeImgSimpleImg from '../assets/images/webp/cafe-img-simple.webp'
import ellipseImg from '../assets/images/webp/cafe-ellipse.webp'

const CafeGato = () => {
    return (
            <div className='pt-20 sm:pt-24 md:pt-[135px] lg:pt-[167px] xl:pt-[200px] relative'>
                <div className="container relative z-10">
                    <div className='flex justify-center'>
                    <img src={cafeImgSimpleImg} className='max-w-[289px] max-sm:max-w-[197px]' alt="CafeImgSimple" />
                    </div>
                    <div>
                        <p className='font-inter font-normal text-md leading-170 text-primary text-center max-w-[756px] mx-auto pt-4 sm:pt-5 pb-8 '>Cat Cafe in Spanish, Cafe Gato is more than just a cafe; it's a sanctuary for both humans and cats. By combining great coffee, a cozy atmosphere, and the joy of feline companionship, we create a unique and fulfilling experience for everyone who walks through our doors. </p>
                        <div className='flex justify-end pb-7 pr-[77px] relative max-lg:hidden'>
                        <img src={catFootImg} className='w-[26px]' alt="Cat_foot" />
                        <img src={catFootImg} className='w-[26px] absolute top-[-337%] left-[131px]' alt="Cat_foot" />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap xxl:justify-between w-full mx-auto'>
                        <div className="w-4/6 lg:w-5/12 px-[3px] sm:px-[6.5px]">
                        <img src={cafeImgOneImg} className='h-full w-full' alt="CafeImgOne" />
                        </div>
                        <div className="w-4/12 lg:w-3/12 px-[3px] sm:px-[6.5px]">
                        <img src={cafeImgTwoImg} className='h-full w-full' alt="CafeImgTwo" />
                        </div>
                        <div className="w-1/2 lg:w-4/12 px-[3px] sm:px-[6.5px] max-sm:pt-[6px] max-lg:pt-[13px]">
                        <img src={cafeImgThreeImg} className='h-full w-full' alt="CafeImgThree" />
                        </div>
                        <div className="w-1/2 lg:w-4/12 px-[3px] sm:px-[6.5px] mt-[6px] sm:mt-[13px]">
                        <img src={cafeImgFourImg} className='h-full w-full' alt="CafeImgFour" />
                        </div>
                        <div className="w-4/6 lg:w-5/12 px-[3px] sm:px-[6.5px] mt-[6px] sm:mt-[13px]">
                        <img src={cafeImgFiveImg} className='h-full w-full' alt="CafeImgFive" />
                        </div>
                        <div className="w-4/12 lg:w-3/12 px-[3px] sm:px-[6.5px] mt-[6px] sm:mt-[13px]">
                        <img src={cafeImgSixImg} className='h-full w-full' alt="CafeImgSix" />
                        </div>
                    </div>
                </div>
            <img src={ellipseImg} className='max-w-[180px] absolute top-[25px] left-0 -z-0 max-lg:hidden' alt="Ellipse" />
            </div>
    )
}
export default CafeGato