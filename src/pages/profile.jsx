import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Article_preview from '../components/article_prev';

const Profile = () => {
const navigate = useNavigate();
  return ( 
    <div>
         <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/editprof")}  // Переход на главную
      >
        Настройки профиля
        </button>
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/writeart")}  // Переход на страницу входа
      >
        + статья
        </button>
        <Article_preview />
    </div>   
  );
};

export default Profile;