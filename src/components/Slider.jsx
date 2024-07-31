import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cleaness from '../assets/images/webp/Cleaness-min.webp'
import Cross from '../assets/images/webp/Cross-min.webp'
import Safety from '../assets/images/webp/Safety-min.webp'
import Prev_Arrow from '../assets/images/png/PrevArrow.png'
import Next_Arrow from '../assets/images/png/NextArrow.png'
import Thankyou from '../assets/images/webp/ThankyouBg-min.webp'

export default function SimpleSlider() {

    const ThankyouBg = {
        backgroundImage: `url(${Thankyou})`
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='next absolute right-[-100px] cursor-pointer top-[50%] translate-y-[-50%] md:block hidden !z-10 w-[50px] max-xl:!hidden' onClick={onClick}>
                <img src={Next_Arrow} className="hover:shadow-md" alt="PrevArrow" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='prev absolute cursor-pointer left-[-100px] top-[50%] translate-y-[-50%] md:block hidden !z-10 w-[50px] max-xl:!hidden' onClick={onClick}>
                <img src={Prev_Arrow} className="hover:shadow-md" alt="PrevArrow" />
            </div>
        );
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    return (
        <section className="pt-20 sm:pt-24 md:pt-[126px] lg:pt-[150px] xl:pt-[227px] relative">
            <div className="container relative">
                <h2 className='font-norwester font-normal text-6xl sm:text-12xl leading-130 text-primary text-center pb-4 lg:pb-16'>Addressing Common Concerns</h2>
                <div className="max-w-[919px] w-full mx-auto">
                    <Slider {...settings} className="h-fit">
                        <div className="h-full pb-6">
                            <div className="max-sm:min-h-[1096px] max-md:min-h-[554px] max-lg:min-h-[498px] border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe h-full p-8 pb-[107px]">
                                <img src={Cleaness} className="w-[88px] mx-auto" alt="Cleaness" />
                                <h2 className="font-norwester font-normal text-6xl leading-130 text-primary text-center">Cleanliness</h2>
                                <p className="font-inter font-normal text-md leading-160 text-primary text-center max-w-[711px] mx-auto pt-5">At Cafe Gato, we will maintain the highest standards of cleanliness. Our cafe and separate cat lounge will be regularly cleaned and sanitized to ensure a safe and pleasant environment for both our guests and our resident cats. We will have dedicated staff members to ensure that litter boxes are discreetly placed and frequently cleaned and that the dining area is kept separate from the cat lounge.</p>
                            </div>
                        </div>

                        <div className="h-full pb-6">
                            <div className="max-sm:min-h-[1096px] max-md:min-h-[554px] max-lg:min-h-[498px] border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe p-8 h-full pb-[107px]">
                                <img src={Safety} className="max-w-[88px] mx-auto" alt="Safety" />
                                <h2 className="font-norwester font-normal text-6xl leading-130 text-primary text-center">Safety</h2>
                                <p className="font-inter font-normal text-md leading-160 text-primary text-center max-w-[711px] mx-auto pt-5">The safety of our guests and cats will be our top priority. All of our cats will be vaccinated, spayed/neutered, and regularly checked by veterinarians. We will also have protocols to ensure positive and stress-free interactions between guests and cats. Our staff will be trained to handle any situations that may arise and to provide guidance on how to interact with the cats appropriately.</p>
                            </div>
                        </div>

                        <div className="h-full pb-6">
                            <div className="max-sm:min-h-[1096px] max-md:min-h-[554px] max-lg:min-h-[498px] border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe p-8 h-full">
                                <img src={Cross} className="max-w-[88px] mx-auto" alt="Cleaness" />
                                <h2 className="font-norwester font-normal text-6xl leading-130 text-primary text-center">Cross-Contamination of Food</h2>
                                <p className="font-inter font-normal text-md leading-160 text-primary text-center max-w-[711px] mx-auto pt-5">Ensuring the safety and hygiene of our food offerings is paramount. At Cafe Gato, the cafe area and the cat lounge will be completely separated to prevent any cross-contamination. The dining area where food and beverages are prepared and served will be strictly off-limits to the cats. A physical barrier will be in place to ensure that cats remain in their designated lounge area, where guests can interact with them after enjoying their food and drinks. Our kitchen will follow rigorous health and safety standards, including frequent sanitization and adherence to local health regulations. This setup allows us to provide a safe and enjoyable experience for both our human guests and our feline residents.</p>
                            </div>
                        </div>

                        <div className="h-full pb-6">
                            <div className="max-sm:min-h-[1096px] max-md:min-h-[554px] max-lg:min-h-[498px] border-[4px] border-solid border-primary rounded-xl shadow-cate_cafe p-8 h-full pb-[107px]">
                                <img src={Cleaness} className="max-w-[88px] mx-auto" alt="Cleaness" />
                                <h2 className="font-norwester font-normal text-6xl leading-130 text-primary text-center">Cleanliness</h2>
                                <p className="font-inter font-normal text-md leading-160 text-primary text-center max-w-[711px] mx-auto pt-5">At Cafe Gato, we will maintain the highest standards of cleanliness. Our cafe and separate cat lounge will be regularly cleaned and sanitized to ensure a safe and pleasant environment for both our guests and our resident cats. We will have dedicated staff members to ensure that litter boxes are discreetly placed and frequently cleaned and that the dining area is kept separate from the cat lounge.</p>
                            </div>
                        </div>
                    </Slider>
                    <p className="font-inter font-normal text-center mx-auto max-w-[934px] leading-160 text-primary text-md pt-8">We are committed to providing a high-quality experience at Cafe Gato. Our focus on cleanliness, safety, and the well-being of our guests and cats will ensure everyone can enjoy their time at our cafe without any worries. We aim to build confidence and trust in our mission and operations by addressing these concerns head-on.</p>
                </div>

                <div className="pt-12 p-8 border-[4px] border-solid border-primary shadow-cate_cafe rounded-xl bg-center bg-cover bg-no-repeat mt-20 sm:mt-24 md:mt-[126px] lg:mt-[125px]        cursor-pointer" style={ThankyouBg}>
                    <h2 className="font-norwester font-normal text-4xl sm:text-7xl lg:text-12xl leading-130 text-center text-white max-w-[771px] mx-auto">Thank you again for your support. Together, we are building something truly special for our community😺</h2>
                    <div className="max-w-[159px] mx-auto pt-6">
                        <h2 className="font-normal font-norwester text-xl leading-130 text-white text-center">Warmest regards,</h2>
                        <p className="text-center font-inter font-normal leading-130 text-white text-xl pt-1">Max & Kaylin</p>
                        <p className="text-center font-inter font-normal leading-130 text-white text-xl pt-1">Cafe Gato</p>
                    </div>
                </div>
            </div>
        </section>
    );
}