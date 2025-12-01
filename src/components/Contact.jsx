import { useState } from 'react'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8e7e4b3a-1c2d-4a5f-9e3b-6c8a7d4f2e1b', // You'll replace this with your own key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`
        })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        alert('Thank you! Your message has been sent successfully. I will get back to you soon!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        alert('Oops! Something went wrong. Please try again or email me directly.')
      }
    } catch (error) {
      setSubmitStatus('error')
      alert('Failed to send message. Please email me directly at kylagenodlala36@gmail.com')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together on your next project</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through any of these channels</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:kylagenodlala36@gmail.com">kylagenodlala36@gmail.com</a>
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
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>San Fernando, Cebu</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
