import React, { useRef, useState } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
// Import required modules
import { Pagination, Navigation, Autoplay, Mousewheel, EffectCoverflow } from 'swiper/modules';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  return (
    <>
      <M.section
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Notable Projects</h2>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Explore my featured work and projects through this interactive showcase</p>
        
        <M.div variants={containerVariants} className="mt-8 py-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            mousewheel={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                coverflowEffect: {
                  rotate: 10,
                  depth: 50,
                }
              },
              640: {
                slidesPerView: 1.5,
                coverflowEffect: {
                  rotate: 20,
                  depth: 70,
                }
              },
              768: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 25,
                  depth: 80,
                }
              },
              1024: {
                slidesPerView: 3,
                coverflowEffect: {
                  rotate: 30,
                  depth: 100,
                }
              },
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Autoplay]}
            className="mySwiper py-10"
          >
            {portfolioData.projects.map((project, index) => (
              <SwiperSlide key={index} className="pb-12">
                <M.div
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.url && (
                    <div className="w-full flex-grow-0">
                      <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio container */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          <iframe
                            src={project.url}
                            className="w-full h-full border-b border-gray-100"
                            title={`Preview of ${project.name}`}
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gray-50 text-xs px-3 py-1 rounded-full text-gray-600 border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-400">{project.period}</p>
                      <button className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </M.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </M.div>
      </M.section>

      {/* Modal for Project Preview */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <M.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className="bg-white rounded-xl p-6 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject.name}</h3>
              <button
                className="text-gray-400 hover:text-gray-800 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                src={selectedProject.url}
                width="100%"
                height="500"
                className="border-0"
                title={`Preview of ${selectedProject.name}`}
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Project Description</h4>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">{selectedProject.period}</p>
              </div>
            </div>
          </M.div>
        </div>
      )}
    </>
  );
}

export default Projects;