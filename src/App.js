import logo from './assets/logo_welbex.svg';
import Telegram from './assets/Telegram.svg';
import Viber from './assets/Viber.svg';
import Whatsapp from './assets/Whatsapp.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="logo">
              <img src={logo} alt="logo"/>
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
          </div>
          <ul className="menu_header">
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
          </ul>
          <div className="contact_header">
            <p className="number">+7 555 555-55-55</p>
            <div className="contact_img">
                <img src={Telegram} alt=""/>
                <img src={Viber} alt=""/>
                <img src={Whatsapp} alt=""/>
            </div>
          </div>
      </header>
        <main>
            <div className="aside_left">
                <h1>Зарабатывайте <br/> больше <br/><span className="gradient_left">с WELBEX</span></h1>
                <p>Развиваем и контролируем <br/>продажи за вас</p>
            </div>
            <div>
            </div>
            <div className="aside_right">
                <h3>Вместе с <span className="gradient_right">бесплатной</span> <span className="gradient_right1">консультацией</span> мы дарим:</h3>
                <div className="aside_right_mobile">
                    <div className="column1">
                        <p>Skype Аудит</p>
                        <p>Dashboard</p>
                    </div>
                    <div className="column1">
                        <p>30 виджетов</p>
                        <p>Месяц аmoCRM</p>
                    </div>
                </div>
                <div className="aside_right_column">
                <div className="column">
                <h3>Виджеты</h3>
                <p>30 готовых решений</p>
                <h3>Skype Аудит</h3>
                <p>отдела продаж и CRM системы</p>
            </div>
            <div className="column">
                <h3> Dashboard</h3>
                <p>с показателями вашего бизнеса</p>
                <h3>35 дней</h3>
                <p>использования CRM</p>
            </div>
                </div>
                <button>Получить консультацию</button>
            </div>
        </main>
        <footer>
            <div className="contact1">
                <p><span>О компании</span></p>
                <ul>
                    <li>Партнёрская программа</li>
                    <li>Вакансии</li>
                </ul>
            </div>
            <div className="footer_menu">
                <div className="contact1">
                    <p><span>Меню</span></p>
                    <ul>
                        <li>Расчёт стоимости</li>
                        <li>Услуги</li>
                        <li>Виджеты</li>
                        <li>Интеграции</li>
                        <li>Наши клиенты</li>
                    </ul>
                </div>
                <ul>
                    <li className="footer_mobile_li">Благодарность клиентов</li>
                    <li>Кейсы</li>
                    <li className="footer_mobile_li3">Благодарственные письма</li>
                    <li>Сертификаты</li>
                    <li>Блог на Youtube</li>
                    <li>Вопрос / Ответ</li>
                </ul>
            </div>
            <div className="footer_contact">
                <p><span>Контакты</span></p>
                <div className="contact_info">
                    <p className="number">+7 555 555-55-55</p>
                    <div className="footer_contacts_img">
                        <a href="#"><img src={Telegram} alt=""/></a>
                        <a href="#"><img src={Viber} alt=""/></a>
                        <a href="#"><img src={Whatsapp} alt=""/></a>
                    </div>
                    <p>Москва, Путевой проезд 3с1, к 902</p>
                </div>
                <div className="footer_title footer_contact">
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
