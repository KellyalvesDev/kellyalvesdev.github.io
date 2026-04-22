import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">Disponível para oportunidades</div>
        <h1 className="hero-title">
          <span className="line">Kelly</span>
          <span className="line accent">Pitaluga</span>
        </h1>
        <p className="hero-sub">
          Full Stack Developer Java<br />
          <em>& Designer Gráfico</em>
        </p>
        <p className="hero-desc">
          Construo aplicações web completas — do back-end em Java e Spring Boot
          até interfaces responsivas com HTML, CSS e JavaScript.
          Trago o olhar de designer para cada linha de código.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="btn-primary">Ver projetos</a>
          <a href="https://github.com/KellyalvesDev" target="_blank" rel="noreferrer" className="btn-ghost">
            GitHub →
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-n">7+</span>
            <span className="stat-l">Projetos</span>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <span className="stat-n">2</span>
            <span className="stat-l">Stacks</span>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <span className="stat-n">4+</span>
            <span className="stat-l">Anos em Marketing</span>
          </div>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo-ring"></div>
        <img src="perfiill.jpg" alt="Kelly Pitaluga" className="hero-photo" />
        <div className="hero-tag tag-1">Java ☕</div>
        <div className="hero-tag tag-2">Spring Boot 🍃</div>
        <div className="hero-tag tag-3">Figma ✏️</div>
      </div>
    </section>
  )
}

export default Hero
