import React, { useRef, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const goalsRef = useRef(null);
  const projectsRef = useRef(null);

 // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  
  const OUR_URL = "http://localhost:5001/";

  const api = axios.create({
  baseURL: OUR_URL,
  headers: {
      'Content-type': 'application/json'
  }
})

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  // Открыть/закрыть модальное окно
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    // Очищаем форму при закрытии
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Форматирование номера телефона
    if (name === 'phone') {
      const phoneDigits = value.replace(/\D/g, '');
      let formattedPhone = '';
      
      if (phoneDigits.length > 0) {
        formattedPhone = '+7';
        if (phoneDigits.length > 1) {
          formattedPhone += ` (${phoneDigits.substring(1, 4)}`;
        }
        if (phoneDigits.length > 4) {
          formattedPhone += `) ${phoneDigits.substring(4, 7)}`;
        }
        if (phoneDigits.length > 7) {
          formattedPhone += `-${phoneDigits.substring(7, 9)}`;
        }
        if (phoneDigits.length > 9) {
          formattedPhone += `-${phoneDigits.substring(9, 11)}`;
        }
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверка обязательных полей
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Пожалуйста, заполните обязательные поля: ФИО и номер телефона');
      return;
    }
    
    // Здесь будет логика отправки данных на сервер
    console.log('Данные формы для отправки:', formData);

    try {
      const response = await api.post('/submit_form', formData)
      alert('Спасибо за заявку! Наш специалист свяжется с вами в течение 24 часов.')
        // Сброс формы
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
        
        // Закрытие модального окна
      handleCloseModal();
    } catch(e) {
      console.error('Ой-ой-ой-ой-ой-ой-ой-ой-ой-ой-ой-ой, ', e.response)
    }
  };

  return (
    <div className="app-container">
      {/* === СЕКЦИЯ 1: HERO === */}
      <section className="hero-section">
        <div className="hero-dark-side"></div>
        <div className="hero-image"></div>
        
        <header className="header">
          <div className="logo">Art-Green</div>
          <nav className="nav-menu">
            <button onClick={() => scrollToSection(aboutRef)}>О нас</button>
            <button onClick={() => scrollToSection(servicesRef)}>Услуги</button>
            <button onClick={() => scrollToSection(goalsRef)}>Цели</button>
            <button onClick={() => scrollToSection(projectsRef)}>Проекты</button>
          </nav>
        </header>
        
        <div className="hero-content">
          <h1 className="main-title">Ландшафтный дизайн, который дышит</h1>
        </div>
        
        <div className="hero-subtitle">
          Поможем соединить функциональность и эстетику в пространствах для жизни и отдыха
        </div>
        
        <div className="free-consultation" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
          <span className="free-consultation-text">Бесплатная консультация</span>
          <div className="free-consultation-line"></div>
        </div>
        
        <div className="work-steps">
          <div className="step">
            <h3 className="step-title">Анализ</h3>
            <p className="step-description">Глубокое изучение участка и пожеланий клиента</p>

          </div>
          
          <div className="step">
            <h3 className="step-title">Проектирование</h3>
            <p className="step-description">Создание 3D-визуализации и детального плана</p>
          </div>
          
          <div className="step">
            <h3 className="step-title">Реализация</h3>
            <p className="step-description">Чёткое воплощение проекта «под ключ»</p>
          </div>
        </div>
      </section>

      {/* === СЕКЦИЯ 2: О НАС === */}
      <section className="fullscreen-section" ref={aboutRef}>
        <div className="about-divider"></div>
        <h2 className="title section-title">О нас</h2>
        
        <div className="about-content">
          <div className="about-left">
            <div className="about-image-small"></div>
          </div>
          

          <div className="about-right">
            <div className="about-text-block">
              <h3 className="about-headline">Art-Green — Создаём гармонию между природой и вашим пространством</h3>
              <p className="about-description">
                Компания Art-Green уже более 20 лет является ведущим экспертом в области ландшафтного 
                дизайна и озеленения. Мы верим, что каждый уголок природы, будь то просторный загородный 
                участок или небольшой балкон в городе, заслуживает индивидуального подхода и творческого воплощения.
              </p>
            </div>

            <div className="about-image-large"></div>
          </div>
        </div>
      </section>

      {/* === СЕКЦИЯ 3: УСЛУГИ === */}
      <section className="fullscreen-section" ref={servicesRef}>
        <div className="about-divider"></div>
        <h2 className="title section-title">Услуги</h2>
        
        <div className="services-container">
          {/* <!-- Услуга 1 --> */}
          <div className="service-item">
            <div className="service-image"></div>
            <h3 className="service-name">Ландшафтный дизайн</h3>
            <p className="service-description">Полный цикл проектирования</p>
          </div>
          
          {/* <!-- Услуга 2 --> */}
          <div className="service-item">
            <div className="service-image"></div>
            <h3 className="service-name">Озеленение</h3>
            <p className="service-description">Посадка растений и уход</p>
          </div>
          
          {/* <!-- Услуга 3 --> */}
          <div className="service-item">
            <div className="service-image"></div>
            <h3 className="service-name">Автополив</h3>
            <p className="service-description">Системы автоматического полива</p>
          </div>
          
          {/* <!-- Услуга 4 --> */}
          <div className="service-item">
            <div className="service-image"></div>
            <h3 className="service-name">Освещение</h3>
            <p className="service-description">Ландшафтное освещение</p>
          </div>
        </div>
      </section>
      {/* === СЕКЦИЯ 4: ЦЕЛИ === */}
      <section className="fullscreen-section" ref={goalsRef}>
        <div className="about-divider"></div>
        <h2 className="title section-title">наши Цели</h2>
        
        <div className="goals-banner"></div>
        
        <div className="goals-grid">
          <div className="goal-column goal-1">
            <h3 className="goal-heading">Экологичность</h3>
            <p className="goal-description">
              Мы отдаём предпочтение устойчивым и местным видам растений, используем 
              «зелёные» технологии и способствуем сохранению биоразнообразия.
            </p>
          </div>
          
          <div className="goal-column goal-2">
            <h3 className="goal-heading">Индивидуальность</h3>
            <p className="goal-description">
              Каждый проект — это отражение характера и образа жизни наших клиентов. 
              Мы не работаем по шаблонам.
            </p>
          </div>
          
          <div className="goal-column goal-3">
            <h3 className="goal-heading">Инновации</h3>
            <p className="goal-description">
              Мы следим за мировыми тенденциями и внедряем современные решения, такие 
              как системы автополива и интеллектуальное садовое освещение.
            </p>
          </div>
          
          <div className="goal-column goal-4">
            <h3 className="goal-heading">Комплексный подход</h3>
            <p className="goal-description">
              От первоначальной идеи и эскиза до полного воплощения и последующего 
              ухода — мы берём на себя все этапы работы.
            </p>
          </div>
        </div>
      </section>

      {/* === СЕКЦИЯ 5: ПРОЕКТЫ === */}
      <section className="fullscreen-section" ref={projectsRef}>
        <div className="about-divider"></div>
        <h2 className="title section-title">Проекты</h2>
        
        <div className="projects-container">
          {/* <!-- Строка 1 --> */}
          <div className="project-row">
            <h3 className="project-name">Частный сад</h3>
            <div className="project-button">
              <span className="button-text">Посмотреть проекты</span>
              <div className="button-arrow"></div>
            </div>
          </div>
          
          {/* <!-- Строка 2 --> */}
          <div className="project-row">
            <h3 className="project-name">Парковая зона</h3>
            <div className="project-button">
              <span className="button-text">Посмотреть проекты</span>
              <div className="button-arrow"></div>
            </div>
          </div>
          
          {/* <!-- Строка 3 --> */}
          <div className="project-row">
            <h3 className="project-name">Благоустройство</h3>
            <div className="project-button">
              <span className="button-text">Посмотреть проекты</span>
              <div className="button-arrow"></div>
            </div>
          </div>
          
          {/* <!-- Строка 4 --> */}
          <div className="project-row">
            <h3 className="project-name">Кровельное озеленение</h3>
            <div className="project-button">
              <span className="button-text">Посмотреть проекты</span>
              <div className="button-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* === СЕКЦИЯ 6: ФУТЕР === */}
      <footer className="footer-section">
        <div className="footer-svg-top"></div>
        
        <div className="footer-dark">
          <div className="footer-columns-container">
            {/* Колонка 1 */}
            <div className="footer-column footer-services">
              <h4 className="footer-heading">Услуги</h4>
              <div className="footer-item">Ландшафтный дизайн</div>
              <div className="footer-item">Озеленение</div>
              <div className="footer-item">Автополив</div>
              <div className="footer-item">Освещение</div>
            </div>
            
            {/* Колонка 2 */}
            <div className="footer-column footer-projects">
              <h4 className="footer-heading">Проекты</h4>
              <div className="footer-item">Частный сад</div>
              <div className="footer-item">Парковая зона</div>
              <div className="footer-item">Благоустройство</div>
              <div className="footer-item">Кровельное озеленение</div>
            </div>
            
            {/* Колонка 3 */}
            <div className="footer-column footer-contacts">
              <h4 className="footer-heading">Контакты</h4>
              <div className="footer-item">+7 (999) 123-45-67</div>
              <div className="footer-item">info@art-green.ru</div>
              <div className="footer-item">Москва, ул. Садовая, 1</div>
            </div>
          </div>
        </div>
      </footer>

      {/* === МОДАЛЬНОЕ ОКНО ДЛЯ КОНСУЛЬТАЦИИ === */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal} aria-label="Закрыть">
              ×
            </button>
            
            <h2 className="modal-title">Бесплатная консультация</h2>
            <p className="modal-subtitle">
              Оставьте свои контакты, и наш специалист по ландшафтному дизайну свяжется 
              с вами для бесплатной консультации в течение 24 часов
            </p>
            
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  ФИО <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Иванов Иван Иванович"
                  required
                  autoComplete="name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  Номер телефона <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (999) 123-45-67"
                  required
                  autoComplete="tel"
                  pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
                />
                <small className="hint">Формат: +7 (999) 123-45-67</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@mail.ru"
                  autoComplete="email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Краткое описание задачи</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Например: нужен дизайн участка 10 соток с зоной отдыха, детской площадкой и садом..."
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Получить консультацию
                </button>
                
                <p className="form-notice">
                  Нажимая кнопку, вы соглашаетесь с нашей 
                  <a href="https://legal.max.ru/pp" className="privacy-link">политикой конфиденциальности</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;