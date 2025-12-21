import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Account.css';

function Account() {
  const navigate = useNavigate();
  const [aboutMe, setAboutMe] = useState('Введите информацию о себе...');

  const handleAboutMeClick = () => {
    const newAboutMe = prompt('Введите информацию о себе:', aboutMe);
    if (newAboutMe !== null) {
      setAboutMe(newAboutMe);
    }
  };

  const handleAddPublication = () => {
    alert('Функция добавления публикации');
  };

  const handleFavoritesClick = () => {
    alert('Переход к избранным статьям');
  };

  return (
    <div className="account-page">
      <div className="container">
        {/* Шапка с логотипом */}
        <header className="main-header">
          <div className="logo-section">
            <Link to="/" className="logo">
              <h1 className="logo-title">БИБЛИОТЕКА НАУЧНЫХ СТАТЕЙ И ПУБЛИКАЦИЙ</h1>
            </Link>
          </div>
        </header>

        {/* Основной контент */}
        <main className="account-content">
          {/* Первая строка с тремя блоками */}
          <div className="account-row">
            {/* Блок 1: Аккаунт с фото */}
            <div className="account-block account-profile">
              <div className="account-label">Аккаунт</div>
              <div className="photo-container">
                <img
                  src="/images/ak.png"
                  alt="Фото профиля"
                  className="profile-photo"
                />
              </div>
            </div>

            {/* Блок 2: Обо мне */}
            <div
              className="account-block about-me-block"
              onClick={handleAboutMeClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="account-label">Обо мне</div>
              <div className="about-me-content">
                <p>{aboutMe}</p>
              </div>
            </div>

            {/* Блок 3: Документы по подписке */}
            <div className="account-block subscription-block">
              <img
                src="/images/img.png"
                alt="Документы"
                className="subscription-photo"
              />
              <div className="subscription-label">Документы по подписке</div>
            </div>
          </div>

          {/* Вторая строка с библиотекой и добавлением публикации */}
          <div className="account-row">
            {/* Блок 4: Моя библиотека */}
            <div className="library-block">
              <div className="library-label">Моя библиотека</div>
              <div className="library-content">
                <div className="empty-library">
                  Вы ещё не добавили ни одной публикации
                </div>
              </div>
            </div>

            {/* Блок 5: Добавить публикацию */}
            <div className="add-publication-block" onClick={handleAddPublication}>
              <div className="add-publication-content">
                <img
                  src="/images/img1.png"
                  alt="Добавить публикацию"
                  className="add-publication-photo"
                />
                <div className="add-publication-label">Добавьте новую публикацию</div>
              </div>
            </div>
          </div>

          {/* Кнопка Избранные статьи */}
          <div className="favorites-section">
            <button className="favorites-button" onClick={handleFavoritesClick}>
              Избранные статьи
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Account;