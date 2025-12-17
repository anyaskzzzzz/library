import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [accessType, setAccessType] = useState('free');
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);

  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [articleTags, setArticleTags] = useState('');
  const [articleAccessType, setArticleAccessType] = useState('free');
  const [articlePrice, setArticlePrice] = useState('');
  const [fileName, setFileName] = useState('');

  const popularArticles = [
    {
      id: 1,
      title: "ТЕОРЕТИЧЕСКИЕ АСПЕКТЫ БРЕНДИНГА",
      icon: "/images/photo1.jpg",
    },
    {
      id: 2,
      title: "ИНТЕЛЛЕКТ КАК ОБЩАЯ СПОСОБНОСТЬ К МЫШЛЕНИЮ",
      icon: "/images/photo2.jpg",
    },
    {
      id: 3,
      title: "ПОТОКИ В JAVA: THREAD И RUNNABLE",
      icon: "/images/photo3.jpg",
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Анализ филогенетического разнообразия почвенных архей в экстремальных условиях Антарктиды"
    },
    {
      id: 2,
      title: "Концепция 'Другого' в постколониальном дискурсе романов Чинуа Ачебе"
    },
    {
      id: 3,
      title: "Сравнительный анализ методов шифрования в квантовых вычислениях"
    },
    {
      id: 4,
      title: "Этика применения CRISPR/Cas9 технологии для редактирования генома человека"
    },
    {
      id: 5,
      title: "Специфика саунд-дизайна в иммерсивном театре"
    },
    {
      id: 6,
      title: "Квантовые точки на основе селенида кадмия: новые подходы к биомедицинской визуализации"
    },
    {
      id: 7,
      title: "Безопасность интернета вещей (IoT): уязвимости и метода защиты умного дома"
    }
  ];

  const searchHistory = [
    "Искусственный интеллект",
    "Медицинские исследования 2024",
    "Квантовые вычисления",
    "Экология и климат",
    "История древнего мира"
  ];

  const disciplines = [
    "Медицинские науки",
    "Гуманитарные науки",
    "Естественные и точные науки",
    "Сельскохозяйственные науки",
    "Техника и технология",
    "Социальные науки"
  ];

  const popularQueries = [
    "Искусственный интеллект",
    "Климатические изменения",
    "Генетика",
    "Квантовая физика",
    "История искусства"
  ];

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAllArticlesClick = () => {
    navigate('/all-articles');
  };

  const handleDocumentsClick = () => {
    navigate('/documents-disciplines');
  };

  const handleSubscriptionClick = () => {
    navigate('/documents');
  };

  const handleAddArticleClick = () => {
    setShowAddArticleModal(true);
  };

  const handleSearchClick = () => {
    setShowSearchModal(true);
  };

  const handlePopularArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Поиск:', { searchQuery, accessType, selectedDisciplines });
  };

  const handleDisciplineToggle = (discipline) => {
    setSelectedDisciplines(prev =>
      prev.includes(discipline)
        ? prev.filter(d => d !== discipline)
        : [...prev, discipline]
    );
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleAddArticleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title: articleTitle,
      description: articleDescription,
      tags: articleTags.split(',').map(tag => tag.trim()),
      accessType: articleAccessType,
      price: articleAccessType === 'paid' ? articlePrice : 0,
      fileName: fileName
    };

    console.log('Данные статьи:', articleData);
    alert('Статья отправлена на модерацию!');

    setArticleTitle('');
    setArticleDescription('');
    setArticleTags('');
    setArticleAccessType('free');
    setArticlePrice('');
    setFileName('');
    setShowAddArticleModal(false);
  };

  const handleAccessTypeChange = (type) => {
    setArticleAccessType(type);
    if (type === 'free') {
      setArticlePrice('');
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <header className="main-header">
          <div className="logo-section">
            <div className="logo">
              <h1 className="logo-title">Booknetst</h1>
              <div className="logo-icon"></div>
            </div>
            <div className="site-description">
              <div className="description-box">
                <h2>БИБЛИОТЕКА НАУЧНЫХ СТАТЕЙ И ПУБЛИКАЦИЙ</h2>
              </div>
            </div>
          </div>
        </header>

        <div className="main-content">
          <aside className="sidebar">
            <div className="sidebar-content">
              <div className="search-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="search-input"
                    onClick={handleSearchClick}
                    readOnly
                  />
                </div>
              </div>

              <nav className="sidebar-nav">
                <button className="nav-button" onClick={handleLoginClick}>
                  <span className="nav-text">Вход/Регистрация</span>
                </button>

                <button className="nav-button" onClick={handleAllArticlesClick}>
                  <span className="nav-text">Все статьи</span>
                </button>

                <button className="nav-button" onClick={handleDocumentsClick}>
                  <span className="nav-text">Документы дисциплин</span>
                </button>

                <button className="subscription-button" onClick={handleSubscriptionClick}>
                  <img
                    src="/images/img.png"
                    alt="Документ"
                    className="subscription-icon-img"
                  />
                  <div className="subscription-text">
                    <span className="subscription-title">Доступ к документам</span>
                    <span className="subscription-subtitle">по подписке</span>
                  </div>
                </button>
              </nav>
            </div>
          </aside>

          <main className="content">
            <div className="popular-section-wrapper">
              <h4 className="popular-header">Популярные статьи</h4>
              <div className="popular-grid">
                {popularArticles.map(article => (
                  <div
                    key={article.id}
                    className="popular-article"
                    onClick={() => handlePopularArticleClick(article.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={article.icon}
                      alt={article.title}
                      className="article-icon"
                    />
                    <h5 className="article-title">{article.title}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="recent-container">
              <div className="recent-section-wrapper">
                <h4 className="recent-header-outside">Недавние публикации</h4>
                <section className="recent-section">
                  <div className="recent-list">
                    {recentArticles.map(article => (
                      <div key={article.id} className="recent-item">
                        <div className="item-number">{article.id}.</div>
                        <h5 className="item-title">{article.title}</h5>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="add-article-section">
                <button className="add-article-button" onClick={handleAddArticleClick}>
                  <img
                    src="/images/img1.png"
                    alt="Добавить"
                    className="add-icon-img"
                  />
                  <span className="add-text">Добавить статью</span>
                </button>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Модальное окно добавления статьи */}
      {showAddArticleModal && (
        <div className="add-article-modal-overlay" onClick={() => setShowAddArticleModal(false)}>
          <div className="add-article-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setShowAddArticleModal(false)}
            >
              ×
            </button>


            <form onSubmit={handleAddArticleSubmit} className="add-article-form">
              {/* Загрузка файла */}
              <div className="file-upload-section">
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                  <span className="upload-icon">+</span>
                  <span className="upload-text">
                    {fileName ? `Выбран файл: ${fileName}` : "Загрузите текстовый файл"}
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".txt,.doc,.docx,.pdf"
                    className="file-input"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>

              {/* Название публикации */}
              <div className="form-group">
                <label className="form-label">Название публикации:</label>
                <input
                  type="text"
                  className="form-input"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  placeholder="Введите название статьи"
                  required
                />
              </div>

              {/* Описание */}
              <div className="form-group">
                <label className="form-label">Описание:</label>
                <textarea
                  className="form-textarea"
                  value={articleDescription}
                  onChange={(e) => setArticleDescription(e.target.value)}
                  placeholder="Введите краткое описание статьи"
                  required
                />
              </div>

              {/* Теги */}
              <div className="form-group">
                <label className="form-label">Теги:</label>
                <input
                  type="text"
                  className="form-input"
                  value={articleTags}
                  onChange={(e) => setArticleTags(e.target.value)}
                  placeholder="Введите теги через запятую (например: наука, исследование, медицина)"
                />
              </div>

              {/* Тип доступа */}
              <div className="access-type-group">
                <h4 className="access-type-title">Тип доступа:</h4>

                <div className="access-type-buttons">
                  <button
                    type="button"
                    className={`access-btn ${articleAccessType === 'free' ? 'active' : ''}`}
                    onClick={() => handleAccessTypeChange('free')}
                  >
                    Бесплатно
                  </button>
                  <button
                    type="button"
                    className={`access-btn ${articleAccessType === 'paid' ? 'active' : ''}`}
                    onClick={() => handleAccessTypeChange('paid')}
                  >
                    Платно
                  </button>
                </div>

                {articleAccessType === 'paid' && (
                  <div className="price-input-container">
                    <span className="price-label">Укажите стоимость в рублях:</span>
                    <input
                      type="number"
                      className="price-input"
                      value={articlePrice}
                      onChange={(e) => setArticlePrice(e.target.value)}
                      placeholder="500"
                      min="0"
                      required={articleAccessType === 'paid'}
                    />
                  </div>
                )}
              </div>

              {/* Кнопка отправки */}
              <button type="submit" className="submit-button">
                Готово
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно поиска */}
      {showSearchModal && (
        <div className="search-modal-overlay" onClick={() => setShowSearchModal(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setShowSearchModal(false)}
            >
              ×
            </button>

            <form onSubmit={handleSearchSubmit} className="search-modal-form">
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Введите название статьи или автора"
                  className="modal-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="search-modal-content">
                <div className="search-results-section">
                  <h3 className="search-results-title">Найдено:</h3>
                  <div className="search-results-list">
                    {[1, 2, 3, 4, 5].map(num => (
                      <div key={num} className="search-result-item">
                        <span className="result-number">{num}.</span>
                        <div className="result-placeholder"> </div>
                      </div>
                    ))}
                    <div className="results-dots">…</div>
                  </div>
                </div>

                <div className="search-filters-section">
                  <div className="filter-group">
                    <h4 className="filter-title">Тип доступа:</h4>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="accessType"
                          value="free"
                          checked={accessType === 'free'}
                          onChange={(e) => setAccessType(e.target.value)}
                        />
                        <span className="radio-text">Бесплатный</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="accessType"
                          value="subscription"
                          checked={accessType === 'subscription'}
                          onChange={(e) => setAccessType(e.target.value)}
                        />
                        <span className="radio-text">С подпиской</span>
                      </label>
                    </div>
                  </div>

                  <div className="filter-group">
                    <h4 className="filter-title">Поиск по дисциплинам:</h4>
                    <div className="checkbox-group">
                      {disciplines.map(discipline => (
                        <label key={discipline} className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={selectedDisciplines.includes(discipline)}
                            onChange={() => handleDisciplineToggle(discipline)}
                          />
                          <span className="checkbox-text">{discipline}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="filter-group">
                    <h4 className="filter-title">Популярные поисковые запросы:</h4>
                    <div className="popular-queries">
                      {popularQueries.map((query, index) => (
                        <span key={index} className="query-tag">{query}</span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="search-history-btn"
                    onClick={() => setShowSearchHistory(true)}
                  >
                    История поиска
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно истории поиска */}
      {showSearchHistory && (
        <div className="history-modal-overlay" onClick={() => setShowSearchHistory(false)}>
          <div className="history-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setShowSearchHistory(false)}
            >
              ×
            </button>

            <h3 className="history-modal-title">История поиска</h3>
            <div className="history-list">
              {searchHistory.map((query, index) => (
                <div key={index} className="history-item">
                  <span className="history-number">{index + 1}.</span>
                  <span className="history-query">{query}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;