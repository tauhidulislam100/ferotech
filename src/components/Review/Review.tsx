import React, {useId} from 'react'
import Slider from "react-slick";
import { Star } from '../icons';

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const reviews = [
    {
        avatar: '/img/avatar-1.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-2.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-3.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-1.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-2.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-3.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-1.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-2.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
    {
        avatar: '/img/avatar-3.png', 
        name: 'Nathaniel Julian', 
        position: 'Engineer', 
        review: `“The baseline is the invisible line upon which line of text rests. 
        In Material Design, the baseline. of text rests. In Material Design, the baseline.”`
    },
];

const Review = () => {
  return (
    <div className='bg-white py-12'>
        <div className="container">
            <div className="text-center max-w-[389px] mx-auto mb-8">
                <h2 className='font-medium text-4xl text-primary-black tracking-[0.0025em] leading-[54px]'>
                    What people are saying 
                    about
                    <span className='text-[#BDBDBD] ml-2'>Ferotech</span> 
                </h2>
            </div>
            <Slider {...settings} >
                {reviews.map((review) => (
                    <div className='bg-primary bg-opacity-[0.03] rounded-md p-4 py-8 slider-item' key={useId()}>
                        <img src={review.avatar} className='object-cover w-[60px] h-[60px] rounded-full mb-4'/>
                        <h3 className='text-[21px] text-primary-black font-semibold font-commissioner'>{review.name}</h3>
                        <p className='text-[#5B7082] font-normal text-base font-commissioner mt-1 mb-3'>{review.position}</p>
                        <p className='text-[17px] text-[#5B7082] font-commissioner font-normal'>
                          {review.review}
                        </p>
                        <div className="grid grid-cols-5 gap-2 items-center text-secondary w-[100px] mt-4">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="text-center  mt-12">
                <h2 className='font-medium text-[21px] text-[#BDBDBD]'>
                    Join founders backed by
                </h2>
            </div>
            <div className="grid grid-cols-4 mdMax:grid-cols-2 smMax:grid-cols-1 smMax:justify-items-center gap-4 mx-auto max-w-[1104.54px] place-items-center my-8">
                <img src="/img/backer-logo-1.png" alt="backer" className="max-w-full object-cover" />
                <img src="/img/backer-logo-2.png" alt="backer" className="max-w-full object-cover" />
                <img src="/img/backer-logo-3.png" alt="backer" className="max-w-full object-cover" />
                <img src="/img/backer-logo-4.png" alt="backer" className="max-w-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Review