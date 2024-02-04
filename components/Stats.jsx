import Image from 'next/image'
import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col bg-[#EDE6D6] justify-center text-center items-center py-8 gap-12'>
        <p className='text-[#427AB4] text-[42px] font-black uppercase'>About Our Cosmetics And Numbers!</p>

        <div className='flex flex-col sm:flex-row gap-24'>
            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/dogico.png' width={100} height={100}/>
                <p className='text-[#FFAE12] font-bold uppercase text-[20px]'>500+ Hairstyles Done</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/sciico.png' width={100} height={100}/>
                <p className='text-[#FFAE12] font-bold uppercase text-[20px]'>300+ Regular Guests</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/ratico.png' width={100} height={100}/>
                <p className='text-[#FFAE12] font-bold uppercase text-[20px]'>10 Years Experience</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/aplico.png' width={100} height={100}/>
                <p className='text-[#FFAE12] font-bold uppercase text-[20px]'>2 Degrees</p>
            </div>


           
        </div>
    </div>
  )
}

export default Stats