import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllArticles.css';

function AllArticles() {
  const navigate = useNavigate();

  const articles = [
    { id: 1, title: "Поддержка бизнеса: kak в России помогают предпринимателям", liked: false },
    { id: 2, title: "Рождество Пресвятой Богородицы: когда его отмечают, история и традиции праздника.", liked: false },
    { id: 3, title: "Супер интересная статья нереально читать всем.", liked: false },
    { id: 4, title: "Италия ждет.", liked: false },
    { id: 5, title: "«Хончи» с ощущением церемониальности: тест-драйв лифтбэка Honğçi H6", liked: false },
    { id: 6, title: "Школа без границ: kak архитектура меняет российское образование?", liked: false },
    { id: 7, title: "Космические мыши возвращаются. Зачем нужен был эксперимент «Бион-М» №2", liked: false },
  ];

  const monographs = [
    { id: 1, title: "Антропогенная трансформация почвенных биоценозов в условиях Крайнего Севера", liked: false },
    { id: 2, title: "Семантика молчания: невербальные коммуникативные практики в культурах Восточной Азии", liked: false },
    { id: 3, title: "Квантовые алгоритмы и криптография: вызовы постквантовой эры", liked: false },
    { id: 4, title: "Основы проектной деятельности: от идеи до реализации", liked: false },
    { id: 5, title: "Практикум по клинической диагностике для ветеринарных врачей", liked: false },
    { id: 6, title: "Современная финансовая аналитика: работа с большими данными", liked: false },
  ];

  const [articlesState, setArticlesState] = useState(articles);
  const [monographsState, setMonographsState] = useState(monographs);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [showAllMonographs, setShowAllMonographs] = useState(false);

  const handleLikeArticle = (id) => {
    setArticlesState(prev => prev.map(article =>
      article.id === id ? { ...article, liked: !article.liked } : article
    ));
  };

  const handleLikeMonograph = (id) => {
    setMonographsState(prev => prev.map(monograph =>
      monograph.id === id ? { ...monograph, liked: !monograph.liked } : monograph
    ));
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="all-articles-page">
      <div className="container">
        {/* Шапка */}
        <header className="all-articles-header">
          <div className="site-description">
            <div
              className="description-box clickable"
              onClick={handleHomeClick}
              style={{ cursor: 'pointer' }}
            >
              <h2>БИБЛИОТЕКА НАУЧНЫХ СТАТЕЙ И ПУБЛИКАЦИЙ</h2>
            </div>
          </div>
        </header>

        <div className="all-articles-content">
          {/* Общий контейнер с двумя квадратами в ряд */}
          <div className="two-squares-container">

            {/* Левый квадрат - Все статьи */}
            <div className="square">
              <div className="square-header">
                <h3>Все статьи</h3>
              </div>

              <div className="square-content">
                <div className="items-list">
                  {(showAllArticles ? articlesState : articlesState.slice(0, 5)).map(article => (
                    <div key={article.id} className="item">
                      <span className="item-title">{article.title}</span>
                      <button
                        className={`like-btn ${article.liked ? 'liked' : ''}`}
                        onClick={() => handleLikeArticle(article.id)}
                      >
                        ♡
                      </button>
                    </div>
                  ))}
                </div>

                {articlesState.length > 5 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllArticles(!showAllArticles)}
                  >
                    {showAllArticles ? 'Показать меньше' : 'Показать ещё'}
                  </button>
                )}
              </div>
            </div>

            {/* Правый квадрат - Монографии и учебные пособия */}
            <div className="square">
              <div className="square-header">
                <h3>Монографии и учебные пособия</h3>
              </div>

              <div className="square-content">
                <div className="items-list">
                  {(showAllMonographs ? monographsState : monographsState.slice(0, 5)).map(monograph => (
                    <div key={monograph.id} className="item">
                      <span className="item-title">{monograph.title}</span>
                      <button
                        className={`like-btn ${monograph.liked ? 'liked' : ''}`}
                        onClick={() => handleLikeMonograph(monograph.id)}
                      >
                        ♡
                      </button>
                    </div>
                  ))}
                </div>

                {monographsState.length > 5 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllMonographs(!showAllMonographs)}
                  >
                    {showAllMonographs ? 'Показать меньше' : 'Показать ещё'}
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllArticles;