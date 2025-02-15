import React, { useRef, useState } from "react"
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"
import Dropdown from "../Dropdown"
import Image from "next/image"
import upload from "@/assets/upload.svg"
import CourseSideBar from "./SideBar"
import { handleCreateCourse } from "@/utils/helpers"
import { useRouter } from "next/navigation"
import { Button } from "@headlessui/react"
import AddLecture from "./AddLecture"

interface ChildComponentProps {
  imageUrl: any
  courseData: any
  handleCourseImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleCourseCurriculumChange: (newLecture: any) => void
}

const MainFormView3: React.FC<ChildComponentProps> = ({
  imageUrl,
  courseData,
  handleCourseImageChange,
  handleCourseCurriculumChange,
}) => {
  const router = useRouter()

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const handleBrowsefiles = () => {
    fileInputRef.current?.click()
  }

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Check if an option is selected before navigating
    if (
      Object.keys(courseData.courseImage.name).length > 0 &&
      courseData.courseCurriculum.length > 0
    ) {
      router.push(`/Course/CreateACourse/courseSetup4`)
    } else {
      alert("Please select an option before proceeding.")
    }
  }

  return (
    <div className="flex items-stretch">
      <div className="hidden sm:block">
        <CourseSideBar courseData={courseData} />
      </div>

      <div className="flex-1">
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
          <p className="text-sm text-white text-center py-2">
            Your course creation progress saves automatically, but feel free to
            also save your progress manually
          </p>
        </div>

        <div className="min-w-full w-[100%] ">
          <div className="block sm:flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
            <div className="flex items-center">
              <div className="px-4 sm:px-8 border-r border-blue-100">
                <IoMdArrowBack
                  onClick={() => history.back()}
                  className="cursor-pointer text-[#4A90E2]"
                />
              </div>
              <p className="text-[#4A90E2] text-xl font-bold">
                Course & Curriculum
              </p>
            </div>

            <button className="hidden sm:block bg-[#c5d322] px-7 py-3 rounded text-black">
              Save progress
            </button>
          </div>

          <div className="mx-10  mt-12">
            <form onSubmit={handleNext}>
              <div className="my-12 w-full">
                <label
                  htmlFor=""
                  className="font-semibold text-[18px] leading-[31px] text-[#333333]"
                >
                  Course Image
                </label>
                <p className="font-normal text-[14px] text-[#2D3A4B] leading-[21px]">
                  {`This is the creative section of your course creation. Your course landing page is crucial to your success on Attensys. 
You want to make sure your creative is very catchy.`}
                </p>
                <div className="block sm:flex items-start my-4">
                  <div className="bg-[#DCDCDC] flex-1 p-4 sm:p-16 rounded-xl">
                    <div className="bg-white p-2 sm:p-14 text-center border-dotted rounded border-2 border-[#D0D5DD]  content-center text-xs ">
                      <div className="mx-auto w-[15%]">
                        <Image src={upload} alt="uplaod" />
                      </div>

                      <div className="my-3">
                        <p>
                          <span
                            className="text-[#4A90E2] cursor-pointer"
                            onClick={handleBrowsefiles}
                          >
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                      </div>

                      <div>
                        <p>OR</p>

                        <div onClick={handleBrowsefiles}>
                          <Button className="rounded bg-[#9B51E0] px-12 py-3 text-white my-3">
                            Browse Files
                          </Button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg, image/jpg, image/png"
                            onChange={handleCourseImageChange}
                            style={{ display: "none" }} // Hide the input
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm sm:mx-6 flex-1 ">
                    <div className="bg-white sm:w-[50%] lg:w-[350px] p-8 text-center border-dotted rounded-xl border-2 border-[#D0D5DD] flex flex-col justify-center content-center">
                      {courseData.courseImage.name == "" ? (
                        <div>
                          <div className="w-[15%] mx-auto">
                            <Image src={upload} alt="uplaod" width={30} />
                          </div>

                          <div className="my-4">
                            <p className="text-[8px]">
                              <span className="text-[#4A90E2]">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-[9px]">
                              SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                          </div>

                          <div className="my-2">
                            <p className="text-[8px]">OR</p>

                            <Button className="rounded bg-[#9B51E0] px-4 py-1 my-4 text-white text-[8px]">
                              Browse Files
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={imageUrl}
                          alt="uplaod"
                          width={200}
                          height={200}
                        />
                        // <h1>Hello</h1>
                      )}
                    </div>
                    <div className="py-5 sm:w-1/2 lg:w-[350px]">
                      <p className="font-semibold text-[18px] leading-[31px] text-[#333333] py-3">
                        Upload thumbnail
                      </p>
                      <p className="font-normal text-[14px] text-[#2D3A4B] leading-[21px]">
                        Upload your course image here. It must meet our course
                        image quality standards to be accepted. Important
                        guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png.
                        no text on the image.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-12">
                <p className="font-semibold text-[18px] leading-[31px] text-[#333333] my-3">
                  Course Curriculum
                </p>
                <p className="font-normal text-[14px] text-[#2D3A4B] leading-[21px]">
                  AttenSys allows you to structure your course with multiple
                  videos under one course. Each section can include several
                  videos, helping you break down complex topics into easily
                  digestible lessons. This makes it simple for students to
                  follow along, step by step, as they progress through your
                  course.
                </p>
                <div className="my-12">
                  <p className="font-semibold text-[18px] leading-[31px] text-[#333333] my-3">
                    Tips
                  </p>
                  <ul className="list-disc text-[14px] text-[#2D3A4B] leading-[21px] w-[800px] ml-4">
                    <li className="py-2">
                      Aim to keep each video between 5 to 10 minutes. Shorter
                      videos are easier for students to follow and help them
                      stay focused. For complex topics, break the content into
                      multiple shorter videos instead of one long video.
                    </li>
                    <li className="py-3">
                      Start each video with a brief introduction of the key
                      points that will be covered. This helps students know what
                      to expect and primes them for learning.
                    </li>
                    <li className="py-3">
                      Include activities or prompts within your videos, like
                      asking students to pause and think about a question or to
                      try something on their own before moving on to the next
                      video.
                    </li>
                  </ul>
                </div>
              </div>

              <AddLecture
                courseData={courseData}
                handleCourseCurriculumChange={handleCourseCurriculumChange}
              />

              <div className="mt-12 mb-24">
                <button
                  className="rounded-xl bg-[#4A90E2] px-48 py-3 text-white"
                  type="submit"
                >
                  Almost there
                </button>
              </div>

              <div>
                <div className="mt-6 mb-24">
                  <button className="block sm:hidden bg-[#c5d322]  text-xs px-12 py-3 rounded text-black">
                    Save progress
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFormView3
