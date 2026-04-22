import { useState } from 'react'
import './Projetos.css'

const projetos = [
  {
    id: 1,
    cat: 'dev',
    featured: true,
    img: 'kaori-capa.png',
    alt: 'Kaori Paper',
    tag: 'Dev',
    title: 'Kaori Paper — E-commerce de Papelaria 🌸',
    desc: 'Loja virtual completa com catálogo de produtos, carrinho, lista de favoritos, sistema de pedidos via WhatsApp e painel administrativo. Dados em tempo real com Firebase Firestore.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Netlify'],
    link: 'https://kaoripaper.netlify.app/',
    linkLabel: 'Visitar site →',
  },
  {
    id: 2,
    cat: 'dev',
    featured: false,
    img: 'agencia criativa web 1.png',
    alt: 'Criativa Web',
    tag: 'Dev',
    title: 'Agência Criativa Web',
    desc: 'Site institucional completo com HTML, CSS e JavaScript. Layout moderno, responsivo e voltado para conversão.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://kellyalvesdev.github.io/agencia-criativa-web/',
    linkLabel: 'Visitar site →',
  },
  {
    id: 3,
    cat: 'dev',
    featured: false,
    img: 'ronaldo.jpeg',
    alt: 'Corretor Ronaldo Peixoto',
    tag: 'Dev',
    title: 'Site Corretor Ronaldo Peixoto',
    desc: 'Site de catálogo de imóveis com foco em conversão de vendas. Design que transmite credibilidade e segurança.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://kellyalvesdev.github.io/Corretor-Ronaldo-Peixoto/index.html',
    linkLabel: 'Visitar site →',
  },
  {
    id: 4,
    cat: 'design',
    featured: true,
    img: 'bee creat.png',
    alt: 'Bee Creat',
    tag: 'Design',
    title: 'Rebranding — Bee Creat',
    desc: 'Rebranding completo e aplicação de marca para agência de marketing digital. Nova identidade visual com manual de uso.',
    tech: ['Branding', 'Illustrator', 'Figma'],
    link: 'https://www.behance.net/gallery/230724715/Rebranding-Bee-creat',
    linkLabel: 'Ver no Behance →',
  },
  {
    id: 5,
    cat: 'design',
    featured: false,
    img: 'Amaro.png',
    alt: 'AMARO',
    tag: 'Design',
    title: 'ID Visual — AMARO',
    desc: 'Identidade visual e aplicação de marca para lançamento de moda feminina. TCC EBAC — Design Gráfico.',
    tech: ['Branding', 'Photoshop', 'Illustrator'],
    link: 'https://www.behance.net/gallery/227790777/Tcc-eBAC',
    linkLabel: 'Ver no Behance →',
  },
  {
    id: 6,
    cat: 'design',
    featured: false,
    img: 'oliva studio.png',
    alt: 'Oliva Studio',
    tag: 'Design',
    title: 'ID Visual — Oliva Studio',
    desc: 'Design intimista e autêntico para agência criativa. Manual completo de identidade visual para marca fictícia.',
    tech: ['Branding', 'Illustrator'],
    link: 'https://www.behance.net/gallery/231779913/Teste-de-manual-de-identidade-(-Marca-Ficticia-)',
    linkLabel: 'Ver no Behance →',
  },
  {
    id: 7,
    cat: 'design',
    featured: false,
    img: 'floratta logo 2.png',
    alt: 'Floratta Café',
    tag: 'Design',
    title: 'ID Visual — Floratta Café & Bistrô',
    desc: 'Estética casual, minimalista e artesanal para cafeteria moderna. Paleta, tipografia e aplicações completas.',
    tech: ['Branding', 'Illustrator'],
    link: 'https://www.behance.net/gallery/234959563/Id-visual-Floratta-caf-bistro-(-portifolio)',
    linkLabel: 'Ver no Behance →',
  },
  {
    id: 8,
    cat: 'design',
    featured: false,
    img: 'Kelly Alves.png',
    alt: 'Kelly Alves',
    tag: 'Design',
    title: 'ID Pessoal — Kelly Alves',
    desc: 'Logo e identidade visual pessoal para portfólio de designer. Criatividade e clareza na apresentação profissional.',
    tech: ['Branding', 'Illustrator', 'Figma'],
    link: 'https://www.behance.net/gallery/234959227/Logo-ID-pessoal-ideias',
    linkLabel: 'Ver no Behance →',
  },
]

function Projetos() {
  const [filtro, setFiltro] = useState('todos')

  const projetosFiltrados = projetos.filter(
    (p) => filtro === 'todos' || p.cat === filtro
  )

  return (
    <section className="section projetos-section" id="projetos">
      <div className="section-inner">
        <span className="label">O que já construí</span>
        <h2>Projetos <span className="accent">em Destaque</span></h2>

        <div className="proj-tabs">
          {['todos', 'dev', 'design'].map((tab) => (
            <button
              key={tab}
              className={`proj-tab ${filtro === tab ? 'active' : ''}`}
              onClick={() => setFiltro(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {projetosFiltrados.map((proj) => (
            <div
              key={proj.id}
              className={`proj-card ${proj.featured ? 'featured' : ''}`}
            >
              <div className="proj-img-wrap">
                <img src={proj.img} alt={proj.alt} />
                <div className="proj-overlay">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">
                    {proj.linkLabel}
                  </a>
                </div>
              </div>
              <div className="proj-info">
                <span className={`proj-tag tag-${proj.cat}`}>{proj.tag}</span>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="proj-tech">
                  {proj.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
