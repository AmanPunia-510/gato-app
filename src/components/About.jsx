import aboutBg from '../assets/images/webp/about-bg.webp'
const About = () => {
    return (
        <div className='pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px]'>
            <div className="container">
                <div className='flex flex-row flex-wrap mx-auto w-full items-center max-lg:gap-7'>
                    <div className="w-full lg:w-1/2 pr-3">
                        <h2 className='font-normal max-lg:text-center text-6xl lg:text-12xl leading-130 text-primary pb-2 sm:pb-4 lg:pb-5'>ABOUT US</h2>
                        <p className='font-inter font-normal text-base leading-160 text-primary max-w-[575px] max-lg:text-center max-lg:mx-auto'>The idea of Cafe Gato came to life in October of 2023 when the husband and wife duo, Max and Kaylin, were on their way to a wedding in Michigan and came across Happy Cat Cafe, a cat cafe in Grand Rapids. Max, originally from Cuba and having moved to the US about eight years ago, and Kaylin, a passionate Rhode Islander, adopted their dog Kirby during the pandemic in 2020 and developed a deep love for shelter animals and the mission of adoption. After their positive experience at Happy Cat Cafe, enjoying coffee in the presence of cats, they both had the same question: why is there nothing like this in Providence yet? Thus, the idea of Cafe Gato was born.</p>
                    </div>
                    <div className="w-full lg:w-1/2 pl-3 flex justify-center lg:justify-end">
                        <img src={aboutBg} className='max-w-[489px] max-sm:max-w-[320px] w-full' alt="AboutBg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About