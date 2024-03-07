'use client';

import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../../public/avatar.png'
import usePersonStore from '../../store'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const firstName = usePersonStore((state) => state.firstName)
  const lastName = usePersonStore((state) => state.lastName)
  const email = usePersonStore((state) => state.email)

  const [image64Bit, setImage64Bit] = useState(usePersonStore((state) => state.userImage));

  const showSaveSuccess = () => {
    const popUp = document.getElementById("successSaveBadge") as HTMLElement;

    popUp.classList.remove("opacity-0");
    popUp.classList.add('opacity-100')

    setTimeout(() => {
      popUp.classList.remove("opacity-100");
      popUp.classList.add('opacity-0')
    }, 2000)
  }

  return (
    <main className="flex flex-col items-center h-full bg-white md:bg-inherit">
      <div className='fixed bottom-[30px] z-[100]'>
        <div id="successSaveBadge" className='flex bg-black text-white p-5 rounded-lg opacity-0 transition duration-500 ease-in-out'>
          <Image src="../../img/icon-link-copied-to-clipboard.svg" width={20} height={20} className='mr-3' alt="Saved Successfully" />
          The link has been copied to your clipboard!
        </div>
      </div>
      <div className='relative md:bg-[#633CFF] w-full p-4 h-[300px] md:h-[357px]'>
        <div className='flex justify-between gap-5 rounded-[18px] p-4 w-full items-center bg-white text-center'>
          <div className="w-full md:w-fit">
            <Link href="/dashboard">
              <button className='px-4 py-2 rounded w-full md:w-fit border border-[#633CFF] hover:bg-[#EFEBFF] font-medium text-[#633CFF]'>
                Back to Editor
              </button>
            </Link>
          </div>
          <div className="w-full md:w-fit">
            <button className='text-white px-4 py-2 w-full rounded bg-[#633CFF]' onClick={(e) => showSaveSuccess()}>
              Share Link
            </button>
          </div>
        </div>
        
        <div className="mx-auto absolute h-14 inset-x-0 bottom-[150px]">
          <div className='flex mx-auto flex-col m-4 items-center justify-center bg-white mb-10 round md:shadow rounded-xl w-fit px-8 w-min-[350px]'>
            <div className='relative rounded-full z-10 w-[190px] h-[190px] md:w-[104px] md:h-[104px] mt-12 outline outline-8 outline-[#633CFF]'>
              <Image
                src={`${image64Bit}`}
                alt="Picture of the author"
                className='bg-cover absolute z-0 bg-center rounded-full object-cover min-h-full min-w-full'
              width={105}
              height={105}
              />
            </div>
            <span className='text-[32px] font-bold mt-6'>{firstName} {lastName}</span>
            <div className='mt-3 mb-10 text-[#737373]'>
              {email || 'ben@example.com'}
            </div>
            <div className="flex flex-col mb-5">
              <button className='rounded-lg bg-black text-white p-4 flex justify-between items-center w-[240px] my-2'>
                <div className='flex items-center'>
                  <Image src="../../img/icon-github.svg" width={15} height={15} className="inline mr-2 fill-white" alt="Github Icon"></Image>
                  Github
                </div>
                <Image src="../../img/icon-arrow-right.svg" width={16} height={16} alt="Github Icon"></Image>
              </button>
            </div>
          </div>
          &nbsp;
        </div>

      </div>

    </main >
  )
}
