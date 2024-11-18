import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Videos() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full my-20 px-4">
      <div className="text-center mx-auto">
        <h1 className="text-3xl font-bold">Videos for You</h1>
        <h1 className="text-2xl pt-2">Based on Your View History</h1>
      </div>

      <div className="flex flex-wrap w-full mt-6 items-center">
        <div className="w-1/12 flex items-center justify-center">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="px-4 py-2 rounded-md border hover:bg-gray-200"
          >
            <IoIosArrowBack />
          </button>
        </div>

        <div className="w-10/12">
          <Slider ref={sliderRef} {...settings}>
            <div className="flex flex-col justify-center p-3">
              <div>
                <iframe
                  className="rounded-lg w-full"
                  width="350"
                  height="230"
                  src="https://www.youtube.com/embed/6xkp--N_p-M?autoplay=1&mute=1&loop=1&playlist=6xkp--N_p-M"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3">
              <div>
                <iframe
                  className="rounded-lg w-full"
                  width="350"
                  height="230"
                  src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=1&loop=1&playlist=4jnzf1yj48M&si=jpcZhUzLK-ZxwDmK"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3">
              <div>
                <iframe
                  className="rounded-lg w-full"
                  width="350"
                  height="230"
                  src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&mute=1&loop=1&playlist=4jnzf1yj48M&si=jpcZhUzLK-ZxwDmK"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Slider>
        </div>

        <div className="w-1/12 flex items-center justify-center">
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="px-4 py-2 rounded-md border hover:bg-gray-200"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
