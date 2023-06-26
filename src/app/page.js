import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-[5%] min-h-[500px] bg-[url('/bg.svg')] bg-cover">
      <header className="flex flex-col items-center justify-center py-[7%] md:px-[7%]">
        <p className="opacity-[0.8] text-center">Personalized Recommendations, Seamless Automation, Configurable Interests</p>
        <h1 className="md:text-[40px] text-2xl text-center md:leading-[50px] leading:-[20px] font-bold py-6 md:w-[83%]">Personal Research Recommendation Engine - Get Curated Papers Delivered Straight to Your Inbox</h1>
        <p className="opacity-[0.8] mb-6 md:w-[60%] text-center leading-[25px]">Navigating the Skies of Research with Personalized Recommendations, Seamless Automation, and Timely Delivery of Relevant Papers for Your Intellectual Voyage.</p>
        
        <Link className="px-[30px] py-[15px] sm:w-auto w-full text-center rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white hover:from-primary hover:to-primary" href="/signup">Get Started</Link>
      </header>
    </main>
  )
}
