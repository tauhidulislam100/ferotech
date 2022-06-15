import React from 'react'
import Collapse from './Collapse';

const Faq = () => {
  return (
    <div className='py-12 faq-bg'>
        <div className="container">
            <div className="grid grid-cols-2 gap-4 max-w-[1201.12px] mx-auto items-start smMax:grid-cols-1">
                <div className='smMax:order-2 mdMax:place-items-center'>
                    <img src="/img/faq-hands.png" alt="hands" className='max-w-full object-cover' />
                </div>
                <div className='smMax:order-1 smMax:text-center smMax:mb-8'>
                    <h2 className='text-[51px] font-semibold text-primary-black font-commissioner leading-[65px] mb-3 mdMax:text-3xl'>Frequently Asked Questions?</h2>
                    <p className='text-[17px] font-normal text-gray-400 font-commissioner mb-6'>
                        The baseline is the invisible line upon which a line of text rests. In Material Design, 
                        the baseline is an important specification in measuring the vertical distance between.
                    </p>
                    <div className="flex items-center smMax:justify-center">
                        <div className='flex -space-x-3'>
                            <div className='bg-[#F8F5F5] border-2 border-white w-[50px] h-[50px] rounded-full grid place-items-center overflow-hidden'>
                                <img src="/img/avatar-3.png" alt="avatar" className='object-cover max-w-full w-full h-full'/>
                            </div>
                            <div className='bg-[#F8F5F5] border-2 border-white w-[50px] h-[50px] rounded-full grid place-items-center overflow-hidden'>
                                <img src="/img/avatar-2.png" alt="avatar" className='object-cover max-w-full w-full h-full'/>
                            </div>
                            <div className='bg-[#F8F5F5] border-2 border-white w-[50px] h-[50px] rounded-full grid place-items-center overflow-hidden'>
                                <img src="/img/avatar-1.png" alt="avatar" className='object-cover max-w-full w-full h-full'/>
                            </div>
                        </div>
                        <h4 className='ml-4 text-[15px] font-medium text-gray-400'>Support Team</h4>
                    </div>
                </div>
            </div>
            <div className="mt-2 max-w-[1010px] mx-auto relative -top-10 mdMax:top-0 mdMax:mt-10">
                <Collapse
                    title='How is Gworo Different?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='How do you screen and qualify experts on Gworo?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='How does Gworo handle the legal standpoint with respect to talents and IP protection?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='How do you screen and qualify experts on Gworo?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='How does Gworo charge startups?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='What methods of payment do you accept?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
                <Collapse
                    title='How do you screen and qualify experts on Gworo?'
                    content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
                />
            </div>
        </div>
    </div>
  )
}

export default Faq;