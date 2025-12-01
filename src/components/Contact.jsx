import { Mail, Github, Phone } from 'lucide-react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out to me through any of these channels</p>

        <div className="contact-items">
          <div className="contact-item">
            <Mail size={24} />
            <div>
              <h4>Email</h4>
              <a href="mailto:kylagenodiala36@gmail.com">kylagenodiala36@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <Phone size={24} />
            <div>
              <h4>Phone</h4>
              <a href="tel:+639682210142">+63 968 221 0142</a>
            </div>
          </div>
          
          <div className="contact-item">
            <Github size={24} />
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/KikayKyla123" target="_blank" rel="noopener noreferrer">github.com/KikayKyla123</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
