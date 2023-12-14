import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-16 lg:pt-[80px] mt-0 lg:mt-8">
      <Image src="/img/logo-devlinks-large.svg" className="mb-[55px]" alt="DevLinks logo" width={182} height={40}></Image>
      <div className='flex flex-col rounded-[18px] p-10 px-12 w-[476px] drop-shadow-2xl items-center bg-white text-center'>
        <div className='w-full text-left mb-8'>
          <h1 className='text-[32px] font-bold mb-2'>Login</h1>
          <span className='text-[16px] text-[#737373]'>Add your details below to get back into app </span>
        </div>
        <div className='w-full text-left'>
          <div className='mb-5'>
            <span className='text-xs'>Email Address</span> <br />
            <input type="text" className='border w-full p-3 rounded-lg mt-1' placeholder='e.g. alex@gmail.com' />
          </div>
          <div>
            <span className='text-xs'>Password</span> <br />
            <input type="text" className='border w-full p-3 rounded-lg mt-1' placeholder='Enter your password' /> <br />
          </div>
          <Link href="/dashboard">
            <button className='text-white bg-[#633CFF] mt-6 w-full p-3 rounded-lg my-3'>Login</button>
          </Link>
          <div className='w-full text-center mt-4'>
            <span className='text-[#737373]'>
              Don&apos;'t have an account?
            </span> <Link href="/createaccount">Create Account</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
