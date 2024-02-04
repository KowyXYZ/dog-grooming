import Navbar from '@components/Navbar'
import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: "BeautyFur",
  description: 'Best Dog Grooming in Town'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col'>
              <div className='bg-[#427AB4] w-full'>
                   <Navbar/>
              </div>
           
              {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout