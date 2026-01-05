import React from 'react'
import './CadastroForm.css'

function CadastroForm() {
  return (
    <div className="form-container">
      <form>
        <h1>Cadastrar novo aluno</h1>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Data de Nascimento" />
        <input type="tel" placeholder="Telefone" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default CadastroForm