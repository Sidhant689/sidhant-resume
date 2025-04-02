import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
  import { SiDotnet, SiPostgresql, SiTypescript } from 'react-icons/si';
  
  const portfolioData = {
    name: 'Sidhant Biswal',
    title: 'Full Stack Developer',
    email: 'biswalsidhant.spb@gmail.com',
    phone: '+91 7064119508',
    location: 'Bengaluru, India',
    socialLinks: [
      { 
        icon: FaLinkedin, 
        url: 'https://linkedin.com/in/sidhant-priyadarshan-biswal' 
      },
      { 
        icon: FaGithub, 
        url: 'https://github.com/Sidhant689' 
      }
    ],
    skills: [
      { icon: FaReact, name: 'React.js' },
      { icon: SiDotnet, name: '.NET Core' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: FaDocker, name: 'Docker' }
    ],
    experiences: [
      {
        company: 'SECON Private Limited',
        role: 'R&D Software Engineer',
        period: 'Aug 2022 – Present',
        highlights: [
          'Architected web solutions using .NET Core and PostgreSQL',
          'Developed high-performance web applications',
          'Created responsive React.js interfaces'
        ]
      }
    ],
    projects: [
      {
        name: 'Project Monitoring System',
        description: 'Comprehensive web application for tracking organizational targets',
        technologies: ['ASP.NET Core', 'Bootstrap', 'PostgreSQL'],
        period: 'Nov 2022 – Apr 2023',
        url: ''
      },
      {
        name: 'Flood Monitoring Web Application',
        description: 'Real-time flood monitoring platform with advanced reporting',
        technologies: ['ASP.NET MVC', 'PostgreSQL', 'RESTful APIs'],
        period: 'May 2023 – Oct 2023',
        url: ''
      },
      {
        name: 'AQI',
        description: 'Web application for monitoring air quality index',
        technologies: ['React.js', 'Tailwind CSS'],
        period: 'Jan 2024',
        url: ''
      },
      {
        name: 'Weather UV Index',
        description: 'Web application for monitoring UV index',
        technologies: ['React.js', 'Tailwind CSS'],
        period: 'Jan 2024',
        url: ''
      }
    ],
    achievements: [
      'Implemented robust authentication system',
      'Optimized database queries reducing response time by 20%',
      'Led cross-functional team in successful feature development',
    ]
  };

  export default portfolioData;