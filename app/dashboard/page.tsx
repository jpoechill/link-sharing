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
          <button className='p-2 px-5 text-[16px] text-[#633CFF] rounded-lg mx-2 bg-[#EFEBFF]'>Links</button>
          <Link href="/dashboard/profile">
            <button className='p-2 px-5 text-[16px] rounded-lg mx-2'>Profile Data</button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/preview">
            <button>Preview</button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-5 h-full w-full gap-5'>
        <div className='flex justify-center col-span-5 bg-white h-full p-5 rounded-[18px]'>
          <Image src="/img/illustration-phone-mockup.svg" className="w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
        </div>
        <div className='col-span-7 '>
          <div className='bg-white relative h-full rounded-[18px]'>
            <div className="p-5">
              Customize your links <br />
              Add/edit/remove links below and then share all your profiles with the world! <br />
              <button className='border w-full p-2 px-5 text-[#633CFF] border-[#633CFF] text-[16px] rounded-lg mt-5'>
                + Add new link
              </button>

              {/* <div className='flex bg-[#FAFAFA] h-3/4 justify-center mt-5 rounded-lg items-center w-full'>
              <div className='w-[488px] text-center'>
                <Image src="/img/illustration-empty.svg" className="mx-auto w-full max-w-[307px]" alt="DevLinks logo" width={'182'} height={40}></Image>
                <h1 className='text-[32px] font-bold mb-6'>Let' s get you started</h1>
                <span className="text-[#737373]">
                  Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
                </span>
              </div>
            </div> */}

            </div>
            <div className="m-5">
              <div className='flex bg-[#FAFAFA] h-3/4 mt-5 p-5 rounded-lg w-full'>
                <div className='w-full'>
                  <div className="flex justify-between">
                    <div>= Link #1</div>
                    <div>Remove</div>
                  </div>
                  <br />
                  <div className='text-[12px]'>Platform</div>
                  <input type="text" className="my-2 border w-full p-3 rounded-lg" /> <br />
                  <div className='text-[12px]'>Link</div>
                  <input type="text" className="mt-2 border w-full p-3 rounded-lg" />
                </div>
              </div>
            </div>


            {/* <div className="relative flex w-full">
              <p>Relative parent</p>
              <div className="absolute bottom-0 left-0 ...">
                <p>Absolute child</p>
              </div>
            </div> */}

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
