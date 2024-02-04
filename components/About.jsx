import Image from 'next/image'


const About = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center py-12'>
        <Image src='/assets/aboutdog.png' width={500} height={500}/>

        <div className='items-center text-center justify-center flex flex-col'>
            <p className='text-[#427AB4] font-black text-[60px]'>About Us</p>
            <p className='w-[300px] sm:w-[600px] text-[#002953] mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis praesentium incidunt in, asperiores, deserunt, commodi hic cumque dolore libero quis ut maxime eius aspernatur laboriosam fugit debitis iure nihil sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor doloribus ipsum nam est harum provident excepturi ut ipsa doloremque cum praesentium, maiores possimus voluptates? Natus consequatur sit veritatis sunt!</p>
        </div>
    </div>
  )
}

export default About