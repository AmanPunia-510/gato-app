import catCafeImg from '../assets/images/webp/cat-cafe-img.webp'
import catFootImg from '../assets/images/webp/cat-foot.webp'
import catCafeEllipse from '../assets/images/webp/cat-cafe-ellipse.webp'

const CatCafe = () => {
    return (
        <div className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[200px] w-full relative'>
            <div className="container">
                <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-14'>What is a <span className='text-secondary'> Cat Cafe?</span></h2>
                <div className='p-3 sm:p-6 border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe relative'>
                    <div className='flex flex-wrap flex-row mx-auto w-full items-center relative max-lg:flex-col-reverse max-lg:gap-7'>
                        <div className="w-full lg:w-7/12">
                            <p className='font-inter font-normal text-base text-primary leading-160 max-lg:text-center'>A cat cafe is a unique establishment where guests can enjoy their favorite beverages in the company of friendly, adoptable cats. It's a place where people can relax, socialize, and experience the therapeutic benefits of spending time with cats. Cat cafes serve as a bridge between animal shelters and the community, providing a home-like environment for cats to socialize and meet potential adopters.</p>
                            <img src={catFootImg} className='w-[26px] absolute bottom-0 left-0 z-0' alt="CatFoot" />
                        </div>
                        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
                            <img src={catCafeImg} className='w-full max-w-[413px]' alt="CatCafe" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={catCafeEllipse} className='absolute right-0 top-[165px] -z-0 max-lg:hidden pointer-events-none' alt="CatCafeEllipse" />
        </div>
    )
}
export default CatCafe