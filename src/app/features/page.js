const Features = () => {
    return (
        <div className="p-[5%]">
            <h1 className="p-4 border border-transparent border-y-slate-300/[0.2] text-3xl font-bold mb-4 text-center">FEATURES</h1>
            <p className="p-4 text-center leading-[30px] mb-8">For all academia, students and researchers, Awesome features to meet your specific needs</p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col md:items-center md:p-[40px] p-4 my-4 rounded bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
                    <h2 className='text-xl font-semibold my-4 md:text-center'>Tailored Recommendations</h2>
                    <p className='py-2 md:text-center'>We understand that your research interest may evolve over time and need to stay up-to-date</p>
                    <p className='py-2 md:text-center'>Our platform offers customization options that allow you to fine-tune the recommendations according to your current focus.</p>
                </div>
                <div className="flex flex-col md:items-center md:p-[40px] p-4 my-4 rounded bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
                    <h2 className='text-xl font-semibold my-4 md:text-center'>Seamless User Experience</h2>
                    <p className='py-2 md:text-center'>Enjoy a user-friendly interface that makes navigating through our vast repository of research materials a breeze.</p>
                    <p className='py-2 md:text-center'>Say goodbye to information overload and effortlessly find resources that matter most to you.</p>
                </div>
                <div className="flex flex-col md:items-center md:p-[40px] p-4 my-4 rounded bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
                    <h2 className='text-xl font-semibold my-4 md:text-center'>Customized Alerts</h2>
                    <p className='py-2 md:text-center'>Set-up personalized alerts based on your research topics and receive notifications when new content matching your interests is added.</p>
                    <p className='py-2 md:text-center'>Keep yourself involved in subjects that matters most to you, Identify ares of interest and braoden your horizon.</p>
                </div>
                <div className="flex flex-col md:items-center md:p-[40px] p-4 my-4 rounded bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
                    <h1 className="text-xl font-semibold my-4 md:text-center">Customization and Fine-tuning</h1>
                    <p className="py-2 md:text-center">Our website utilizes advanced algorithms to understand your unique research interests and preferences</p>
                    <p className="py-2 md:text-center">Experience a curated selection of personalized recommendations that perfectly match your needs</p>
                </div>
                <div className="flex flex-col md:items-center md:p-[40px] p-4 my-4 rounded bg-gradient-to-b from-primary/[0.05] to-dark/[0.05]  border border-gray-300/[0.2]">
                    <h2 className='text-xl font-semibold my-4 md:text-center'>Diverse Content Collection</h2>
                    <p className='py-2 md:text-center'>Gain access to a comprehensive database encompassing various fields of study</p>
                    <p className='py-2 md:text-center'>Whether you&apos;re interested in science, technology, history or arts, our platform offers a wide range of resources to satisfy your thirst for knowledge.</p>
                </div>
            </div>
        </div>
    )
}

export default Features;