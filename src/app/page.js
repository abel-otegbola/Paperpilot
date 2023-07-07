import Button from '@/components/button/button'
import SearchBar from '@/components/searchBar/page'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { FiCpu, FiDatabase, FiUserCheck } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="">
      <header className="md:flex bg-[url('/bg.svg')] bg-cover flex-col items-center justify-center md:px-[15%] px-4 py-[40px]">

          <p className="opacity-[0.8]">Personalized Recommendations, Seamless Automation, Configurable Interests</p>
          <h1 className="md:text-[30px] md:text-center text-2xl md:leading-[40px] leading-[30px] font-bold py-4">Personal Research Recommendation Engine - Get Curated Papers Delivered Straight to Your Inbox</h1>
          <p className="opacity-[0.8] mb-8 md:text-center md:w-[60%] leading-[25px]">Navigating the Skies of Research with Personalized Recommendations, Seamless Automation, and Timely Delivery of Relevant Papers for Your Intellectual Voyage.</p>
          
          <SearchBar query={""} actions={""} handleSearch={""}/>

        <Image src="/hero img.png" className='md:mt-[40px] my-[50px]' width={800} height={600} alt="paperpilot dashboard"/>
      </header>

    
      <h1 className="md:text-[30px] md:text-center text-2xl md:leading-[40px] leading-[30px] font-bold py-4">TOP FEATURES</h1>

      <section className="flex flex-wrap justify-between py-[7%] px-[5%]">
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded  bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiUserCheck /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Tailored Recommendations</h2>
            <p className='py-2 md:text-center'>We understand that your research interest may evolve over time and need to stay up-to-date</p>
            <p className='py-2 md:text-center'>Our platform offers customization options that allow you to fine-tune the recommendations according to your current focus.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded  bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiCpu /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Seamless User Experience</h2>
            <p className='py-2 md:text-center'>Enjoy a user-friendly interface that makes navigating through our vast repository of research materials a breeze.</p>
            <p className='py-2 md:text-center'>Say goodbye to information overload and effortlessly find resources that matter most to you.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded  bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiDatabase /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Customized Alerts</h2>
            <p className='py-2 md:text-center'>Set-up personalized alerts based on your research topics and receive notifications when new content matching your interests is added.</p>
            <p className='py-2 md:text-center'>Keep yourself involved in subjects that matters most to you, Identify ares of interest and braoden your horizon.</p>
        </div>
      </section>

      <section className='px-[5%] py-[30px] md:flex justify-center bg-slate-200/[0.05]'>
        <div className='md:max-w-[60%]'>
          <p className="opacity-[0.8]">PERSONALIZED AND USER-CENTERED</p>
          <h1 className="md:text-[30px] text-2xl md:leading-[50px] leading:-[20px] font-bold py-2">SERVICES</h1>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Our website utilizes advanced algorithms to understand your unique research interests and preferences</p>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Experience a curated selection of personalized recommendations that perfectly match your needs</p>
          <div className='leading-[25px] py-2 pb-6'>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Research Customization Profile</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Email Paper Delivery</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Research Paper Recommendation</span></p>
          </div>
        </div>

        <div>
          <Image src="/services img.png" className='md:mt-[20px] my-[30px]' width={500} height={300} alt="recommendations"/>
          <Button link={"/features"} text={"Learn More"} type={"secondary"} />
        </div>
      </section>


    </main>
  )
}
