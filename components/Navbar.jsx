"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='flex items-center text-[#fff] font-semibold justify-between md:mx-32 sm:mx-24 mx-2 py-2'>
        <Link href='/'>
            <Image width={70} height={70} src='/assets/logo.png' alt="logo" />
        </Link>

        {/* desktop */}
        <div className='hidden sm:flex gap-10 text-[18px]'>
            <Link href='/'>Home</Link>
            <Link href='/appointments'>Appointments</Link>
            <Link className='mx-12' href='/profile'>Login</Link>
        </div>

      {/* mobile */}

      <div className='sm:hidden relative flex'>
          <div>
            <Image onClick={() => setToggle((prev) => !prev)} className='invert' width={25} height={25} src={toggle ? '/assets/close.png' : '/assets/close.png'} alt='menu'/>
            {toggle ? 

            <div className='absolute top-20 right-0 gap-3 bg-[#427AB4] flex flex-col p-2 rounded-xl'>
                <Link href='/'>Home</Link>
                <Link href='/appointments'>Appointments</Link>
                <Link href='/profile'>Login</Link>
            </div> 
            
            : <></>}
          </div>
      </div>
    </nav>
  )
}

export default Navbar