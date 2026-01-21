import React from 'react'
import api from '../../services/api';
import { useState } from 'react';

function RegisterForm() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  function submitForm() {
    api.post('/register', { email, password })
      .then(response => {
        console.log('Usuário registrado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao registrar usuário:', error);
      });
    }

  return (
        <div className="form-container">
            <h1>Registrar Usuário</h1>
            <form>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                <button type="submit" onClick={submitForm}>Registrar</button>
            </form>
        </div>
  )
}

export default RegisterForm