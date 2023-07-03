import Button from "@/components/button/button";

const About = () => {
    return (
        
        <div className="p-[5%]">
            <h1 className="p-4 border border-transparent border-y-slate-300/[0.2] text-3xl font-bold mb-4 text-center">ABOUT US</h1>
            <div className="md:flex">
                <div className="md:w-[60%] w-full">
                    <p className="p-4 text-center leading-[30px] mb-8"> </p>

                    <div className="my-6">
                        <p className="leading-[25px]">Paperpilot is a premier online platform dedicated to simplifying access to high-quality research papers for academics, students, researchers, and lecturers. Our mission is to bridge the gap between knowledge seekers and valuable scholarly resources, enabling users to stay at the forefront of their respective fields.</p>
                    </div>

                    <div className="my-6">
                        <h2 className="py-2 mb-2 text-xl ">Who we are</h2>
                        <p className="leading-[25px]">At Paperpilot, we are passionate about fostering a culture of continuous learning and intellectual growth. Our team consists of dedicated professionals with extensive backgrounds in academia, research, and technology. We understand the challenges faced by individuals in finding relevant and reliable research papers, and we are committed to providing a seamless and convenient solution.</p>
                    </div>
                    
                    <div className="my-6">
                        <h2 className="py-2 mb-2 text-xl ">What we offer</h2>
                        <p className="leading-[25px]">Our platform offers a comprehensive collection of research papers spanning a wide range of disciplines. We partner with reputable publishers, journals, and research institutions to curate an extensive repository of academic literature. Through our user-friendly interface, users can easily browse, search, and access research papers tailored to their specific interests and requirements.</p>
                    </div>
                    
                    <div className="my-6">
                        <p className="leading-[25px]">Join Paperpilot today and embark on a seamless journey of discovery and academic excellence. Let us simplify your access to cutting-edge research papers and empower you to unlock new frontiers of knowledge.</p>
                        <p className="leading-[25px]">For any inquiries or assistance, please don't hesitate to reach out to our dedicated support team. We are here to enhance your research experience and support your scholarly pursuits.</p>
                    </div>

                    <div className="my-6">
                        <p className="leading-[25px]">Start exploring the world of research with ResearchPapersDirect - Your Gateway to Knowledge!.</p>
                    </div>
                </div>

                <div className="md:w-[40%] p-[5%] w-full md:ml-4 rounded border border-gray-300/[0.3]">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary text-2xl font-bold my-2">Connect with us</h2>
                    <p>Reach us by sending a message or through our social media</p>
                    <form className="mt-6">
                        <label htmlFor="fullname">Fullname:</label>
                        <input id="fullname" type="text" className="w-full bg-transparent p-2 border border-gray-300/[0.3] mt-1 mb-6" placeholder="e.g John doe" />
                        
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" className="w-full bg-transparent p-2 border border-gray-300/[0.3] mt-1 mb-6" placeholder="e.g john@example.com" />

                        
                        <label htmlFor="subject">Subject:</label>
                        <input id="subject" type="text" className="w-full bg-transparent p-2 border border-gray-300/[0.3] mt-1 mb-6" placeholder="New feature request" />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" type="text" className="w-full min-h-[150px] bg-transparent p-2 border border-gray-300/[0.3] mt-1 mb-6" placeholder="new message"></textarea>

                        <Button link={"#"} text={"Send Message"} type={"primary"} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default About;