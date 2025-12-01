import { ShoppingCart, MapPin, Video, Shield, Bell, Star } from 'lucide-react'
import './Features.css'

function Features() {
  const features = [
    {
      title: 'Real-time GPS Tracking',
      description: 'Advanced GPS tracking monitors dashers in real-time, showing exact location and estimated delivery time on interactive maps.',
      icon: <MapPin size={32} />,
      image: '/pictures/Feature 1.jpg',
      color: '#8b5cf6'
    },
    {
      title: 'CampusEats Recommendations',
      description: 'Personalized food recommendations based on your preferences, exploring various shops and discovering new delicious meals.',
      icon: <Star size={32} />,
      image: '/pictures/Feature 3.jpg',
      color: '#3b82f6'
    },
    {
      title: 'Live Video Streaming',
      description: 'Watch live streams from restaurants and food preparation in real-time, ensuring transparency and food quality.',
      icon: <Video size={32} />,
      image: '/pictures/Feature 5.jpg',
      color: '#06b6d4'
    },
    {
      title: 'Microsoft Authentication',
      description: 'Secure login system integrated with Microsoft authentication for university students and staff members.',
      icon: <Shield size={32} />,
      image: '/pictures/Feature 2.jpg',
      color: '#f59e0b'
    }
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">CampusEats Features</h2>
        <p className="section-subtitle">Innovative features designed for the ultimate campus food delivery experience</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item" style={{ '--feature-color': feature.color }}>
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img src={feature.image} alt={feature.title} className="feature-screenshot" />
                  </div>
                  <div className="phone-button"></div>
                </div>
              </div>
              <div className="feature-content">
                <div className="feature-icon" style={{ background: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
