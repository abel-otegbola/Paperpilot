import Button from '@/components/button/button'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { FiCpu, FiDatabase, FiUserCheck } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="">
      <header className="md:flex bg-[url('/bg.svg')] bg-cover items-center justify-center px-[5%] py-[40px]">
        <div className='py-[5%] md:max-w-[50%]'>

          <p className="opacity-[0.8]">Personalized Recommendations, Seamless Automation, Configurable Interests</p>
          <h1 className="md:text-[40px] text-3xl md:leading-[50px] leading-[40px] font-bold py-6">Personal Research Recommendation Engine - Get Curated Papers Delivered Straight to Your Inbox</h1>
          <p className="opacity-[0.8] mb-8 md:w-[80%] leading-[25px]">Navigating the Skies of Research with Personalized Recommendations, Seamless Automation, and Timely Delivery of Relevant Papers for Your Intellectual Voyage.</p>
          
          <Button link={"/signup"} text={"EGet Started"} type={"primary"} />

        </div>
        <Image src="/bg.png" className='md:mt-[20px] my-[50px]' width={600} height={700} alt="paperpilot"/>
      </header>

      <section className="flex flex-wrap justify-between py-[7%] px-[5%]">
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100 dark:bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiUserCheck /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Tailored Recommendations</h2>
            <p className='py-2 md:text-center'>We understand that your research interest may evolve over time and need to stay up-to-date</p>
            <p className='py-2 md:text-center'>Our platform offers customization options that allow you to fine-tune the recommendations according to your current focus.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100 dark:bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiCpu /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Seamless User Experience</h2>
            <p className='py-2 md:text-center'>Enjoy a user-friendly interface that makes navigating through our vast repository of research materials a breeze.</p>
            <p className='py-2 md:text-center'>Say goodbye to information overload and effortlessly find resources that matter most to you.</p>
        </div>
        <div className="md:w-[30%] flex flex-col md:items-center md:p-[2%] p-4 my-4 rounded bg-slate-100 dark:bg-slate-100/[0.05]">
            <p className='rounded p-[10px] px-[15px] w-fit text-3xl text-white bg-gradient-to-r from-fuchsia-600/[0.3] to-primary/[0.3]'><FiDatabase /></p>
            <h2 className='text-2xl font-semibold my-4 md:text-center'>Customized Alerts</h2>
            <p className='py-2 md:text-center'>Set-up personalized alerts based on your research topics and receive notifications when new content matching your interests is added.</p>
            <p className='py-2 md:text-center'>Keep yourself involved in subjects that matters most to you, Identify ares of interest and braoden your horizon.</p>
        </div>
      </section>

      <section className='px-[5%] md:flex justify-center'>
        <div className='md:max-w-[60%]'>

          <p className="opacity-[0.8]"></p>
          <h1 className="md:text-[30px] text-2xl md:leading-[50px] leading:-[20px] font-bold py-2">Customization and Fine-tuning</h1>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Our website utilizes advanced algorithms to understand your unique research interests and preferences</p>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Experience a curated selection of personalized recommendations that perfectly match your needs</p>
          <div className='leading-[25px] py-2 pb-6'>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Research Customization</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Intelligent Search and Recommendation</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Preferences Adjustment</span></p>
          </div>
          
          <Button link={"/features"} text={"Learn More"} type={"secondary"} />

        </div>
        <Image src="/recommendations.png" className='md:mt-[20px] my-[50px]' width={400} height={500} alt="recommendations"/>
      </section>

      <section className='px-[5%] flex md:flex-row flex-col justify-center'>
        <Image src="/diverse_content.png" className='md:mt-[20px] my-[50px] md:order-1 order-2 ' width={400} height={500} alt="diverse contents"/>
        <div className=' md:pl-[5%] md:max-w-[60%] md:order-2 order-1'>

          <p className="opacity-[0.8]"></p>
          <h1 className="md:text-[30px] text-2xl md:leading-[50px] leading:-[20px] font-bold py-2">Diverse Content Collection</h1>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Gain access to a comprehensive database encompassing various fields of study</p>
          <p className="opacity-[0.8] mb-4 md:w-[80%] leading-[25px]">Whether you&apos;re interested in science, technology, history or arts, our platform offers a wide range of resources to satisfy your thirst for knowledge.</p>
          <div className='leading-[25px] py-2 pb-6'>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Efficient Search Functionality</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Diverse Platforms</span></p>
            <p className='flex items-center gap-2 py-2'><FaCheckCircle className='text-green-500' /> <span>Up-to-date and Comprehensive</span></p>
          </div>
          <Button link={"/features"} text={"Learn More"} type={"secondary"} />

        </div>
      </section>

      <section>
        
      </section>
    </main>
  )
}
