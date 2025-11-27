"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

const ImageSlider = ({ images }: { images: string[] }) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: (images?.length || 0) > 1,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        pauseOnFocus: true,
        adaptiveHeight: true,
        cssEase: "ease-out",
        accessibility: true,
    };

    return (
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            <Slider {...settings}>
                {images?.map((image, index) => {
                    return (
                        <div key={index} className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={image}
                                alt="image"
                                width={1200}
                                height={600}
                                className="w-full h-auto max-h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ImageSlider