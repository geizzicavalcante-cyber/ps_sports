import React from 'react'
import './LoginForm.css'

function LoginForm() {

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm