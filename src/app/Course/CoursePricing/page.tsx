"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import LeftSideBar from "@/components/courses/LeftSideBar"
import Coursepricing from "@/components/courses/Coursepricing"

const CoursePricing = () => {
  const [status] = useAtom(coursestatusAtom)

  return (
    <div className=" ">
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <div className="w-full flex">
        <div className=" flex-[0.3] sticky top-0  bg-gradient-to-b from-[#f4e8ff]  to-blue-100  ">
          <div className="grid  place-content-evenly">
            <LeftSideBar />

            <div></div>
            <div></div>
          </div>
        </div>

        <div className="bg-[#F5F7FA] flex-1">
          <Coursepricing />
        </div>
      </div>
    </div>
  )
}

export default CoursePricing
