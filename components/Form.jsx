"use client"


import Image from 'next/image'

const Form = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-around  items-center py-12'>

        <Image className='reverse hidden sm:flex' src='/assets/contactdog.png' width={700} height={700}/>


        <form className='bg-[#B2CDEF] flex flex-col rounded-2xl p-10 gap-4  w-[350px] sm:w-[700px]'>
                <p className='text-[#0C4178] text-[24px]'>Contact Us!</p>
            <div className='flex sm:flex-row flex-col gap-4'>
               <div className='flex flex-col '>
                    <label className='text-[#427AB4]  font-semibold'>Name</label>
                    <input className='bg-[#F5EFE4] rounded-2xl p-2 px-4 opacity-40 placeholder-[black]' type="text" placeholder='Name' />
               </div>

               <div className='flex flex-col'>
                    <label className='text-[#427AB4] font-semibold'>Last Name</label>
                    <input className='bg-[#F5EFE4] rounded-2xl p-2 px-4 opacity-40 placeholder-[black]' type="text" placeholder='Last Name' />
               </div>
            </div>

            <div className='flex sm:flex-row flex-col gap-4'>
               <div className='flex flex-col'>
                    <label className='text-[#427AB4] font-semibold'>Email</label>
                    <input className='bg-[#F5EFE4] rounded-2xl p-2 px-4 opacity-40 placeholder-[black]' type="email" placeholder='Email' />
               </div>

               <div className='flex flex-col'>
                    <label className='text-[#427AB4] font-semibold'>Phone Number</label>
                    <input className='bg-[#F5EFE4] rounded-2xl p-2 px-4 opacity-40 placeholder-[black]'  type="number" placeholder='Phone Number' />
               </div>
            </div>

            <div className='flex flex-col'>
                <label className='text-[#427AB4] font-semibold'>Message</label>
                <textarea className='bg-[#F5EFE4] rounded-2xl p-2 opacity-40 placeholder-[black]' placeholder='Message' style={{resize: 'none'}} cols="30" rows="10"></textarea>
            </div>

            <button className='bg-[#FFAE12] text-[#fff] rounded-2xl p-2 font-semibold'>Submit</button>

        </form>
    </div>
  )
}

export default Form