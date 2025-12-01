import { User, Target, Lightbulb } from 'lucide-react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate frontend developer and UI/UX designer with a strong foundation in creating intuitive, 
              responsive web applications. Experienced in React.js, JavaScript, TypeScript, HTML, CSS, and modern design tools 
              like Figma and Tailwind CSS. I combine technical skills with design thinking to build user-centered solutions.
            </p>
            <p>
              Beyond frontend development, I bring valuable quality assurance expertise, ensuring every project meets 
              the highest standards through rigorous testing and attention to detail. Strong team collaborator with 
              problem-solving skills, dedicated to continuous learning and delivering exceptional digital experiences.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <User size={32} />
              </div>
              <h3>Who I Am</h3>
              <p>A frontend developer and designer passionate about creating beautiful, functional user experiences</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h3>My Goal</h3>
              <p>To craft pixel-perfect interfaces and deliver high-quality web applications that users love</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <Lightbulb size={32} />
              </div>
              <h3>My Approach</h3>
              <p>User-centered design, clean code, thorough testing, and collaborative teamwork</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
