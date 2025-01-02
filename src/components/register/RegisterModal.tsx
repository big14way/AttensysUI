'use client'
import { ChangeEvent, SetStateAction, useRef, useState } from 'react'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Input, Label } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useAtom } from 'jotai'
import Image from 'next/image'
import cancel from '@/assets/cancel.svg'
import {registerModal,detailsEntryStat,detailsEntryLoading,registrationsuccess} from '@/state/connectedWalletStarknetkitNext'
import RegistrationDetails from './RegistrationDetails'
import DetailsLoading from './DetailsLoading'
import RegistrationSuccess from './RegistrationSuccess'


export default function RegisterModal(prop: any) {
  const [open, setOpen] = useState(prop.status)
  const [regModal, setRegModal] = useAtom(registerModal);
  const [detailsEntrystatus, setDetailsEntryStatus] = useAtom(detailsEntryStat)
  const [detailsEntryLoadingstatus, setDetailsEntryLoadingStatus] = useAtom(detailsEntryLoading)
  const [registrationsuccessstatus, setregistrationsuccessstatus] = useAtom(registrationsuccess)




 

  return (
<Dialog open={open} onClose={setOpen} className="relative z-10">
  <DialogBackdrop
    transition
    className="fixed inset-0 bg-[#0F0E0E82] transition-opacity"
  />

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
      <DialogPanel
        className="relative h-[690px] w-[663px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8"
      >
        <div className='px-16 flex justify-between pt-10 cursor-pointer' >
        <h1 className='text-[22px] font-semibold leading-[31px] text-[#5801A9]'>Register</h1>
          <Image src={cancel} alt='cancel' onClick={() => {setOpen(false); setRegModal(false);  setDetailsEntryStatus(true); setDetailsEntryLoadingStatus(false); setregistrationsuccessstatus(false);}} />
        </div>    
        {detailsEntrystatus && <RegistrationDetails />}
        {detailsEntryLoadingstatus && <DetailsLoading />}
        {registrationsuccessstatus && <RegistrationSuccess />}
      </DialogPanel>
    </div>
  </div>
</Dialog>
  )
}
