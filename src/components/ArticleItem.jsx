import React, { useState } from "react";
import { useArticles } from "../contexts/ArticlesContext";
import "./ArticleItem.css";
const ArticleItem = ({ article }) => {
  const userImageStatic = `${import.meta.env.BASE_URL}user.png`;
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelection = () => {
    setIsSelected(!isSelected);
  };

  //  CORRECCIÓN: manejar rating decimal
  const rating = Math.round(article.rating);

  return (
    <div className={`article-item selectable`}>
      <img src={article.image} alt={article.name} className="article-image" />

      <div className="article-content">
        <h3 className="article-title">{article.name}</h3>
        <p className="article-description">Lorem ipsum dolor sit...</p>

        <div className="article-store">
          <p className="store-name">{article.store}</p>
          <p className="article-price">${article.price}</p>
        </div>

        <div className="seller-info">
          <img src={userImageStatic} alt="Usuario" className="user-image" />
          <p className="user-name">{article.user}</p>
        </div>

        {/* ⭐ ESTRELLAS BIEN RENDERIZADAS */}
        <div className="article-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>
              {star <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>

      {article.modoAdmin && (
        <button
          className={`select-button ${isSelected ? "selected" : ""}`}
          onClick={handleToggleSelection}
          style={{ backgroundColor: isSelected ? "#3498db" : "" }}
        >
          {isSelected ? "Seleccionado" : "Seleccionar"}
        </button>
      )}
    </div>
  );
};

export default ArticleItem;