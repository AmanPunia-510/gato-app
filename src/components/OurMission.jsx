import missionImg from '../assets/images/webp/mission-img.webp'
import missionCatImg from '../assets/images/webp/mission-cat.webp'
import missionBgImg from '../assets/images/webp/mission-bg.webp'
import missionMdImg from '../assets/images/webp/mission-md.webp'
import missionEllipseImg from '../assets/images/webp/mission-ellipse.webp'

const OurMission = () => {
    return (
        <div className='pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[223px] relative'>
            <div className='max-w-[1115px] w-full mx-auto px-6 relative z-20'>
                <div className='flex flex-wrap flex-row mx-auto w-full lg:items-end items-center max-lg:gap-14 max-lg:flex-col-reverse max-sm:gap-7'>
                    <div className="w-full lg:w-5/12 px-[9px] max-lg:flex max-lg:justify-center">
                        <img src={missionImg} className='w-full max-lg:hidden' alt="MissionImg" />
                        <img src={missionMdImg} className='w-full lg:hidden max-w-[580px] max-lg:max-w-[515px] max-sm:max-w-[320px]' alt="Mission_Img" />
                    </div>
                    <div className="w-full lg:w-7/12 px-[9px]">
                        <h2 className='font-normal text-6xl sm:text-12xl leading-130 text-primary pb-2 lg:pb-5 max-lg:text-center'>OUR MISSION</h2>
                        <p className='font-inter font-normal text-base leading-160 text-primary max-lg:text-center'>Cafe Gato, the first cat cafe in Providence, was founded with the mission to bring a community of coffee lovers together, one cup at a time, while fostering the well-being of our guests and cats, one adoption at a time. Cafe Gato’s purpose is to alleviate the over-crowdedness of animal shelters to allow for more cats to be rescued and increase the potential of adoptability within the feline community, as well as boost mental well-being of those in our community who are feeling the stress of everyday life. Our core values are  d around our community, making a difference, and the quality of our services and products.</p>
                        <img src={missionCatImg} className='w-[118px] mt-9 max-lg:hidden' alt="MissionCat" />
                    </div>
                </div>
            </div>
            <img src={missionBgImg} className='absolute right-0 top-[221px] z-0 max-w-[930px] h-[575px] w-full pointer-events-none' alt="Mission_Bg" />
            <img src={missionEllipseImg} className=' absolute left-0 bottom-12 max-lg:hidden pointer-events-none' alt="MissionEllipse" />
        </div>
    )
}
export default OurMission