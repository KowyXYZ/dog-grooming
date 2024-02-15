"use client"


import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Profile = () => {

    const {data: session} = useSession()
    const [appointments, setAppointments] = useState([])
    console.log(appointments)

    useEffect(() => {
      axios.get('http://localhost:3000/api/scheduling')
      .then(res => {console.log('succecfuly fetched data on profile page!'); setAppointments(res.data)})
      .catch(error => console.log(error))
    }, [])

  return (
    <div className='flex justify-center items-center flex-col py-8'>
        <h1 className='text-[32px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 uppercase'>Welcome to {session?.user?.name}'s Profile</h1>
        <p className='text-[32px] font-black uppercase text-[#FFAE12]'> ↓ Your appointments ↓</p>
        <div>
          {appointments.map((app, item) => {
            return(
              <div key={item} className='border-2 p-6 justify-center items-center flex flex-col text-[24px] font-black rounded-2xl'>
                <p> {app.name}  </p>
                <p>{app.number}</p>
                <p>{app.id}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Profile