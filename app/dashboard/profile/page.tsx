'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import usePersonStore from '../../store'

export default function Home() {
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const [firstName, setFirstNameLocal] = useState(usePersonStore((state) => state.firstName));

  const updateLastName = usePersonStore((state) => state.updateLastName)
  const [lastName, setLastNameLocal] = useState(usePersonStore((state) => state.lastName));

  const updateEmail = usePersonStore((state) => state.updateEmail)
  const [email, setEmailLocal] = useState(usePersonStore((state) => state.email));



  const [file, setFile] = useState<File>()
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if (!file) return

  //   try {
  //     const data = new FormData()
  //     data.set('file', file)

  //     alert('I have the file')

  //     var reader = new FileReader();
  //     reader.onload = function () {
  //       var dataURL = reader.result;
  //       var output = document.getElementById('output');
  //       output.src = dataURL;
  //     };
  //     reader.readAsDataURL(input.files[0]);
  //     // const res = await fetch('/api/upload', {
  //     //   method: 'POST',
  //     //   body: data
  //     // })
  //     // handle the error
  //     if (!res.ok) throw new Error(await res.text())
  //   } catch (e: any) {
  //     // Handle errors here
  //     console.error(e)
  //   }
  // }

  function previewFile(e: Event) {
  }

  const handleSubmit: React.ChangeEventHandler<HTMLInputElement> = (e: React.FormEvent<HTMLInputElement>) => {
    const preview = document.getElementById("myImage") as HTMLImageElement;
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    // const file: File = e!.target!.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        // if (preview) {
        preview.src = String(reader.result);
        // }
      },
      false,
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openFile = () => {
    const preview = document.getElementById("file") as HTMLFormElement;
    preview.click();
  }

  return (
    <main className="flex flex-col items-center p-4 h-full">
      {/* <Image id='output' src="" alt="" style={{ height: '100px', width: '100px' }}></Image> */}
      {/* <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
        <Image id='output' src="" alt="" style={{ height: '100px', width: '100px' }}></Image>
      </form> */}
      <div className='flex justify-between rounded-[18px] p-5 w-full items-center bg-white text-center'>
        <div>
          <Link href="/">
            <Image src="/img/logo-devlinks-large.svg" className="" alt="DevLinks logo" width={182} height={40}></Image>
          </Link>
        </div>
        <div className='flex flex-row'>
          <Link href="/dashboard">
            <button className='p-2 px-5 text-[16px] group flex flex-row items-center rounded-lg mx-2 hover:hover:text-[#633CFF]'>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path fill="#737373" className="group-hover:fill-[#633CFF]" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" />
              </svg>
              Links
            </button>
          </Link>
          <Link href="/dashboard/profile">
            <button className='p-2 px-5 text-[16px] group flex flex-row items-center text-[#633CFF] bg-[#EFEBFF] rounded-lg mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="21" height="20" viewBox="0 0 21 20">
                <path className="fill-[#633CFF]" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" /></svg>
              Profile Data
            </button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/preview">
            <button className='px-4 py-2 text-[16px] mx-2 font-medium rounded border border-[#633CFF] hover:bg-[#EFEBFF] text-[#633CFF]'>
              Preview
            </button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-5 h-full w-full gap-5'>
        <div className='flex justify-center col-span-5 bg-white h-full p-5 rounded-[18px]'>
          <Image src="/img/illustration-phone-mockup.svg" className="w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
        </div>
        <div className='col-span-7 relative hover-bg-[#EFEBFF]'>
          <div className='bg-white h-full rounded-[18px] flex flex-col justify-between'>
            <div className='p-5'>
              <span className='text-[32px] font-bold'>
                Profile Details
              </span> <br />
              <div className='text-[16px] text-[#737373] mb-7'>
                Add your details to create a personal touch to your profile.
              </div> <br />
              <div className='flex justify-between bg-[#FAFAFA] rounded p-5 text-[#737373]'>
                <div className='flex items-center justify-center w-[193px] text-[12px]'>
                  Profile Picture
                </div>
                <div onClick={() => openFile()} className='flex flex-col items-center text-[#633CFF] font-bold rounded-lg justify-center p-5 bg-[#EFEBFF] w-[193px] h-[193px]'>
                  <form className='hidden'>
                    <input type="file" id="file" onChange={handleSubmit} /><br />
                  </form>
                  <Image src="" id="myImage" height={200} width={200} alt="Image preview" />
                  <Image src="/img/icon-upload-image.svg" className="mb-3" width={32} height={32} alt="Upload Image"></Image>
                  +Upload Image
                </div>
                <div className='flex items-center justify-center text-center p-3 w-[193px] text-[12px]'>
                  Image must be below 1024x1024px. <br />Use PNG or JPG format.
                </div>
              </div>
              <div className='round bg-[#FAFAFA] p-3 mt-3 rounded-lg'>
                <div className='flex justify-between items-center my-3'>
                  <div className='text-[16px] text-[#737373]'>First name*</div>
                  <div><input type="text" placeholder="e.g. John" value={firstName} onChange={(e) => setFirstNameLocal(e.target.value)} className='w-[432px] p-3 rounded-lg border' /></div>
                </div>
                <div className='flex justify-between items-center my-3'>
                  <div className='text-[16px] text-[#737373]'>Last Name*</div>
                  <div><input type="text" placeholder="e.g. Appleseed" value={lastName} onChange={(e) => setLastNameLocal(e.target.value)} className='w-[432px] p-3 rounded-lg border' /></div>
                </div>
                <div className='flex justify-between items-center my-3'>
                  <div className='text-[16px] text-[#737373]'>Email</div>
                  <div><input type="text" placeholder="e.g. mail@example.com" value={email} onChange={(e) => setEmailLocal(e.target.value)} className='w-[432px] p-3 rounded-lg border' /></div>
                </div>
              </div>
            </div>
            <div className="bottom-0 right-0 w-full">
              <hr />
              <div className="flex justify-end w-full">
                <button onClick={(e) => { updateFirstName(firstName); updateLastName(lastName); updateEmail(email) }} className="border p-3 px-5 rounded-lg bg-[#633CFF] m-5 text-white">
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