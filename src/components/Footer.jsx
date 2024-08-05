import cafeLogo from '../assets/images/webp/cafe-logo.webp'
import instagramImg from '../assets/images/webp/instagram-img.webp'
import facebookImg from '../assets/images/webp/facebook-img.webp'
import pinterImg from '../assets/images/webp/pinter-img.webp'
import youtubeImg from '../assets/images/webp/youtube-img.webp'
import whatsappImg from '../assets/images/webp/whatsapp-img.webp'
import inboxImg from '../assets/images/webp/inbox-img.webp'
import callImg from '../assets/images/webp/call-img.webp'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='mt-20 sm:mt-24 md:mt-[126px] lg:mt-[150px] xl:mt-[227px] bg-primary'>
            <div className="container pt-12">
                <a href="#">
                    <img src={cafeLogo} className='mx-auto max-w-[155px]' alt="CageLogo" />
                </a>
                <div className='max-w-[493px] mx-auto flex items-center gap-4 sm:gap-9 justify-center pt-11 flex-wrap'>
                    <a href="https://www.instagram.com/">
                        <img src={instagramImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="InstagramImg" />
                    </a>
                    <a href="https://www.facebook.com/">
                        <img src={facebookImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="FacebookImg" />
                    </a>
                    <a href="https://www.pinterest.com/">
                        <img src={pinterImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="PinterImg" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img src={youtubeImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="YoutubeImg" />
                    </a>
                    <a href="https://www.whatsapp.com/">
                        <img src={whatsappImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="WhatsappImg" />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img src={inboxImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="InboxImg" />
                    </a>
                    <a href="tel:+18475555555">
                        <img src={callImg} className='w-[38px] h-[38px] hover:shadow-secondary hover:shadow-links_shadow rounded-[50%] transition-all' alt="CallImg" />
                    </a>
                </div>
            </div>
            <div className='bg-[#3D6273] w-full h-[1px] mt-[60px]'></div>
            <div className="container">
                <div className='font-inter font-normal text-base leading-140 text-[#CED7DC] text-center pt-4 pb-2'>©{year} CafeGato | All Rights reserved</div>
            </div>
        </div>
    )
}
export default Footer