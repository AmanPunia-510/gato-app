import CatFoot from '../assets/images/webp/CatFoot.webp'
import CafeImgOne from '../assets/images/webp/CafeImgOne.webp'
import CafeImgTwo from '../assets/images/webp/CafeImgTwo.webp'
import CafeImgThree from '../assets/images/webp/CafeImgThree.webp'
import CafeImgFour from '../assets/images/webp/CafeImgFour.webp'
import CafeImgFive from '../assets/images/webp/CafeImgFive.webp'
import CafeImgSix from '../assets/images/webp/CafeImgSix.webp'
import CafeImgSimple from '../assets/images/webp/CafeImgSimple.webp'
import Ellipse from '../assets/images/webp/CafeEllipse.webp'
const CafeGato = () => {
    return (
            <div className='pt-20 sm:pt-24 md:pt-[135px] lg:pt-[167px] xl:pt-[257px] relative'>
                <div className="container relative z-10">
                    <div className='flex justify-center'>
                    <img src={CafeImgSimple} className='max-w-[289px] max-sm:max-w-[197px]' alt="CafeImgSimple" />
                    </div>
                    <div>
                        <p className='font-inter font-normal text-md leading-170 text-primary text-center max-w-[756px] mx-auto pt-4 sm:pt-5 pb-8 '>Cat Cafe in Spanish, Cafe Gato is more than just a cafe; it's a sanctuary for both humans and cats. By combining great coffee, a cozy atmosphere, and the joy of feline companionship, we create a unique and fulfilling experience for everyone who walks through our doors. </p>
                        <div className='flex justify-end pb-7 pr-[77px] relative max-lg:hidden'>
                        <img src={CatFoot} className='w-[26px]' alt="Cat_foot" />
                        <img src={CatFoot} className='w-[26px] absolute top-[-337%] left-[131px]' alt="Cat_foot" />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap xxl:justify-between w-full mx-auto'>
                        <div className="w-full sm:w-4/6 lg:w-5/12 px-[6.5px]">
                            <img src={CafeImgOne} className='h-full w-full' alt="CafeImgOne" />
                        </div>
                        <div className="w-full sm:w-4/12 lg:w-3/12 px-[6.5px] max-sm:pt-[13px]">
                            <img src={CafeImgTwo} className='h-full w-full' alt="CafeImgTwo" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-4/12 px-[6.5px] max-lg:pt-[13px]">
                            <img src={CafeImgThree} className='h-full w-full' alt="CafeImgThree" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-4/12 px-[6.5px] mt-[13px]">
                            <img src={CafeImgFour} className='h-full w-full' alt="CafeImgFour" />
                        </div>
                        <div className="w-full sm:w-4/6 lg:w-5/12 px-[6.5px] mt-[13px]">
                            <img src={CafeImgFive} className='h-full w-full' alt="CafeImgFive" />
                        </div>
                        <div className="w-full sm:w-4/12 lg:w-3/12 px-[6.5px] mt-[13px]">
                            <img src={CafeImgSix} className='h-full w-full' alt="CafeImgSix" />
                        </div>
                    </div>
                </div>
                <img src={Ellipse} className='max-w-[192px] absolute top-[44px] left-0 -z-0 max-lg:hidden' alt="Ellipse" />
            </div>
    )
}
export default CafeGato