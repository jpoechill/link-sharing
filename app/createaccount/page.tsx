import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-16 lg:pt-[80px] mt-0 lg:mt-8">
      <Image src="/img/logo-devlinks-large.svg" className="mb-[55px]" alt="DevLinks logo" width={182} height={40}></Image>
      <div className='flex flex-col rounded-[18px] p-10 px-12 w-[476px] drop-shadow-2xl items-center bg-white text-center'>
        <div className='w-full text-left mb-8'>
          <h1 className='text-[32px] font-bold mb-2'>Create account</h1>
          <span className='text-[16px] text-[#737373]'>Let&apos;s get you started sharing your links!</span>
        </div>
        <div className='w-full text-left'>
          <div className='mb-5'>
            <span className='text-xs'>Email Address</span> <br />
            <input type="text" className='border w-full p-3 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)]' placeholder='e.g. alex@gmail.com' />
          </div>
          <div className='mb-5'>
            <span className='text-xs'>Create password</span> <br />
            <input type="text" className='border w-full p-3 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)]' placeholder='At least 8 characters' /> <br />
          </div>
          <div>
            <span className='text-xs'>Confirm Password</span> <br />
            <input type="text" className='border w-full p-3 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)]' placeholder='At least 8 characters' /> <br />
          </div>
          <div className='mt-4'>
            <span className='text-xs text-[#737373]'>Password must contain at least 8 characters</span> <br />
          </div>
          <Link href="/dashboard">
            <button className='text-white bg-[#633CFF] mt-6 w-full p-3 rounded-lg my-3'>
              Create New Account
            </button>
          </Link>
          <div className='w-full text-center mt-4'>
            <span className='text-[#737373]'>
              Already have an account?
            </span> <Link href="/">Login</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
