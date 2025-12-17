// src/components/Documents.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Documents.css';

function Documents() {
  const navigate = useNavigate();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+7');

  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Базовый',
      description: 'доступ к 5 документам на ваш выбор',
    },
    {
      id: 'pro',
      name: 'Профессионал',
      description: 'доступ ко всем документам на 3 месяца',
    },
    {
      id: 'premium',
      name: 'Премиум',
      description: 'доступ ко всем документам навсегда',
    }
  ];

  const handleGoHome = () => {
    navigate('/');
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = () => {
    console.log('Подписка оформлена:', {
      plan: selectedPlan,
      paymentMethod,
      cardNumber,
      phoneNumber
    });
    alert('Подписка успешно оформлена!');
    setShowSubscriptionModal(false);
  };


  const documents = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  return (
    <div className="documents-page">
      <div className="container">
        {/* Шапка с логотипом и названием */}
        <header className="documents-header">
          <div className="logo-section">
            <div className="site-description">
              <div className="description-box" onClick={handleGoHome} style={{ cursor: 'pointer' }}>
                <h2>БИБЛИОТЕКА НАУЧНЫХ СТАТЕЙ И ПУБЛИКАЦИЙ</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="documents-content">
          {/* Заголовки документов */}
          <div className="documents-tabs">
            <div className="tab active">
              <span className="tab-text">Документы по подписке</span>
            </div>
            <div className="tab subscribe-tab" onClick={() => setShowSubscriptionModal(true)}>
              <span className="tab-text">Оформить документы по подписке</span>
            </div>
          </div>

          {/* Список из 3-х документов только с фото */}
          <div className="documents-grid">
            {documents.map(doc => (
              <div key={doc.id} className="document-card">
                <div className="document-image">
                  <img
                    src="images/doc1.png"
                    alt="Документ"
                    className="document-photo"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Модальное окно оформления подписки */}
      {showSubscriptionModal && (
        <div className="subscription-modal-overlay" onClick={() => setShowSubscriptionModal(false)}>
          <div className="subscription-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setShowSubscriptionModal(false)}
            >
              ×
            </button>

            <h2 className="subscription-modal-title">Оформить подписку, чтобы получить доступ к документам</h2>

            {/* Общий квадрат для тарифов и оплаты */}
            <div className="subscription-plans-payment">
              {/* Выбор тарифного плана */}
              <div className="plans-section">
                <h3 className="section-title">Выбор тарифного плана:</h3>
                <div className="plans-grid">
                  {subscriptionPlans.map(plan => (
                    <div
                      key={plan.id}
                      className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      <h4 className="plan-name">{plan.name}</h4>
                      <p className="plan-description">{plan.description}</p>
                      <div className="plan-price">{plan.price}</div>
                      <button className="select-plan-btn">
                        Выбрать
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="payment-section">
                <h3 className="section-title">Способ оплаты:</h3>
                <p className="payment-subtitle">Оплатите подписку удобным для вас способом.</p>

                <div className="payment-methods">
                  {/* Банковская карта */}
                  <div className="payment-method-card">
                    <div className="method-header">
                      <h4 className="method-title">Банковские карты Visa, Mastercard, Mir</h4>
                      <button
                        className={`method-select-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        Выбрать
                      </button>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="card-details">
                        <div className="form-group">
                          <label>Номер карты:</label>
                          <input
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="card-input"
                          />
                        </div>
                        <button className="pay-button">Оплатить</button>
                      </div>
                    )}
                  </div>

                  {/* Оплата по номеру телефона */}
                  <div className="payment-method-card">
                    <div className="method-header">
                      <h4 className="method-title">По номеру телефона</h4>
                      <button
                        className={`method-select-btn ${paymentMethod === 'phone' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('phone')}
                      >
                        Выбрать
                      </button>
                    </div>

                    {paymentMethod === 'phone' && (
                      <div className="phone-details">
                        <div className="form-group">
                          <label>Номер телефона:</label>
                          <div className="phone-input-container">
                            <span className="phone-prefix">+7</span>
                            <input
                              type="text"
                              placeholder="XXX XXX XX XX"
                              value={phoneNumber.substring(2)}
                              onChange={(e) => setPhoneNumber('+7' + e.target.value)}
                              className="phone-input"
                            />
                          </div>
                        </div>
                        <button className="pay-button">Оплатить</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="subscription-footer">
              <button
                className="subscribe-confirm-btn"
                onClick={handleSubscribe}
                disabled={!selectedPlan}
              >
                Оформить подписку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;