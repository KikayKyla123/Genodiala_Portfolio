import './Skills.css'

function Skills() {
  const skills = [
    {
      name: 'React.js',
      category: 'Frontend',
      level: 90,
      logo: '⚛️',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 85,
      logo: '📜',
      color: '#F7DF1E'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 80,
      logo: '📘',
      color: '#3178C6'
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      level: 95,
      logo: '🌐',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      level: 90,
      logo: '🎨',
      color: '#1572B6'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 85,
      logo: '💨',
      color: '#06B6D4'
    },
    {
      name: 'Java',
      category: 'Backend',
      level: 30,
      logo: '☕',
      color: '#007396'
    },

    {
      name: 'MongoDB',
      category: 'Database',
      level: 20,
      logo: '🍃',
      color: '#47A248'
    },
    {
      name: 'SQL',
      category: 'Database',
      level: 40,
      logo: '🗄️',
      color: '#4479A1'
    },
    {
      name: 'Git & GitHub',
      category: 'Tools',
      level: 50,
      logo: '🔧',
      color: '#F05032'
    },
    {
      name: 'TestRail',
      category: 'QA',
      level: 85,
      logo: '✅',
      color: '#8B5CF6'
    },
    {
      name: 'Figma',
      category: 'Design',
      level: 80,
      logo: '🎯',
      color: '#F24E1E'
    },
   
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">My technical expertise and proficiency levels</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
              <div className="skill-header">
                <div className="skill-logo">{skill.logo}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
