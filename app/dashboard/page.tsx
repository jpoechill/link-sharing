'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import usePersonStore from '../store'

interface Platforms {
  title: string;
  name: string;
  icon: string;
  placeholder: string;
}

interface StateProperties {
  options: Platforms[];
  selected: number;
  link: string;
}

export default function Home() {
  const [data, setData] = useState<StateProperties[]>([]);
  const userLinks = usePersonStore((state) => state.links)
  const [userLinksLocal, setUserLinksLocal] = useState(userLinks);



  const updateUserLinks = usePersonStore((state) => state.updateUserLinks)
  // const removeUserLinks = usePersonStore((state) => state.removeUserLinks)

  const listOptions: Platforms[] = [
    {
      title: 'CodePen',
      name: 'codepen',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'CodeWars',
      name: 'codewars',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'DevTo',
      name: 'devto',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'Facebook',
      name: 'facebook',
      icon: 'facebook',
      placeholder: 'https://facebook.com/johnappleseed/'
    },
    {
      title: 'freeCodeCamp',
      name: 'freecodecamp',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'Frontend Mentor',
      name: 'frontendmentor',
      icon: 'facebook',
      placeholder: 'https://facebook.com/johnappleseed/'
    },
    {
      title: 'GitHub',
      name: 'github',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'GitLab',
      name: 'gitlab',
      icon: 'github',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'Hashnode',
      name: 'hashnode',
      icon: 'hashnode',
      placeholder: 'https://hashnode.com/johnappleseed/'
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      icon: 'github',
      placeholder: 'https://linkedin.com/johnappleseed/'
    },
    {
      title: 'Stack Overflow',
      name: 'stackoverflow',
      icon: 'github',
      placeholder: 'https://frontendmentor.com/johnappleseed/'
    },
    {
      title: 'Twitch',
      name: 'twitch',
      icon: 'github',
      placeholder: 'https://frontendmentor.com/johnappleseed/'
    },
    {
      title: 'Twitter',
      name: 'twitter',
      icon: 'github',
      placeholder: 'https://frontendmentor.com/johnappleseed/'
    },
    {
      title: 'Youtube',
      name: 'youtube',
      icon: 'github',
      placeholder: 'https://youtube.com/johnappleseed/'
    },
  ]

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
    <main className="flex flex-col items-center p-4 h-full">
      <div className='fixed bottom-[30px] z-[100]'>
        <div id="successSaveBadge" className='flex bg-black text-white p-5 rounded-lg opacity-0 transition duration-500 ease-in-out'>
          <Image src="../../img/icon-changes-saved.svg" width={20} height={20} className='mr-3' alt="Saved Successfully" />
          Your changes have been successfully saved!
        </div>
      </div>
      <div className='flex justify-between rounded-[18px] p-5 w-full items-center bg-white text-center'>
        <div>
          <Link href="/">
            <Image src="/img/logo-devlinks-large.svg" className="" alt="DevLinks logo" width={182} height={40}></Image>
          </Link>
        </div>
        <div className='flex flex-row'>
          <button className='p-2 px-5 text-[16px] flex flex-row items-center text-[#633CFF] rounded-lg mx-2 bg-[#EFEBFF]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="#633CFF" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" />
            </svg>
            Links
          </button>
          <Link href="/dashboard/profile">
            <button className='p-2 px-5 flex flex-row items-center hover:text-[#633CFF] group text-[16px] rounded-lg mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="21" height="20" viewBox="0 0 21 20">
                <path className="group-hover:fill-[#633CFF] fill-[#737373]" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" />
              </svg>
              Profile Data
            </button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/preview">
            <button className='px-4 py-2 text-[16px] mx-2 rounded border border-[#633CFF] hover:bg-[#EFEBFF] text-[#633CFF]'>
              Preview
            </button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-5 h-full w-full gap-5'>
        <div className='col-span-5'>
          <div className='flex justify-center bg-white p-5 py-[70px] rounded-[18px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="308" height="632" fill="none" viewBox="0 0 308 632">
              <path stroke="#737373" d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z" />
              <path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z" />
              <circle cx="153.5" cy="112" r="48" fill="#EEE" /><rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
              <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />

              asdasd
              <button className='rounded-lg bg-[#302267] text-white p-4 flex justify-between items-center w-[240px] my-2'>
                <div className='flex items-center'>
                  <Image src="../../img/icon-hashnode.svg" width={15} height={15} className="inline mr-2 fill-white" alt="Github Icon"></Image>
                  Hashnode
                </div>
                <Image src="../../img/icon-arrow-right.svg" width={16} height={16} alt="Github Icon"></Image>
              </button>
              <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
              <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
              <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
              <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
              <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
            </svg>
            {/* <Image src="/img/illustration-phone-mockup.svg" className="w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image> */}
          </div>
        </div>
        <div className='col-span-7 '>
          <div className='bg-white h-full rounded-[18px] flex flex-col justify-between'>
            <div>
              <div className="p-5">
                <span className='text-[32px] font-bold'>
                  Customize your links
                </span> <br />
                <div className='text-[16px] text-[#737373] mb-7'>
                  Add/edit/remove links below and then share all your profiles with the world! <br />
                </div>

                <button onClick={(e) => { setUserLinksLocal([...userLinksLocal, { name: 'github', url: '' }]) }}
                  className='border w-full p-2 px-5 text-[#633CFF] hover:bg-[#EFEBFF] border-[#633CFF] text-[16px] rounded-lg mt-5'>
                  + Add new link
                </button>

                {userLinksLocal.length === 0 &&
                  <div className='flex bg-[#FAFAFA] h-3/4 justify-center mt-5 py-[70px] rounded-lg items-center w-full'>
                    <div className='w-[488px] text-center'>
                      <Image src="/img/illustration-empty.svg" className="mx-auto w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
                      <h1 className='text-[32px] font-bold mb-6'>Let&apos; s get you started</h1>
                      <span className="text-[#737373]">
                        Use the &quot;Add new link&quot; button to get started. Once you have more than one link, you can reorder and edit them. We&quot;re here to help you share your profiles with everyone!
                      </span>
                    </div>
                  </div>}
              </div>
              <div className="m-5 ">

                {userLinksLocal.map((item, index) => (
                  <div key={index} className='flex bg-[#FAFAFA] h-3/4 mt-5 mb-4 p-5 rounded-lg w-full'>
                    <div className='w-full'>
                      <div className="flex justify-between">
                        <div>= <span className='font-bold text-[16px] text-[#737373]'>Link #{index + 1}</span></div>
                        <button onClick={(e) =>
                          setUserLinksLocal(
                            userLinksLocal.filter(function (link, linkIndex) {
                              return linkIndex !== index
                            })
                          )}
                        > <span className='text-[16px] text-[#737373]'>Remove</span></button>
                      </div>
                      <br />
                      <label className='text-[12px]'>Platform</label>
                      <select name="linkOptions" className="my-2 px-5 border w-full p-3 rounded-lg" id="cars"
                        onChange={(e) => {
                          setUserLinksLocal(
                            userLinksLocal.map((link, linkIndex) => {
                              if (linkIndex === index) {
                                return {
                                  ...link,
                                  name: e.target.value,
                                }
                              } else {
                                return link;
                              }
                            })
                          )
                        }} >
                        {listOptions.map((listOptionItem, optionIndex) => (
                          <option key={optionIndex} value={listOptionItem.name} selected={listOptionItem.name === item.name}>{listOptionItem.title}</option>
                        ))}
                      </select>
                      <div className='text-[12px]'>Link</div>
                      <input type="text" value={item.url} onChange={(e) => {
                        setUserLinksLocal(
                          userLinksLocal.map((link, linkIndex) => {
                            if (linkIndex === index) {
                              return { ...link, url: e.target.value };
                            } else {
                              return link;
                            }
                          })
                        )
                      }} placeholder={listOptions.find((listOptionItem) => listOptionItem.name === item.name)?.placeholder} className="mt-2 border w-full p-3 rounded-lg" />
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className="bottom-0 right-0 w-full">
              <hr />
              <div className="flex justify-end w-full">
                <button onClick={(e) => { updateUserLinks(userLinksLocal); showSaveSuccess(); }} className="border p-3 px-5 rounded-lg bg-[#633CFF] m-5 text-white">
                  Save
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main >
  )
}
