import Link from 'next/link';
import React from 'react'
import { Facebook, Instagram, LinkedIn, Mail, Marker, Phone, Twitter } from '../icons';

const Footer = ({triggerCalendly}: {triggerCalendly:()=>void}) => {
  return (
    <>
        <div className='py-12 pb-24 bg-[#1C0335]'>
            <div className="container pb-12">
                <div className='max-w-[900px] mx-auto text-center mb-16'>
                    <h1 className='text-white font-commissioner text-[75px] font-bold leading-[90px] mdMax:text-5xl smMax:text-4xl'>
                        An ecosystem for product Development.
                    </h1>
                    <p className='text-[#E0E0E0] text-[17px] font-normal my-8'>
                        The baseline is the invisible line upon which a line of text rests. In Material Design,
                        the baseline is an important specification in measuring the vertical distance between.
                    </p>
                    <button onClick={triggerCalendly} className='inline-flex text-[17px] font-medium font-commissioner text-white bg-secondary rounded px-8 items-center h-[69px]'>
                        Request An Engineer
                    </button>
                </div>
                <div className="grid grid-cols-3 smMax:grid-cols-1 smMax:gap-y-8 smMax:place-items-start gap-4 border-t border-[#2B0A49] pt-16">
                    <div className='text-[#E0E0E0]'>
                        <img src="/img/logo-white.png" alt="logo" className='max-w-full object-cover h-[45px]' />
                        <div className='flex items-center mt-4 mb-2'>
                            <span className='mr-2'>
                                <Phone />
                            </span>
                            <span>(239) 555-0108</span>
                        </div>
                        <div className='flex items-center mb-2'>
                            <span className='mr-2'>
                                <Mail />
                            </span>
                            <span>kenzi.lawson@example.com</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='mr-2'>
                                <Marker />
                            </span>
                            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-white text-[21px] font-medium font-commissioner mb-4'>Quick Link</h4>
                        <ul className='list-none text-[#E0E0E0]'>
                            <li className='mb-2'>
                                <Link href={"#"}>
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link href={"#"}>
                                    <a>Terms of Service</a>
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link href={"#"}>
                                    <a>FAQs</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='max-w-[260px]'>
                        <h4 className='text-white text-[21px] font-medium font-commissioner mb-4'>Follow Us</h4>
                        <div className="grid grid-cols-4 gap-4 items-center mt-4 cursor-pointer">
                           <div className='w-[51px] h-[51px] rounded-full border-2 border-white border-opacity-20 grid place-items-center hover:bg-primary'>
                                <a href="https://www.facebook.com/">
                                    <Facebook/>
                                </a>
                           </div>
                           <div className='w-[51px] h-[51px] rounded-full border-2 border-white border-opacity-20 grid place-items-center hover:bg-primary'>
                                <a href="https://www.twitter.com/">
                                    <Twitter/>
                                </a>
                           </div>
                           <div className='w-[51px] h-[51px] rounded-full border-2 border-white border-opacity-20 grid place-items-center hover:bg-primary'>
                                <a href="https://www.linkedin.com/">
                                    <LinkedIn/>
                                </a>
                           </div>
                           <div className='w-[51px] h-[51px] rounded-full border-2 border-white border-opacity-20 grid place-items-center hover:bg-primary'>
                                <a href="https://www.instagram.com/">
                                    <Instagram/>
                                </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#2B0A49] py-8 text-center text-[#E0E0E0] font-normal text-[15px]'>
            <p>© Copyright {(new Date()).getFullYear()}. Designed by BM Ashik</p>
        </div>
    </>
  )
}

export default Footer;