"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useSession, signIn, signOut, getProviders } from 'next-auth/react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const {data: session} = useSession()

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async() => {
      const res = await getProviders()

      setProviders(res)
    }

    setUpProviders()
    
  }, [])
  



  return (
    <nav className='flex items-center text-[#fff] font-semibold justify-between md:mx-32 sm:mx-24 mx-2 py-2'>
        <Link href='/' className='flex justify-center items-center'>
            <Image width={100} height={100} src='/assets/logo.png' alt="logo" className='object-contain invert'/>
            <p className='text-[24px] text-[#FFAE12] font-black uppercase'>BeautyFur</p>
        </Link>

        {/* desktop */}
       {session?.user ?  <div className='hidden sm:flex gap-10 text-[18px] font-bold justify-center items-center'>
            <Link href='/'>Home</Link>
            <Link href='/appointments'>Appointments</Link>
            <Link href='/profile'>Profile</Link>
        </div> : 
            <>
              {providers && 
                Object.values(providers).map((provider) => {
                   return (
                      <div className='hidden sm:flex gap-10 text-[18px] font-bold justify-center items-center'>
                         <Link href='/'>Home</Link>
                         <Link href='/appointments'>Appointments</Link>
                         <button onClick={() => signIn(provider.id)} className=' px-4 py-2 bg-[#fff] text-[#000] rounded-2xl '>Sign In</button>
                           
                      </div>
                   )
                })
              }
            </>
        }

      {/* mobile */}

      <div className='sm:hidden relative flex'>
          <div>
            {toggle ? <p onClick={() => setToggle((prev) => !prev)}>X</p> : <Image onClick={() => setToggle((prev) => !prev)} className='invert' width={25} height={25} src={'/assets/menu.png'} alt='menu'/> }
            {toggle ? 

            <div className='absolute top-20 right-0 gap-3 bg-[#427AB4] flex flex-col p-2 rounded-xl'>
                <Link href='/'>Home</Link>
                <Link href='/appointments'>Appointments</Link>
                <button >Sign In</button>
            </div> 
            
            : <></>}
          </div>
      </div>
    </nav>
  )
}

export default Navbar