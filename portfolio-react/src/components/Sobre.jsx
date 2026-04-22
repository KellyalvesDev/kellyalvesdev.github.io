import './Sobre.css'

function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="section-inner sobre-inner">
        <div className="sobre-text">
          <span className="label">Quem sou eu</span>
          <h2>Desenvolvedora com<br /><span className="accent">olho de designer</span></h2>
          <p>
            Em transição de carreira para tecnologia, cursando <strong>Desenvolvimento Full Stack Java</strong>{' '}
            na EBAC. Formada em Administração pela UNOPAR, com experiência sólida em marketing digital,
            design gráfico e gestão de projetos criativos.
          </p>
          <p>
            Trago a visão analítica da gestão e a sensibilidade visual do design para escrever código
            limpo, interfaces funcionais e experiências que realmente conectam com as pessoas.
          </p>
          <div className="sobre-chips">
            <span className="chip">Anápolis, GO</span>
            <span className="chip">Aberta a remoto</span>
            <span className="chip">Cursando EBAC 2025</span>
          </div>
        </div>

        <div className="sobre-links">
          <a href="https://www.linkedin.com/in/kelly-tauane-alves-pitaluga-68b0a4212" target="_blank" rel="noreferrer" className="link-card">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/KellyalvesDev" target="_blank" rel="noreferrer" className="link-card">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://www.behance.net/Kellypitalugaa" target="_blank" rel="noreferrer" className="link-card">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.791 1.856 1.865 1.856.769 0 1.275-.43 1.47-1.016l2.42.19zM15.971 13h4.06c-.064-1.295-.73-1.964-1.921-1.964-1.16 0-1.986.717-2.139 1.964zM6.647 7.5c.992 0 1.981.337 2.577 1.088.47.6.694 1.286.694 2.013 0 1.316-.665 2.13-1.672 2.528 1.264.375 2.024 1.341 2.024 2.752 0 1.975-1.432 3.619-4.034 3.619H1V7.5h5.647zM5 10.82h1.44c.778 0 1.207-.4 1.207-1.13 0-.745-.44-1.124-1.194-1.124H5v2.254zm0 5.003h1.603c.924 0 1.422-.453 1.422-1.287 0-.847-.52-1.313-1.43-1.313H5v2.6z"/></svg>
            Behance
          </a>
          <a href="mailto:kellytalvesp@gmail.com" className="link-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            E-mail
          </a>
          <a href="https://www.instagram.com/kellyalves.design/" target="_blank" rel="noreferrer" className="link-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sobre
