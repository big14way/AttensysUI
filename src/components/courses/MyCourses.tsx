import { useEffect, useState } from "react"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { useRouter } from "next/navigation"
import videoHero from "../../assets/video.png"
import Image from "next/image"
import { FaUserGraduate } from "@react-icons/all-files/fa/FaUserGraduate"
import Switch from "react-switch"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { FaCheck } from "@react-icons/all-files/fa/FaCheck"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import ProgressBar from "@ramonak/react-progress-bar"
import Notification from "./Notification"
import CreateACourse from "./CreateACourse"
import UserSideBar from "./UserSideBar"

const MyCourses = () => {
  const [isActivated, setIsActivated] = useState(false)
  const [selected, setSelected] = useState("")
  const [page, setPage] = useState("")
  const router = useRouter()

  const coursesDetails = [
    {
      no: 1,
      title: "Elementary Crypto Trading",
      tag: "Courses created",
      playTime: "2 hrs 35 mins",
      level: "Elementary",
      stars: 281,
      url: videoHero,
      certificate: 291,
    },
  ]

  const learningDetails = [
    {
      no: 1,
      title: "Elementary Crypto Trading",
      tag: "My Learning Journey",
      playTime: "2 hrs 35 mins",
      level: "Elementary",
      stars: 281,
      url: videoHero,
      certificate: 291,
    },
  ]



  useEffect(() => {
    setPage("myCourse")
    console.log(page)
  }, [page])

  return (
    <div className="flex flex-row mx-20 my-8">
      <UserSideBar  page={page} selected={selected} setSelected={setSelected} />

      <div className="flex-auto ml-5">
        {coursesDetails.map((item, i) =>
          item && item.tag == selected ? (
            <div className="block py-12 " key={i}>
              {/* courses created */}
              <Card
                className="border-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CardBody
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <div className="flex justify-between border-b-4 my-3">
                    {/* activate */}
                    <div className="flex text-gradient-to-r from-purple-400 via-purple-30 mx-8 my-5">
                      <FaUserGraduate />
                      <h4 className="font-bold">{selected} </h4>
                    </div>
                    <div className="flex mx-8 my-5">
                      <p>Deactivate</p>
                      <Switch
                        onChange={handleSwitch}
                        checked={isActivated}
                        onColor="#9B51E0"
                        offColor="#4A90E2"
                        uncheckedHandleIcon={<FaTimes />}
                        checkedHandleIcon={<FaCheck />}
                      />
                      <p>Activate</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-top">
                      <div className="mr-6">
                        <Image src={item.url} alt="video" />
                      </div>
                      <div className="mt-10">
                        <div>
                          <h4 className="font-bold text-2xl">{item.title}</h4>

                          {/* video prop */}
                          <div className="flex ">
                            <div className="flex ">
                              <FaPlay />
                              <p>Total play time: {item.playTime}</p>
                            </div>
                            <div className="flex ml-5 ">
                              <GrDiamond color="#2D3A4B" />
                              <p>Difficulty level: {item.level}</p>
                            </div>
                          </div>

                          {/* rating and num of students */}
                          <div className="flex  items-center my-3">
                            <div className="flex items-center">
                              <IoIosStar color="#F6A61C" />
                              <IoIosStar color="#F6A61C" />
                              <IoIosStar color="#F6A61C" />
                              <IoIosStar color="#F6A61C" />
                              <IoIosStar />
                              <p className="font-bold">({item.stars})</p>
                            </div>

                            <div className="flex text-center">
                              <div>
                                <HiBadgeCheck color="#2D3A4B" />
                              </div>
                              <p>Certificate issued:</p>
                              <p className="ml-5 font-bold">
                                {item.certificate} certification
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter
                  className="pt-0"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {undefined}
                </CardFooter>
              </Card>
            </div>
          ) : null,
        )}

        <div className={`${selected ? "0" : "mt-12"}`}>
          {/* Learning journey */}
          {learningDetails.map((item, i) =>
            item && item.tag == selected ? (
              <div className="py-12" key={i}>
                <Card
                  className="border-2 "
                  key={i}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <CardBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {item.no == 1 ? (
                      <div className="flex justify-between border-b-4 my-3">
                        {/* activate */}
                        <div className="flex text-gradient-to-r from-purple-400 via-purple-30 mx-8 my-5">
                          <h4 className="font-bold">{selected}</h4>
                        </div>
                        <div className="flex mx-8 my-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                            />
                          </svg>

                          <p className="underline">All</p>
                        </div>
                      </div>
                    ) : null}

                    <div>
                      <div className="flex justify-top">
                        <div className="mr-6">
                          <Image src={item.url} alt="video" />
                        </div>

                        <div className="mt-10">
                          <div>
                            <h4 className="font-bold text-2xl">
                              Elementary Crypto Trading
                            </h4>

                            {/* video prop */}
                            <div className="flex mt-7">
                              <div className="flex ">
                                <FaPlay />
                                <p>Total play time: 2 hrs 35 mins</p>
                              </div>
                              <div className="flex ml-5 ">
                                <p>|</p>
                                <p className="underline ml-3">
                                  Created by Akinbola Kehinde
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <ProgressBar completed={48} />
                          </div>

                          <div>
                            <p>3/6 Lectures completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter
                    className="pt-0"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {undefined}
                  </CardFooter>
                </Card>
              </div>
            ) : null,
          )}
        </div>

        <div>{selected == "Create a course" ? <CreateACourse /> : null}</div>

        <div>
          {selected == "" || selected == "Notification" ? (
            <Notification />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default MyCourses
