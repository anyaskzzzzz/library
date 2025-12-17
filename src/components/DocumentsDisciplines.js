// src/components/DocumentsDisciplines.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DocumentsDisciplines.css';

function DocumentsDisciplines() {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/');
  };

  const handleDisciplineClick = (disciplineName) => {
    alert(`Выбрана дисциплина: ${disciplineName}. Документы по этой дисциплине откроются в следующем обновлении.`);
  };

  const disciplines = [
    {
      id: 1,
      name: "МЕДИЦИНСКИЕ НАУКИ",
      sciences: ["Фундаментальная медицина", "Науки о здоровье", "Клинические исследования"],
      isGray: false
    },
    {
      id: 2,
      name: "ГУМАНИТАРНЫЕ НАУКИ",
      sciences: ["История и археология", "Исцеление культур", "Философия и этика"],
      isGray: true
    },
    {
      id: 3,
      name: "ЕСТЕСТВЕННЫЕ И ТОЧНЫЕ НАУКИ",
      sciences: ["Математика", "Биологические науки", "Физика и химия"],
      isGray: false
    },
    {
      id: 4,
      name: "СЕЛЬСКОХОЗЯЙСТВЕННЫЕ НАУКИ",
      sciences: ["Ветеринарные науки", "Молочное дело", "Агрономия и почвоведение"],
      isGray: true
    },
    {
      id: 5,
      name: "ТЕХНИКА И ТЕХНОЛОГИИ",
      sciences: ["Химические технологии", "Нанотехнологии", "Информационные технологии"],
      isGray: false
    },
    {
      id: 6,
      name: "СОЦИАЛЬНЫЕ НАУКИ",
      sciences: ["Психология", "Право", "Социология и политология"],
      isGray: true
    }
  ];

  return (
    <div className="documents-disciplines-page">
      <div className="documents-container">
        {/* Заголовок - кликабельный для перехода на главную */}
        <header className="documents-header">
          <div className="documents-logo-section">
            <div className="documents-logo" onClick={handleHeaderClick}>
              <h1 className="documents-logo-title"></h1>
            </div>
            <div className="documents-description">
              <div className="documents-description-box" onClick={handleHeaderClick}>
                <h2>БИБЛИОТЕКА НАУЧНЫХ СТАТЕЙ И ПУБЛИКАЦИЙ</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="documents-main-content">
          {/* Прямоугольник с надписью "Документы дисциплин" */}
          <div className="documents-title-container">
            <h2 className="documents-title-text">Документы дисциплин</h2>
          </div>

          {/* Сетка дисциплин 3x2 */}
          <div className="disciplines-grid">
            {disciplines.map((discipline) => (
              <div
                key={discipline.id}
                className={`discipline-square ${discipline.isGray ? 'gray-bg' : ''}`}
                onClick={() => handleDisciplineClick(discipline.name)}
              >
                {/* Отдельный квадрат для названия дисциплины */}
                <div className={`discipline-title-box ${discipline.isGray ? 'gray-bg-title' : ''}`}>
                  <h3 className="discipline-name">{discipline.name}</h3>
                </div>

                {/* Контейнер для перечня наук */}
                <div className="sciences-container">
                  {discipline.sciences.map((science, index) => (
                    <div key={index} className="science-item">
                      {science}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DocumentsDisciplines;