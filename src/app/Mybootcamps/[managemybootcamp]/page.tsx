"use client"
import React from 'react'
import Coursedropdown from '@/components/courses/Coursedropdown'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { coursestatusAtom,bootcampdropdownstatus } from "@/state/connectedWalletStarknetkitNext"
import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown"
import { useAtom, useSetAtom } from "jotai"
import Managebootcamp from '@/components/mybootcamp/Managebootcamp';

const Index = () => {
    const [status, setstatus] = useAtom(coursestatusAtom); 
  const [bootcampdropstat, setbootcampdropstat] = useAtom(bootcampdropdownstatus)
  const params = useParams();
  const bootcamp = params.managemybootcamp;
 
  
  
  const handlePageClick = () => {
    setbootcampdropstat(false);
    setstatus(false);
};
  return (
    <div onClick={handlePageClick}>
        {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
       {bootcampdropstat && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
       <div onClick={(e) => e.stopPropagation()} >
        <Coursedropdown />
        </div>
        <div onClick={(e) => e.stopPropagation()} > 
        <Bootcampdropdown />
        </div>
        
    <Managebootcamp bootcampname={bootcamp} />
    </div>
  )
}

export default Index