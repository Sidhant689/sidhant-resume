import portfolioData from "../data/portfolioData"

const About = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-400 leading-relaxed text-justify">
            Innovative and results-driven Full Stack Developer with 3+ years of comprehensive 
          experience in designing, developing, and implementing cutting-edge web applications 
          using .NET Core, React.js, and modern software engineering practices. Proven track 
          record of delivering high-performance, scalable solutions that drive technological 
          advancement and business growth.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
          <a 
            href={`mailto:${portfolioData.email}`} 
            className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-primary transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="/Sidhant Resume.pdf" 
            download 
            className="border border-secondary text-secondary px-6 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
          >
            Download CV
          </a>
          </div>
      </div>
    </section>
  )
}

export default About