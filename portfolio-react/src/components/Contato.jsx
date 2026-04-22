import { useState } from 'react'
import './Contato.css'

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = `Olá Kelly! 👋\n\nMeu nome é ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`
    const url = `https://wa.me/5562991008898?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
  }

  return (
    <section className="section contato-section" id="contato">
      <div className="section-inner contato-inner">
        <div className="contato-text">
          <span className="label">Bora conversar?</span>
          <h2>Entre em <span className="accent">Contato</span></h2>
          <p>
            Estou aberta a oportunidades de emprego, freelas e colaborações.
            Se quiser bater um papo sobre tecnologia, design ou projetos, me manda uma mensagem!
          </p>
          <div className="contato-links">
            <a href="mailto:kellytalvesp@gmail.com">📧 kellytalvesp@gmail.com</a>
            <a href="https://linkedin.com/in/kelly-tauane-alves-pitaluga" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            <a href="https://github.com/kellyalvesDev" target="_blank" rel="noreferrer">💻 GitHub</a>
            <a href="https://www.behance.net/Kellypitalugaa" target="_blank" rel="noreferrer">🎨 Behance</a>
          </div>
        </div>

        <form className="contato-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Conta mais sobre o projeto ou oportunidade..."
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Enviar mensagem ✉️</button>
        </form>
      </div>
    </section>
  )
}

export default Contato
