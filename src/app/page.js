import Image from 'next/image'
import Link from 'next/link'
import { FiCpu, FiDatabase, FiUserCheck } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="">
      <header className="md:flex bg-[url('/bg.svg')] bg-cover items-center justify-center px-[5%] py-[40px]">
        <div className='py-[5%]'>

          <p className="opacity-[0.8]">Personalized Recommendations, Seamless Automation, Configurable Interests</p>
          <h1 className="md:text-[40px] text-2xl md:leading-[50px] leading:-[20px] font-bold py-6">Personal Research Recommendation Engine - Get Curated Papers Delivered Straight to Your Inbox</h1>
          <p className="opacity-[0.8] mb-8 md:w-[80%] leading-[25px]">Navigating the Skies of Research with Personalized Recommendations, Seamless Automation, and Timely Delivery of Relevant Papers for Your Intellectual Voyage.</p>
          
          <Link className="px-[30px] py-[15px] sm:w-auto w-full text-center rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white hover:from-primary hover:to-primary" href="/signup">Get Started</Link>

        </div>
        <Image src="/bg.png" className='md:mt-[20px] my-[50px]' width={600} height={700} alt="paperpilot"/>
      </header>

      <section className="flex flex-wrap justify-between py-[7%] px-[5%]">
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiUserCheck /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Tailored Recommendations</h2>
            <p className='py-2 md:text-center'>Our website utilizes advanced algorithms to understand your unique research interests and preferences.</p>
            <p className='py-2 md:text-center'>Experience a curated selection of personalized recommendations that perfectly match your needs.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiCpu /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Seamless User Experience</h2>
            <p className='py-2 md:text-center'>Enjoy a user-friendly interface that makes navigating through our vast repository of research materials a breeze.</p>
            <p className='py-2 md:text-center'>Say goodbye to information overload and effortlessly find resources that matter most to you.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiDatabase /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Diverse Content Collection</h2>
            <p className='py-2 md:text-center'>Gain access to a comprehensive database encompassing various fields of study.</p>
            <p className='py-2 md:text-center'>Whether you&apos;re interested in science, technology, history or arts, our platform offers a wide range of resources to satisfy your thirst for knowledge.</p>
        </div>
      </section>

      <div className='flex flex-col md:items-center px-[5%]'>
        <p className='md:text-center mb-4'>Check out more awesome features.</p>
        <Link className="px-[30px] py-[15px] sm:w-auto w-full text-center rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white hover:from-primary hover:to-primary" href="/features">All features</Link>
      </div>

      <section>
        
      </section>
    </main>
  )
}
