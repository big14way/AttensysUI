import React from "react"

import videoHero from "../../assets/video.svg"
import CarouselComp from "./Carousel"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GiBackwardTime } from "@react-icons/all-files/gi/GiBackwardTime"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import { useRouter } from "next/navigation"
import { handleCourse } from "@/utils/helpers"
import { skills, subLectures } from "@/constants/data"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import StarRating from "../bootcamp/StarRating"
import { LuBadgeCheck } from "react-icons/lu";

const Explore = () => {
  const router = useRouter()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 820 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 820, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      {/* Hero component */}
      <div>
        <div
          className={`bg-[url('/hero_asset.png')] space-y-4 text-white px-12 sm:px-28 py-10 sm:py-20 from-orange-400 via-red-500 to-pink-500 h-64`}
        >
          {/* Hero lettering */}
          <h1 className="w-[90%] sm:w-5/12 font-bold text-2xl sm:text-4xl">
            Continuous learning is the key to success - upskill with us
          </h1>
          <p className="w-[90%] sm:w-1/2">
            With Attensys, all you need is your address to prove your
            certification. Welcome to the future{" "}
          </p>
        </div>
      </div>

      {/* skills  */}
      <div className="mx-12 my-16 hidden sm:flex flex-row justify-center">
        {skills.map((item, index) => (
          <p className="bg-[#2D3A4B] p-6 text-white" key={index}>
            {item}
          </p>
        ))}
      </div>

      <div className="block sm:hidden text-center mx-12 relative bottom-4">
        <Carousel responsive={responsive}>
          {skills.map((item, index) => (
            <p className="bg-[#2D3A4B] p-6 text-white" key={index}>
              {item}
            </p>
          ))}
        </Carousel>
      </div>

      {/* what to learn next */}
      <div className="mx-12 sm:mx-28">
        <div className="">
          {/* upper */}
          <div className="my-4">
            {/* wording */}
            <h3 className="text-[25px] font-bold text-[#2D3A4B]">What to learn next</h3>
            <p className="font-light text-xl text-[#2D3A4B]">
              Because you viewed{" "}
              <span className="text-[#5801A9] font-bold underline">
                “Introduction to Web Dev Starknet”
              </span>
            </p>
          </div>

          {/* cards  */}
          {/* <div className="mx-12 sm:mx-0"> */}
          <CarouselComp />
          {/* </div> */}
        </div>

        {/* below */}
        <div className="flex sm:flex justify-start my-24 h-[307px]">
          {/* left */}
          <div className="flex space-x-10 sm:flex sm:mx-0 justify-top">
            <div className="h-full w-[600px] rounded-xl">
              <Image src={videoHero} alt="video" className="object-cover h-full w-full rounded-xl" />
            </div>
            <div className="my-4 sm:my-0">
              <div>
                <div
                  onClick={(e) =>
                    handleCourse(e, e.currentTarget.textContent, router)
                  }
                >
                  <button className="bg-[#2D3A4B] hover:bg-gray-500 text-white text-[11px] font-bold py-2 px-4 rounded cursor-pointer">
                    Get this course
                  </button>
                  <h2 className="font-bold text-[32px] sm:text-4xl text-[#2D3A4B] sm:w-4/6 tracking-wide my-4 cursor-pointer">
                    Introduction to Web Development
                  </h2>
                </div>
                <p className="text-white items-center inline gap-2 text-sm bg-[#5801A9] rounded p-2">
                  Tech Innovators Academy
                </p>
                {/* rating and num of students */}
                <div className="sm:flex flex space-x-28  items-center my-4">
                  <div className="flex items-center space-x-4">
                    <StarRating totalStars={5} starnumber={4} />
                    <p className="font-bold text-[13px] text-[#2D3A4B] leading-[15px]">(281)</p>
                  </div>

                  <div className="flex items-center mx-0 sm:mx-8 space-x-2">
                    <LuBadgeCheck color="#2D3A4B h-[19px] w-[19px]" />
                    <p className="font-bold text-[13px] text-[#2D3A4B] leading-[15px]">291 certification</p>
                  </div>
                </div>

                {/* creator and last update */}
                <div className="flex space-x-14 sm:flex sm:text-center my-1">
                  <div>
                    <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">
                      Created by{" "}
                      <span className="underline">Akinbola Kehinde</span>
                    </p>
                  </div>

                  <div className="flex ml-0 sm:ml-5 items-center  space-x-1">
                    <GiBackwardTime />
                    <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">Last updated 10|10|24</p>
                  </div>
                </div>

                {/* video prop */}
                <div className="block sm:flex space-x-10">
                  <div className="flex my-1 space-x-2 items-center">
                    <FaPlay className="h-[11px] w-[11px] text-[#5801A9]"/>
                    <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">Total play time: 2 hrs 35 mins</p>
                  </div>
                  <div className="flex sm:ml-5 space-x-2 items-center">
                    <GrDiamond color="#2D3A4B" className="h-[11px] w-[11px]" />
                    <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">Difficulty level: Elementary</p>
                  </div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div>
                    <LuBadgeCheck className="h-[11px] w-[11px] text-[#5801A9]" />
                  </div>
                  <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">Certificate of Completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex sm:block w-[32%] h-[307px] overflow-y-scroll ">
            <div className="flex justify-between border-b-2 pb-3">
              <h4>Lectures (4)</h4>
              <IoMdArrowDropdown />
            </div>

            <div>
              {subLectures.map((item, i) => (
                <div
                  key={i}
                  className="flex content-center text-sm my-3 cursor-pointer space-x-4"
                  onClick={(e) =>
                    handleCourse(e, e.currentTarget.textContent, router)
                  }
                >
                  <div className="h-full w-[160px] rounded-xl">
                    <Image
                      src={item.img}
                      alt="another course"
                      className="object-cover h-full w-full rounded-xl"
                    />
                  </div>
                  <div className="w-[230px]">
                    <h6 className="font-bold">
                      {item.title}
                      <span className="text-[#5801A9]">({item.time})</span>
                    </h6>
                    <p className="font-light mt-2">{item.desc}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* recommended for you based on rating */}
      <div>
        <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 p-4 sm:p-8 my-4">
          <p className="text-white font-light text-sm sm:text-base sm:font-bold ml-24">
            Recommended to you based on rating
          </p>
          {/* background: linear-gradient(90deg, #9B51E0 0%, #4A90E2 100%); */}
        </div>
        <div className="mx-12 sm:mx-28">
          <CarouselComp />

          <div className="mt-24">
            <div className="my-4">
              {/* wording */}
              <h3 className="text-2xl font-bold">You will love this</h3>
              <p className="font-thin text-xl">
                Because you viewed{" "}
                <span className="text-[#5801A9] font-bold">
                  “Introduction to Web Dev Starknet”
                </span>
              </p>
            </div>

            {/* cards  */}
            <CarouselComp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
