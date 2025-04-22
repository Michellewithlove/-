import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Editprof = () => {
const navigate = useNavigate();
  return ( 
    <div>
        <button 
        type="button" className="btn btn btn-link">
        Изменить обложку
        </button>
        <button 
        type="button" className="btn btn btn-link"
        onClick={() => navigate("/profile")}>
        Закрыть
        </button>
        <button 
        type="button" className="btn btn btn-link">
        Редактировать
        </button>
        <button 
        type="button" className="btn btn btn-link">
        Доступность
        </button>
        <button 
        type="button" className="btn btn btn-link">
        Помощь
        </button>
        <button 
        type="button" className="btn btn btn-link"
        onClick={() => navigate("/main")}>
        Выйти
        </button>
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Имя</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Лена" 
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Фамилия</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Демьяненко" 
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Никнейм</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="bombardilo_krocodilo" 
            />
        </div>
        </form>
        <button 
        type="button" 
        className="btn btn-outline-primary"
      >
        Сохранить
        </button>
    </div>   
  );
};

export default Editprof;