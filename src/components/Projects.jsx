import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'CampusEats - Web & Mobile-Based System',
      description: 'Collaborated with a team to develop and deploy CampusEats using Spring Boot & React. Built responsive web and mobile interfaces using React.js (JavaScript/TypeScript). Integrated frontend and mobile apps with backend REST APIs for smooth, efficient data flow.',
      technologies: ['React.js', 'Spring Boot', 'TypeScript', 'REST API'],
      github: 'https://github.com/Lraccc/campus_eats.git',
      demo: '#',
      image: '/pictures/Campuseats.jpg',
      team: true
    },
    {
      title: 'NeighborNet - Community Sharing Platform',
      description: 'Team project: A user-friendly digital platform that brings neighbors together through sharing resources and skills. Collaborated on frontend development, enabling neighbors to lend and borrow items like tools, camping gear, and appliances. Built features to connect people to share expertise in cooking, gardening, and photography.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Penguinmans32/IT342-G3-NeighborNet.git',
      demo: '#',
      image: '/pictures/neighbor.jpg',
      team: true
    },
    {
      title: 'Wildcarts Web-Based System',
      description: 'Team collaboration project: Developed Wildcarts using React.js (JSX), Java, Spring Boot, and MySQL. Built responsive frontend components and integrated with backend RESTful APIs. Maintained version control with GitHub for smooth team workflow and efficient collaboration.',
      technologies: ['React.js', 'Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/Lraccc/wildcarts.git',
      demo: '#',
      image: '/pictures/Wildcarts.png',
      team: true
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={24} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
