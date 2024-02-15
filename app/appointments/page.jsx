"use client"

import axios from "axios"
import { useSession } from "next-auth/react"
import { useState } from "react"

const page = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState(0)

    const {data: session} = useSession()
    
    const id = session?.user?.id



    const handleSubmit = async(e) => {
        e.preventDefault()

        if(name === '' && number === 0) return
        axios.post('http://localhost:3000/api/scheduling/new', {name, number, id})
        .then(res => {console.log('succesfuly sent data to databse from appointments paged')})
        .catch(err => console.log(err))
    }

  return (
    <div className='flex justify-center items-center flex-col py-12 text-center'>
        <h1 className='text-[32px] font-black uppercase text-[#FFAE12]'>Make your appointment</h1>
        <p className='text-[gray]'>Our worktime is based on how much appointments are made during this week!<br/> So if we cant make you a free space it might be available next week</p>
        <form className='mt-20 flex flex-col border-2 text-center p-4 gap-8 rounded-3xl justify-center items-center bg-[lightblue]' onSubmit={handleSubmit}>
            <div>
                <h1 className='mt-2 font-black text-[24px] uppercase'>Fill your information here.</h1>
                <p className='text-[gray]'>Make sure to leave right information </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <label className='font-black uppercase'>Your Full Name </label>
                <input className='p-2 rounded-2xl w-[300px]' type="text" placeholder='Enter your full name' onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                <label className='font-black uppercase'>Your phone number</label>
                <input className='p-2 rounded-2xl w-[300px]' type="number"  placeholder='Enter your Phone Number' onChange={(e) => setNumber(e.target.value)}/>
            </div>

            <button className='bg-[#FFAE12] py-2 px-5 font-semibold rounded-2xl uppercase w-full' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default page