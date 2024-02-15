import Navbar from '@components/Navbar'
import React from 'react'
import '../styles/globals.css'
import Provider from '@components/Provider'

export const metadata = {
  title: "BeautyFur",
  description: 'Best Dog Grooming in Town'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='flex flex-col'>
                <div className='bg-[#427AB4] w-full'>
                    <Navbar/>
                </div>
            
                {children}
          </div>
        </Provider>
       
      </body>
    </html>
  )
}

export default RootLayout