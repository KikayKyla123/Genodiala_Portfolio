import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="animated-bg"></div>
      
      {/* Animated Flowers */}
      <div className="flower flower-1">🌸</div>
      <div className="flower flower-2">🌺</div>
      <div className="flower flower-3">🌼</div>
      <div className="flower flower-4">🌷</div>
      <div className="flower flower-5">🌻</div>
      <div className="flower flower-6">🌹</div>
      <div className="flower flower-7">🏵️</div>
      <div className="flower flower-8">💐</div>
      
      <div className="hero-container">
        <div className="hero-image-section">
          <div className="image-wrapper">
            <img 
              src="/pictures/kyla.png" 
              alt="Kyla Dominic Genodiala" 
              className="profile-image"
            />
            <div className="image-decoration"></div>
          </div>
        </div>

        <div className="hero-details-section">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Kyla Dominic Genodiala</span>
          </h1>
          <p className="hero-subtitle">Frontend Developer | UI/UX Designer | QA Tester</p>
          
          <div className="hero-info">
            <div className="info-item">
              <Mail size={20} />
              <a href="mailto:kylagenodiala36@gmail.com">kylagenodiala36@gmail.com</a>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <a href="tel:+639682101142">+63 968 210 1142</a>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <span>San Fernando, Cebu</span>
            </div>
          </div>

          <p className="hero-description">
            Passionate developer and designer specializing in creating beautiful, user-friendly web applications. 
            Skilled in React.js, JavaScript, TypeScript, UI/UX design, and quality assurance with expertise in 
            frontend development, responsive design, and delivering high-quality software solutions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
              <Mail size={18} />
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/KikayKyla123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kyla-genodiala-00a65a310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kylagenodlala36@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ArrowDown size={24} className="bounce" />
      </div>
    </section>
  )
}

export default Hero
