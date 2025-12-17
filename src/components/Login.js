import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('вход:', loginData);
    navigate('/');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('пароли не совпадают!');
      return;
    }
    console.log('регистрация:', registerData);
    navigate('/');
  };

  // ФОН С ИЗОБРАЖЕНИЕМ
const pageStyle = {
  minHeight: '100vh',
  backgroundImage: 'url(/images/fon.png)',  // Измените путь
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
};

  return (
    <div className="login-page" style={pageStyle}>
      <div className="login-container">
        <div className="login-card">
          {/* Заголовок меняется в зависимости от состояния */}
          {!isRegistering ? (
            <div className="login-title-box">
              <h1 className="login-title">вход в аккаунт</h1>
            </div>
          ) : (
            <div className="login-title-box">
              <h1 className="login-title">регистрация</h1>
            </div>
          )}

          {/* Форма входа */}
          <form onSubmit={handleLoginSubmit} className={`login-form ${isRegistering ? 'hidden' : ''}`}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                className="login-input"
                placeholder="логин"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="login-input"
                placeholder="пароль"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Войти
            </button>

            <div className="divider">
              <span className="divider-text">или</span>
            </div>

            <button
              type="button"
              className="register-toggle-button"
              onClick={() => setIsRegistering(true)}
            >
              Зарегистрироваться
            </button>
          </form>

          {/* Форма регистрации */}
          <form onSubmit={handleRegisterSubmit} className={`register-form ${!isRegistering ? 'hidden' : ''}`}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="login-input"
                placeholder="введите почту"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                className="login-input"
                placeholder="введите логин"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="login-input"
                placeholder="придумайте пароль"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className="login-input"
                placeholder="повторите пароль"
                required
              />
            </div>

            <div className="register-buttons">
              <button type="submit" className="register-submit-button">
                Зарегистрироваться
              </button>

              <button
                type="button"
                className="back-to-login-button"
                onClick={() => setIsRegistering(false)}
              >
                ← 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;