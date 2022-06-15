import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Faq } from '../components/Faq'
import { Footer } from '../components/Footer'
import { ArrowRight } from '../components/icons'
import Close from '../components/icons/Close'
import Menu from '../components/icons/Menu'
import { Review } from '../components/Review'
import { Tabs } from '../components/Tabs'

interface CalendlyType {
  showPopupWidget: (props: Record<string, any>) => void;
  initInlineWidget: (props: Record<string, any>) => void;
  initBadgeWidget: (props: Record<string, any>) => void;
  initPopupWidget: (props: Record<string, any>) => void;
};

declare const Calendly : CalendlyType;

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const triggerCalendly = () => {
    Calendly.initPopupWidget({ 
      url: 'https://calendly.com/mutaleb/30min', 
      width: '100%',
      height: '100%'
    });
  }
  return (
    <>
      <div className={`backdrop ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      </div>
      <div className='py-4 relative bg-gradient-2 pb-12 xl:bg-center lg:bg-y-bottom'>
        <div className="container z-10 relative">
          <div className="flex items-center justify-between">
            <div className='h-[45px]'>
              <img src={"/img/logo-1.png"} className="max-w-full" />
            </div>
            <div className={`flex lg:items-center lg:justify-between xl:w-[33%] lg:w-[40%] mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <Link href={"#"}>
                <a className='text-[17px] text-gray-400 font-commissioner font-medium'>Join as Expert</a>
              </Link>
              <Link href={"#"}>
                <a className='text-[17px] text-gray-400 font-commissioner font-medium'>Engineers</a>
              </Link>
              <Link href={"#"}>
                <a className='text-[17px] text-gray-400 font-commissioner font-medium'>Startup Community</a>
              </Link>
              <Link href={"#"}>
                <a className='text-[17px] text-gray-400 font-commissioner font-medium mr-8 hidden mdMax:block'>Login</a>
              </Link>
              <div className="items-center flex-col mt-auto hidden mdMax:flex">
                <Link href={"#"}>
                  <a className='inline-flex w-full justify-center text-[15px] font-semibold font-commissioner text-white bg-primary rounded px-8 items-center h-[53px]'>
                    Get Started
                  </a>
                </Link>
              </div>
              <button className="absolute top-2 right-2 hidden mdMax:block" onClick={toggleMenu}>
                <Close />
              </button>
            </div>
            <div className="lg:flex items-center hidden">
              <Link href={"#"}>
                <a className='text-[17px] text-gray-400 font-commissioner font-medium mr-8'>Login</a>
              </Link>
              <Link href={"#"}>
                <a className='inline-flex shadow-md shadow-primary text-[15px] font-semibold font-commissioner text-white bg-primary rounded px-8 items-center h-[53px]'>
                  Get Started
                </a>
              </Link>
            </div>
            <button className="ml-auto hidden mdMax:block" onClick={toggleMenu}>
              <Menu />
            </button>
          </div>
        </div>
        <div className="container">
          <div className="max-w-[973px] mx-auto text-center lg:pt-[150px] mdMax:pt-[80px] xl:pb-[420px] lg:pb-[250px] mdMax:pb-[200px] smMax:pb-[140px]">
            <h1 className='font-commissioner font-semibold text-[#1D243C] xl:text-[51px] lg:text-4xl sm:text-3xl text-2xl lg:leading-[68px]'>
              We Help businesses cut down engineering
              cost while improving productivity
            </h1>
            <p className='text-[#5B7082] text-xl font-commissioner font-normal leading-8 my-8 max-w-[858px] mx-auto'>
              FeroTech connects businesses with highly skilled managed offshore
              engineering teams while keeping cost very low
            </p>
            <button onClick={triggerCalendly} className='inline-flex shadow-md shadow-primary text-[15px] font-semibold font-commissioner text-white bg-primary rounded px-8 items-center h-[53px]'>
              Request An Engineer
            </button>
          </div>
        </div>
      </div>

      <div className='bg-white py-12'>
        <div className="container">
          <div className="text-center max-w-[980px] mx-auto">
            <h2 className='font-medium text-4xl text-primary-black tracking-[0.0025em] leading-[54px] mdMax:text-3xl smMax:text-2xl'>
              Supercharge your Product team
              <span className='text-[#C4C4C4] mx-2 tracking-[0.0025em]'>
                with the best talents
                and start
              </span> building without stress and keep cost low
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 mdMax:grid-cols-2 smMax:grid-cols-1">
            <div className='bg-[#8838C6] bg-opacity-[0.06] w-full p-6 pb-0 rounded-[15px] shadow-md'>
              <div className='w-[50px] h-[50px] rounded-full grid place-items-center  font-medium text-2xl bg-[#8838C6] text-[#8838C6] bg-opacity-20'>
                1
              </div>
              <h3 className='font-medium text-[25px] font-commissioner text-primary-black my-4'>Tell us what your needs.</h3>
              <p className='font-normal font-commissioner text-[17px] text-[#3F4959] text-opacity-80'>
                The baseline is the invisible line upon which line of text rests. In Material Design, the baseline is an important.
              </p>
              <img src="/img/section-img-1.png" alt="section-img" className='max-w-full object-cover mt-6' />
            </div>

            <div className='bg-[#FFFBF2] bg-opacity-[0.06] w-full p-6 pb-0 rounded-[15px] shadow-md'>
              <div className='w-[50px] h-[50px] rounded-full grid place-items-center  font-medium text-2xl bg-secondary text-secondary bg-opacity-20'>
                2
              </div>
              <h3 className='font-medium text-[25px] font-commissioner text-primary-black my-4'>
                We build the team
              </h3>
              <p className='font-normal font-commissioner text-[17px] text-[#3F4959] text-opacity-80'>
                The baseline is the invisible line upon which line of text rests. In Material Design, the baseline is an important.
              </p>
              <img src="/img/section-img-2.png" alt="section-img" className='max-w-full object-cover mt-6' />
            </div>
            <div className='bg-[#FF6B82] bg-opacity-[0.06] w-full p-6 pb-0 rounded-[15px] shadow-md'>
              <div className='w-[50px] h-[50px] rounded-full grid place-items-center font-medium text-2xl bg-[#FF6B82] text-[#FF6B82] bg-opacity-20'>
                3
              </div>
              <h3 className='font-medium text-[25px] font-commissioner text-primary-black my-4'>
                Watch us deliver
              </h3>
              <p className='font-normal font-commissioner text-[17px] text-[#3F4959] text-opacity-80'>
                The baseline is the invisible line upon which line of text rests. In Material Design, the baseline is an important.
              </p>
              <img src="/img/section-img-3.png" alt="section-img" className='max-w-full object-cover mt-6' />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 team-bg">
        <div className="container mb-12">
          <div className="text-center max-w-[550px] mx-auto">
            <h2 className='font-medium text-4xl text-primary-black tracking-[0.0025em] leading-[54px] mdMax:text-3xl smMax:text-2xl'>
              We are good at what we do
            </h2>
            <p className='text-[#5B7082] text-[17px] font-normal'>
              Get seasoned offshore developers without breaking the bank. We train and manage our engineers and hence relieve you of
              the recruitment hassle
            </p>
          </div>

          <div className="grid gap-4 grid-cols-4 mt-8 border-b-2 border-[#E0E0E0] border-opacity-50 pb-10 mdMax:grid-cols-2 smMax:grid-cols-1">
            <div className="relative">
              <div className="h-[350px] relative border border-[#F2F2F2] bg-[#FC6A5A] bg-opacity-20 grid items-end justify-center rounded-lg">
                <img src="/img/team-1.png" alt="team" className='max-w-full object-cover h-[297px]' />
                <div className="absolute bg-white w-[85px] h-[36px] rounded-full grid place-items-center bottom-2 right-2">
                  <img src="/img/google.png" alt="google" className="max-w-full object-cover" />
                </div>
              </div>
              <div className='text-[21px] text-primary-black font-semibold font-commissioner mt-3'>
                Nathaniel Julian
                <span className='text-[#5B7082] font-normal text-base'>/Software Engineer</span>
              </div>
            </div>

            <div className="relative">
              <div className="h-[350px] relative border border-[#F2F2F2] bg-[#FC6A5A] bg-opacity-20 grid items-end justify-center rounded-lg">
                <img src="/img/team-2.png" alt="team" className='max-w-full object-cover h-[297px]' />
                <div className="absolute bg-white w-[85px] h-[36px] rounded-full grid place-items-center bottom-2 right-2">
                  <img src="/img/microsoft.png" alt="google" className="max-w-full object-cover" />
                </div>
              </div>
              <div className='text-[21px] text-primary-black font-semibold font-commissioner mt-3'>
                Nathaniel Julian
                <span className='text-[#5B7082] font-normal text-base'>/Software Engineer</span>
              </div>
            </div>

            <div className="relative">
              <div className="h-[350px] relative border border-[#F2F2F2] bg-[#FC6A5A] bg-opacity-20 grid items-end justify-center rounded-lg">
                <img src="/img/team-3.png" alt="team" className='max-w-full object-cover h-[297px]' />
                <div className="absolute bg-white w-[85px] h-[36px] rounded-full grid place-items-center bottom-2 right-2">
                  <img src="/img/slack.png" alt="google" className="max-w-full object-cover" />
                </div>
              </div>
              <div className='text-[21px] text-primary-black font-semibold font-commissioner mt-3'>
                Nathaniel Julian
                <span className='text-[#5B7082] font-normal text-base'>/Software Engineer</span>
              </div>
            </div>

            <div className="relative">
              <div className="h-[350px] relative border border-[#F2F2F2] bg-[#FC6A5A] bg-opacity-20 grid items-end justify-center rounded-lg">
                <img src="/img/team-4.png" alt="team" className='max-w-full object-cover h-[297px]' />
                <div className="absolute bg-white w-[85px] h-[36px] rounded-full grid place-items-center bottom-2 right-2">
                  <img src="/img/amazon.png" alt="google" className="max-w-full object-cover" />
                </div>
              </div>
              <div className='text-[21px] text-primary-black font-semibold font-commissioner mt-3'>
                Nathaniel Julian
                <span className='text-[#5B7082] font-normal text-base'>/Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
      <Review />
      <Faq />
      <div className="py-24 bg-white">
        <div className="container">
          <div className='max-w-[1438px] mx-auto news-latter-bg px-14 mdMax:px-4 smMax:py-4'>
            <div className="flex items-center justify-between md:h-[214px] smMax:h-auto smMax:flex-col">
              <div className="flex items-center">
                <img src="/img/news.png" alt="news-latter-icon" className="max-w-full object-cover" />
                <h2 className='text-white ml-8 font-sans font-bold text-[25.8475px] mdMax:ml-4 mdMax:text-lg'>Subcribe to our Newsletter</h2>
              </div>
              <div className="flex items-center relative w-[590px] mdMax:w-[60%] max-w-[590px] smMax:max-w-full smMax:w-full smMax:mt-4 h-[79.74px]">
                <input type="text" className="w-full h-full rounded-full border-none px-4 py-2 bg-[#ECECEC] focus:outline-none inline-flex" placeholder="Enter your email address" />
                <button className="bg-secondary text-white h-[66.45px] rounded-full px-4 py-2 absolute right-2 top-1.7 font-sans font-bold text-[19px] mdMax:text-base smMax:px-2 flex items-center">
                  <span className="text-white mr-6 mdMax:mr-4">Subscribe</span>
                  <div className='w-[44px] h-[47px] bg-white text-secondary grid place-items-center text-base rounded-full'>
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer triggerCalendly={triggerCalendly}/>
    </>
  )
}

export default Home
