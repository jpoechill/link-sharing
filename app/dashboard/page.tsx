'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import usePersonStore from '../store'

interface Platforms {
  title: string;
  name: string;
  icon: string;
  bgColor?: string;
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


  const [firstName, setFirstNameLocal] = useState(usePersonStore((state) => state.firstName));
  const lastName = usePersonStore((state) => state.lastName)
  const email = usePersonStore((state) => state.email)

  const [image64Bit, setImage64Bit] = useState(usePersonStore((state) => state.userImage));

  const updateUserLinks = usePersonStore((state) => state.updateUserLinks)

  const listOptions: Platforms[] = [
    {
      title: 'CodePen',
      name: 'codepen',
      icon: '../../img/icon-codepen.svg',
      bgColor: '#010101',
      placeholder: 'https://codepen.com/johnappleseed/'
    },
    {
      title: 'CodeWars',
      name: 'codewars',
      icon: '../../img/icon-codewars.svg',
      bgColor: '#8A1A50',
      placeholder: 'https://codewars.com/johnappleseed/'
    },
    {
      title: 'DevTo',
      name: 'devto',
      icon: '../../img/icon-devto.svg',
      bgColor: '#333333',
      placeholder: 'https://devto.com/johnappleseed/'
    },
    {
      title: 'Facebook',
      name: 'facebook',
      icon: '../../img/icon-facebook.svg',
      bgColor: '#4267B2',
      placeholder: 'https://facebook.com/johnappleseed/'
    },
    {
      title: 'freeCodeCamp',
      name: 'freecodecamp',
      icon: '../../img/icon-freecodecamp.svg',
      bgColor: '#302267',
      placeholder: 'https://freecodecamp.com/johnappleseed/'
    },
    {
      title: 'Frontend Mentor',
      name: 'frontendmentor',
      icon: '../../img/icon-frontend-mentor.svg',
      bgColor: '#3E54A3',
      placeholder: 'https://frontendmentor.com/johnappleseed/'
    },
    {
      title: 'GitHub',
      name: 'github',
      icon: '../../img/icon-github.svg',
      bgColor: '#1A1A1A',
      placeholder: 'https://github.com/johnappleseed/'
    },
    {
      title: 'GitLab',
      name: 'gitlab',
      icon: '../../img/icon-gitlab.svg',
      bgColor: '#EB4925',
      placeholder: 'https://gitlab.com/johnappleseed/'
    },
    {
      title: 'Hashnode',
      name: 'hashnode',
      icon: '../../img/icon-hashnode.svg',
      bgColor: '#0330D1',
      placeholder: 'https://hashnode.com/johnappleseed/'
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      icon: '../../img/icon-linkedin.svg',
      bgColor: '#2D68FF',
      placeholder: 'https://linkedin.com/johnappleseed/'
    },
    {
      title: 'Stack Overflow',
      name: 'stackoverflow',
      icon: '../../img/icon-stack-overflow.svg',
      bgColor: '#EC7100',
      placeholder: 'https://stackoverflow.com/johnappleseed/'
    },
    {
      title: 'Twitch',
      name: 'twitch',
      icon: '../../img/icon-twitch.svg',
      bgColor: '#6441a5',
      placeholder: 'https://twitch.com/johnappleseed/'
    },
    {
      title: 'Twitter',
      name: 'twitter',
      icon: '../../img/icon-twitter.svg',
      bgColor: '#1DA1F2',
      placeholder: 'https://twitter.com/johnappleseed/'
    },
    {
      title: 'Youtube',
      name: 'youtube',
      icon: '../../img/icon-youtube.svg',
      bgColor: '#EE3939',
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
    <main className="flex flex-col items-center sm:p-4 h-full">
      <div className='fixed bottom-[30px] z-[100]'>
        <div id="successSaveBadge" className='flex bg-black text-white p-5 rounded-lg opacity-0 transition duration-500 ease-in-out'>
          <Image src="../../img/icon-changes-saved.svg" width={20} height={20} className='mr-3' alt="Saved Successfully" />
          Your changes have been successfully saved!
        </div>
      </div>
      <div className='flex justify-between sm:rounded-[18px] p-5 w-full items-center bg-white text-center'>
        <div>
          <Link href="/">
            <Image src="/img/logo-devlinks-large.svg" className="hidden sm:block" alt="DevLinks logo" width={182} height={40}></Image>
            <Image src="/img/logo-devlinks-small.svg" className="sm:hidden" alt="DevLinks logo" width={40} height={40}></Image>
          </Link>
        </div>
        <div className='flex flex-row'>
          <button className='p-2 px-5 text-[16px] flex flex-row items-center text-[#633CFF] rounded-lg mx-2 bg-[#EFEBFF]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:mr-2" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="#633CFF" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" />
            </svg>
            <span className='hidden sm:block'>Links</span>
          </button>
          <Link href="/dashboard/profile">
            <button className='p-2 px-5 flex flex-row items-center hover:text-[#633CFF] group text-[16px] rounded-lg mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="sm:mr-2" width="21" height="20" viewBox="0 0 21 20">
                <path className="group-hover:fill-[#633CFF] fill-[#737373]" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" />
              </svg>
              <span className='hidden sm:block'>Profile Data</span>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/preview">
            <button className='px-4 py-2 text-[16px] mx-2 rounded border border-[#633CFF] hover:bg-[#EFEBFF] text-[#633CFF]'>
              <Image src="/img/icon-preview-header.svg" className="sm:hidden" alt="DevLinks logo" width={25} height={25}></Image>
              <span className='hidden sm:block'>Preview</span>
            </button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-5 h-full w-full gap-5'>
        <div className='relative hidden md:block col-span-5 h-full justify-center'>
          <div className='flex relative justify-center  bg-white h-[834px] w-full items-center sm:rounded-[18px]'>
            <div className='z-10 absolute flex flex-col aspect-video justify-center items-center max-h-[632px] w-full h-full max-w-[308px]'>

              <div className='relative rounded-full z-10 w-[96px] h-[96px]  mt-2 mb-[24px] bg-[#EEEEEE]'>
                <Image
                  src={`${image64Bit}`}
                  alt="Default user image"
                  className='bg-cover absolute z-0 bg-center rounded-full object-cover min-h-full min-w-full'
                  fill
                />
              </div>

              {firstName !== '' ?
                <div className='text-center w-[160px] h-[16px] mb-[13px]'>{firstName} {lastName}</div> :
                <div className='bg-[#EEEEEE] rounded-full w-[160px] h-[16px] mb-[13px]'></div>
              }

              {email !== '' ?
                <div className='text-center w-[160px] h-[16px] mb-[35px]'>{email}</div> :
                <div className='bg-[#EEEEEE] rounded-full w-[72px] h-[8px] mb-[35px]'></div>
              }

              {(() => {
                const arr = [];
                for (let i = 0; i < 5; i++) {
                  if (userLinksLocal[i]) {
                    let currLink = listOptions.find((listOption) => { return listOption.name === userLinksLocal[i].name })
                    arr.push(
                      <div className={`flex justify-between items-center p-4 text-white rounded-md w-[237px] h-[44px] mt-[20px]`} style={{ 'backgroundColor': currLink!.bgColor }}>
                        <div className='flex items-center'>
                          <Image src={currLink!.icon} width={15} height={15} className="inline mr-2 fill-white" alt="Github Icon"></Image>
                          {currLink!.title}
                        </div>
                        <Image src="../../img/icon-arrow-right.svg" width={16} height={16} alt="Github Icon"></Image>
                      </div>
                    );
                  } else {
                    arr.push(
                      <div className='bg-[#EEEEEE] rounded-md w-[237px] h-[44px] mt-[20px]'></div>
                    );
                  }
                }
                return arr;
              })()}

            </div>
            <Image src="/img/illustration-phone-mockup.svg" className="w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
          </div>
        </div>

        <div className='col-span-12 sm:col-span-7 '>
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
                <button onClick={(e) => { updateUserLinks(userLinksLocal); showSaveSuccess(); }} className="border p-3 px-5 w-full sm:w-min rounded-lg bg-[#633CFF] m-5 text-white">
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
