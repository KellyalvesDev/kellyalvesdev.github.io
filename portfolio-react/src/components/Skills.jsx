import './Skills.css'

const skillGroups = [
  {
    icon: '⚙️',
    title: 'Back-End',
    skills: [
      { name: 'Java', level: '75%' },
      { name: 'Spring Boot', level: '65%' },
      { name: 'MySQL / SQL', level: '60%' },
      { name: 'API REST', level: '50%' },
      { name: 'Arquitetura MVC', level: '45%' },
    ],
  },
  {
    icon: '🖥️',
    title: 'Front-End',
    skills: [
      { name: 'HTML5 / CSS3', level: '85%' },
      { name: 'JavaScript', level: '65%' },
      { name: 'Design Responsivo', level: '70%' },
      { name: 'Flexbox / CSS Grid', level: '55%' },
      { name: 'React (iniciante)', level: '40%' },
    ],
  },
  {
    icon: '🎨',
    title: 'Design',
    skills: [
      { name: 'Figma', level: '90%' },
      { name: 'Adobe Illustrator', level: '88%' },
      { name: 'Adobe Photoshop', level: '85%' },
      { name: 'Canva', level: '80%' },
      { name: 'Identidade Visual', level: '75%' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Ferramentas',
    skills: [
      { name: 'Git / GitHub', level: '75%' },
      { name: 'Scrum / Kanban', level: '60%' },
      { name: 'Google Ads / Meta Ads', level: '70%' },
      { name: 'Excel Avançado', level: '80%' },
      { name: 'CRM (Facilita)', level: '65%' },
    ],
  },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <span className="label">O que eu domino</span>
        <h2>Stack <span className="accent">Técnica</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="skill-bar" style={{ '--w': skill.level }}></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
