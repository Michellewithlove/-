import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Article_preview from '../components/article_prev';

const Homereg = () => {
  const navigate = useNavigate();
  return ( 
    <div>
        <h1>Главная для зареганных</h1>
        <button 
        type="button" 
        className="btn btn-link-primary"
        onClick={() => navigate("/mainreg")}  // Переход на главную
      >
        Статьи
      </button>
      <button type="button" className="btn btn-link">Авторы</button>
      <button type="button" className="btn btn-link">Конспекты</button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/profile")}  // Переход в регистрацию
      >
        Профиль
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/main")}  // Переход на страницу для гостей
      >
        Выйти
      </button>
        <Article_preview />
    </div>
  );
};

export default Homereg;