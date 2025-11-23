import React, { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const goalsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
      <div className="app-container">

        {/* === ЭКРАН 1: ГЛАВНАЯ (HERO) === */}
        <section className="hero-section">
          <header className="header">
            <div className="logo">ART-GREEN</div>
            <nav className="nav-menu">
              <button onClick={() => scrollToSection(aboutRef)}>О нас</button>
              <button onClick={() => scrollToSection(servicesRef)}>Услуги</button>
              <button onClick={() => scrollToSection(goalsRef)}>Цели</button>
              <button onClick={() => scrollToSection(projectsRef)}>Проекты</button>
            </nav>
            <div className="header-contact">
              <div className="small-text">Поможем соединить<br/>функциональность и эстетику в<br/>пространствах для жизни и<br/>отдыха</div>
            </div>
          </header>

          <div className="hero-content">
            <h1 className="main-title">
              ЛАНДШАФТНЫЙ ДИЗАЙН,<br />
              КОТОРЫЙ ДЫШИТ
            </h1>

            <div className="hero-footer">
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">Анализ</span>
                  <span className="stat-desc">Глубокое изучение участка и<br/>пожеланий клиента</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">Проектирование</span>
                  <span className="stat-desc">Создание 3D-визуализаций и<br/>детального плана</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">Реализация</span>
                  <span className="stat-desc">Четкое воплощение проекта<br/>«под ключ»</span>
                </div>
              </div>
              <div className="hero-image-block"></div>
            </div>
          </div>
        </section>

        {/* === ЭКРАН 2: О НАС === */}
        <section className="fullscreen-section" ref={aboutRef}>
          <div className="section-content">
            <div className="section-top-line">
              <span className="section-label">О нас</span>
              <div className="line"></div>
            </div>
            <div className="about-container">
              <div className="about-images">
                <div className="img-box img-1"></div>
                <div className="img-box img-2"></div>
              </div>
              <div className="about-text-block">
                <h2>ART GREEN — Создаем гармонию между природой и вашим пространством</h2>
                <p>
                  Компания Art-Green уже более 20 лет является ведущим экспертом в области
                  ландшафтного дизайна и озеленения. Мы верим, что каждый уголок природы, будь то
                  просторный загородный участок или небольшой балкон в городе, заслуживает
                  индивидуального подхода и творческого воплощения.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === ЭКРАН 3: УСЛУГИ === */}
        <section className="fullscreen-section" ref={servicesRef}>
          <div className="section-content">
            <div className="section-top-line">
              <span className="section-label">Услуги</span>
              <div className="line"></div>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-square"></div>
                <h3>ЭСКИЗНОЕ<br/>ПРОЕКТИРОВАНИЕ</h3>
                <p>Визуализируем идею в 3D до<br/>начала работ</p>
              </div>
              <div className="service-item">
                <div className="service-square"></div>
                <h3>ПОЛНЫЙ ДИЗАЙН<br/>ЛАНДШАФТА</h3>
                <p>Реализуем ваш сад «под ключ»</p>
              </div>
              <div className="service-item">
                <div className="service-square"></div>
                <h3>СИСТЕМЫ<br/>АВТОПОЛИВА</h3>
                <p>Умный полив без вышего участия</p>
              </div>
              <div className="service-item">
                <div className="service-square"></div>
                <h3>САДОВОЕ<br/>ОСВЕЩЕНИЕ</h3>
                <p>Ваш сад прекрасен даже ночью</p>
              </div>
            </div>
          </div>
        </section>

        {/* === ЭКРАН 4: ЦЕЛИ === */}
        <section className="fullscreen-section" ref={goalsRef}>
          <div className="section-content">
            <div className="section-top-line">
              <span className="section-label">Наши цели</span>
              <div className="line"></div>
            </div>
            <div className="goals-grid">
              <div className="goal-col">
                <h3>ЭКОЛОГИЧНОСТЬ</h3>
                <p>Мы отдаём предпочтение устойчивым<br/>и местным видам растений,<br/>используем «зелёные» технологии и<br/>способствуем сохранению<br/>биоразнообразия.</p>
              </div>
              <div className="goal-col">
                <h3>ИНДИВИДУАЛЬНОСТЬ</h3>
                <p>Каждый проект — это отражение<br/>характера и образа жизни наших<br/>клиентов. Мы не работаем по<br/>шаблонам.</p>
              </div>
              <div className="goal-col">
                <h3>ИННОВАЦИИ</h3>
                <p>Мы следим за мировыми тенденциями<br/>и внедряем современные решения,<br/>такие как системы автополива и<br/>интеллектуальное садовое<br/>освещение.</p>
              </div>
              <div className="goal-col">
                <h3>КОМПЛЕКСНЫЙ ПОДХОД</h3>
                <p>От первоначальной идеи и эскиза до<br/>полного воплощения и последующего<br/>ухода — мы берём на себя все этапы<br/>работы.</p>
              </div>
            </div>
            <div className="goals-image-banner"></div>
          </div>
        </section>

        {/* === ЭКРАН 5: ПРОЕКТЫ + ФУТЕР === */}
        <section className="fullscreen-section projects-layout" ref={projectsRef}>
          <div className="section-content">
            <div className="section-top-line">
              <span className="section-label">Наши проекты</span>
              <div className="line"></div>
            </div>
            <div className="projects-list">
              <div className="project-row">
                <span className="project-title">Сад пяти чувств</span>
                <span className="project-arrow">⟶</span>
              </div>
              <div className="project-row">
                <span className="project-title">Минимализм в городе</span>
                <span className="project-arrow">⟶</span>
              </div>
              <div className="project-row">
                <span className="project-title">Эко-оазис</span>
                <span className="project-arrow">⟶</span>
              </div>
            </div>
          </div>

          {/* Футер внутри последней секции (внизу) */}
          <footer className="footer">
            <div className="footer-col">
              <h4>УСЛУГИ</h4>
              <p>Эскизное проектирование</p>
              <p>Полный ландшафтный дизайн</p>
              <p>Система автополива</p>
              <p>Садовое освещение</p>
            </div>
            <div className="footer-col">
              <h4>ПРОЕКТЫ</h4>
              <p>Частные сады</p>
              <p>Общественные пространства</p>
              <p>Коммерческое озеленение</p>
              <p>Кровельные сады</p>
            </div>
            <div className="footer-col">
              <h4>КОНТАКТЫ</h4>
              <p>hello@artgreen.com</p>
              <p>+7 (800) 555-35-35</p>
              <p>г. Город, ул. Примерная, д. 1</p>
            </div>
          </footer>
        </section>

      </div>
  );
}

export default App;