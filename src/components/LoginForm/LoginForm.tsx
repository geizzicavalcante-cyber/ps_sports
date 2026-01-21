import React from 'react'
import './LoginForm.css'
import api from '../../services/api';
import { useState } from 'react';

function LoginForm() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function submitForm() {
        api.post('/login', { email, password })
            .then(response => {
                console.log('Login realizado com sucesso:', response.data);
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error);
            });
        }

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                <button type="submit" onClick={submitForm}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm