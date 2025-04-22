import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';

const Home = () => {
  const navigate = useNavigate();
  return ( 
    <div>
        <h1>Главная для гостей</h1>
        <button 
        type="button" 
        className="btn btn-link-primary"
        onClick={() => navigate("/main")}  // Переход на главную
      >
        Статьи
      </button>
      <button type="button" className="btn btn-link">Авторы</button>
      <button type="button" className="btn btn-link">Конспекты</button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/register")}  // Переход в регистрацию
      >
        Зарегистрироваться
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/signin")}  // Переход на страницу входа
      >
        Войти
      </button>
        <Article_preview />
    </div>   
  );
};

export default Home;