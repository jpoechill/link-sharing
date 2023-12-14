import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 h-full">
      <div className='flex justify-between rounded-[18px] p-5 w-full items-center bg-white text-center'>
        <div>
          <Link href="/">
            <Image src="/img/logo-devlinks-large.svg" className="" alt="DevLinks logo" width={182} height={40}></Image>
          </Link>
        </div>
        <div>
          <Link href="/dashboard">
            <button className='p-2 px-5 text-[16px] rounded-lg mx-2'>Links</button>
          </Link>
          <Link href="/dashboard/profile">
            <button className='p-2 px-5 text-[16px]  text-[#633CFF] bg-[#EFEBFF] rounded-lg mx-2'>Profile Data</button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/preview">
            <button className='p-2 px-5 text-[16px] rounded-lg mx-2'>Preview</button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-5 h-full w-full gap-5'>
        <div className='flex justify-center col-span-5 bg-white h-full p-5 rounded-[18px]'>
          <Image src="/img/illustration-phone-mockup.svg" className="w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
        </div>
        <div className='col-span-7 relative'>
          <div className='bg-white h-full p-5 rounded-[18px]'>
            <span className='text-[32px] font-bold'>
              Profile Details
            </span> <br />
            <span className='text-[16px] text-[#737373]'>
              Add your details to create a personal touch to your profile.
            </span> <br />
            <div className='flex justify-between bg-[#FAFAFA] mt-5 rounded p-5 text-[#737373]'>
              <div className='flex items-center justify-center w-[193px] text-[12px]'>
                Profile Picture
              </div>
              <div className='flex flex-col items-center text-[#633CFF] font-bold rounded-lg justify-center p-5 bg-[#EFEBFF] w-[193px] h-[193px]'>
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
                <div><input type="text" placeholder="e.g. John" className='w-[432px] p-3 rounded-lg border' /></div>
              </div>
              <div className='flex justify-between items-center my-3'>
                <div className='text-[16px] text-[#737373]'>Last Name*</div>
                <div><input type="text" placeholder="e.g. Appleseed" className='w-[432px] p-3 rounded-lg border' /></div>
              </div>
              <div className='flex justify-between items-center my-3'>
                <div className='text-[16px] text-[#737373]'>Email</div>
                <div><input type="text" placeholder="e.g. mail@example.com" className='w-[432px] p-3 rounded-lg border' /></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full">
              <hr />
              <div className="flex justify-end w-full">
                <button className="border p-3 px-5 rounded-lg bg-[#633CFF] m-5 text-white">
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
