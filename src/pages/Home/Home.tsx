import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { useState } from 'react'
import './Home.css'

function Home() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
      {isLogin ? <LoginForm/> : <RegisterForm/>}
      <div className='switchContainer'>
        <button className="switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Ir para Cadastro' : 'Ir para Login'}
        </button>
      </div>
    </div>
  )
}

export default Home