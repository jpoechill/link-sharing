'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  // Form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  // Verification checks
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordVerifyIsValid, setPasswordVerifyIsValid] = useState(true);
  const [attemptedVerify, setAttemptedVerify] = useState(false)

  function verifyCreds() {
    // email must be valid
    // email must not be empty
    if (email !== '') {
      setEmailIsValid(true)
    } else {
      setEmailIsValid(false)
    }

    if (password !== '') {
      setPasswordIsValid(true)
    } else {
      setPasswordIsValid(false)
    }

    if (passwordVerify !== '') {
      setPasswordVerifyIsValid(true)
    } else {
      setPasswordVerifyIsValid(false)
    }
    // password must be at least 8 characters
    // password must match passwordVerify

    // if (password !== passwordVerify) {
    //   alert('Passwords do not match')
    // }
    setAttemptedVerify(true)
  }

  useEffect(() => {
    if (emailIsValid && passwordIsValid && passwordVerifyIsValid && attemptedVerify) {
      router.push('/dashboard')
    }
  }, [router, emailIsValid, passwordIsValid, passwordVerifyIsValid, attemptedVerify]);


  return (
    <main className="flex flex-col items-center pt-16 lg:pt-[80px] mt-0 lg:mt-8">
      {/* <Image src="/img/logo-devlinks-large.svg" className="mb-[55px]" alt="DevLinks logo" width={182} height={40}></Image> */}
      <div className='flex flex-col rounded-[18px] p-10 px-12 w-[476px] drop-shadow-2xl items-center bg-white text-center'>
        <div className='w-full text-left mb-8'>
          <h1 className='text-[32px] font-bold mb-2'>Create account</h1>
          <span className='text-[16px] text-[#737373]'>Let&apos;s get you started sharing your links!</span>
        </div>
        <div className='w-full text-left'>
          <div className='mb-5'>
            <span className='text-xs'>Email Address</span> <br />
            <div className="relative flex">
              <div className="rounded-lg absolute pointer-events-none flex justify-between items-center w-full p-3 mt-2">
                <div className='text-[12px]'>
                  <Image src="../../img/icon-email.svg" className='inline' width={13} height={10} alt="Email Icon" />&nbsp;
                </div>
                <div className='text-[#FF3939] text-[12px]'>
                  <span className={emailIsValid === false ? '' : 'hidden'}>
                    Can&apos;t be empty
                  </span>
                </div>
              </div>
            </div>
            <input type="text" onChange={(e) => setEmail(e.target.value)} className={`
            border w-full p-3 pl-10 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)] 
            ${(emailIsValid === true ? '' : 'border-[#FF3939] text-[#FF3939] focus:border-[#FF3939] focus:ring-[#FF3939]')} `} placeholder='e.g. alex@gmail.com' />
          </div>
          <div className='mb-5'>
            <span className='text-xs'>Create Password</span> <br />
            <div className="relative flex">
              <div className="rounded-lg absolute pointer-events-none flex justify-between items-center w-full p-3 mt-2">
                <div className='text-[12px]'>
                  <Image src="../../img/icon-password.svg" className='inline' width={13} height={10} alt="Email Icon" />&nbsp;
                </div>
                <div className='text-[#FF3939] text-[12px]'>
                  <span className={passwordIsValid === false ? '' : 'hidden'}>
                    Please check again
                  </span>
                </div>
              </div>
            </div>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className={`
            border w-full p-3 pl-10 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)] 
            ${(passwordIsValid === true ? '' : 'border-[#FF3939] text-[#FF3939] focus:border-[#FF3939] focus:ring-[#FF3939]')} `} placeholder='At least 8 characters' />
          </div>
          <div className='mb-5'>
            <span className='text-xs'>Confirm Password</span> <br />
            <div className="relative flex">
              <div className="rounded-lg absolute pointer-events-none flex justify-between items-center w-full p-3 mt-2">
                <div className='text-[12px]'>
                  <Image src="../../img/icon-password.svg" className='inline' width={13} height={10} alt="Email Icon" />&nbsp;
                </div>
                <div className='text-[#FF3939] text-[12px]'>
                  <span className={passwordVerifyIsValid === false ? '' : 'hidden'}>
                    Please check again
                  </span>
                </div>
              </div>
            </div>
            <input type="password" onChange={(e) => setPasswordVerify(e.target.value)} className={`
            border w-full p-3 pl-10 rounded-lg mt-1 focus:shadow-[0_0_32px_0_rgba(90,60,255,.3)] 
            ${(passwordVerifyIsValid === true ? '' : 'border-[#FF3939] text-[#FF3939] focus:border-[#FF3939] focus:ring-[#FF3939]')} `} placeholder='At least 8 characters' />
          </div>
          <div className='mt-4'>
            <span className='text-xs text-[#737373]'>Password must contain at least 8 characters</span> <br />
          </div>
          {/* <Link href="/dashboard"> */}
          <button onClick={() => { verifyCreds() }} className='text-white bg-[#633CFF] mt-6 w-full p-3 rounded-lg my-3'>
            Create New Account
          </button>
          {/* </Link> */}
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
