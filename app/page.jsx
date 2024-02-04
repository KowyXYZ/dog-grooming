import About from "@components/About"
import Form from "@components/Form"
import Stats from "@components/Stats"
import Image from "next/image"


const Home = () => {
  return (
   <div>
     <div className='flex sm:flex-row flex-col justify-around items-center bg-[#FFAE12]'>
      <div className="sm:text-start text-center sm:justify-start justify-center gap-2 sm:items-start items-center flex flex-col">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 sm:text-[90px] text-[50px] uppercase font-black">Beauty-Fur</p>
        <p className="sm:w-[450px] w-[300px] text-gray-500 font-semibold capitalize text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatum facilis ipsa fugit deserunt. Recusandae voluptatibus perspiciatis temporibus enim adipisci dolore hic exercitationem itaque quibusdam ea, dolorem, molestias accusantium numquam?</p>
        <div className="bg-[#fff] rounded-2xl pb-[2px]">
         <button className="bg-[#427AB4] w-full text-[#fff] px-24 py-2 rounded-2xl font-semibold">More</button>
        </div>
      </div>
      <div>
        <Image src='/assets/herodog.png' width={500} height={500}/>
      </div>
    </div>

    <About/>
    <Stats/>  
    <Form/>

   </div>
  )
}

export default Home