import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center jusitfy-between'>
        <div>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Appointments</Link>
        </div>

        <div>
            <img src='/assets/logo.png' alt="" />
        </div>
    </nav>
  )
}

export default Navbar