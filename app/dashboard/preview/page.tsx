import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../../public/avatar.png'

export default function Home() {
  return (
    <main className="flex flex-col items-centerh-full">
      <div className='relative bg-[#633CFF] w-full p-4 h-[357px]'>
        <div className='flex justify-between rounded-[18px] p-4 w-full items-center bg-white text-center'>
          <div>
            <Link href="/dashboard">
              <button className='px-4 py-2 rounded border border-[#633CFF] text-[#633CFF]'>
                Back to Editor
              </button>
            </Link>
          </div>
          <div>
            <button className='text-white px-4 py-2 rounded bg-[#633CFF]'>
              Share Link
            </button>
          </div>
        </div>


        {/* <div className="relative h-32 w-32 border bg-black"> */}
        <div className="mx-auto absolute h-14 inset-x-0 bottom-[150px]">
          <div className='flex mx-auto flex-col m-4 items-center justify-center bg-white round shadow rounded-xl w-[350px] h-[570px]'>
            <div className='rounded-full w-[104px] h-[104px] bg-black'>
              <Image
                src={avatar}
                alt="Picture of the author"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              {/* <Image src='/avatar.png' sizes="100vw" alt="User Avatar" style={{ width: '100%', height: 'auto' }}></Image> */}
            </div>
            <span className='text-[32px] font-bold mt-6'>Ben Wright</span>
            <div className='mt-3 mb-10 text-[#737373]'>
              ben@example.com
            </div>
            <div className="flex flex-col">
              <button className='rounded-lg bg-black text-white p-4 flex w-[240px] my-2'>
                Github
              </button>
              <button className='rounded-lg bg-black text-white p-4 flex w-[240px] my-2'>
                Youtube
              </button>
              <button className='rounded-lg bg-black text-white p-4 flex w-[240px] my-2'>
                LinkedIn
              </button>
            </div>
          </div>
        </div>

      </div>

    </main >
  )
}
