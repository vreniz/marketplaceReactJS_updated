import React, { useState } from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import './AddArticleForm.css';

const AddArticleForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { articles, setArticles } = useArticles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      name,
      price,
      store,
      description,
      image
    };

    setArticles((prevArticles) => [...prevArticles, newArticle]);

    setName('');
    setPrice('');
    setStore('');
    setDescription('');
    setImage('');
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="form-container">
      <div className="button-container">
        <button className='botoncito' onClick={() => setIsEditing(false)}>Agregar Artículo</button>
        <button className='botoncito2' onClick={() => setIsEditing(true)}>Editar Artículo</button>
      </div>

      <form onSubmit={handleSubmit}>
        {isEditing && (
          <>
            <label>Elegir Artículo:</label>
            <select
              value={selectedArticle}
              onChange={(e) => setSelectedArticle(e.target.value)}
            >
              {articles.map((article, index) => (
                <option key={index} value={article.name}>
                  {article.name}
                </option>
              ))}
            </select>
          </>
        )}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del artículo"
        />

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
        />

        <input
          type="text"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          placeholder="Tienda"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
        />

        <input type="file" onChange={handleImageChange} />

        <button type="submit">
          {isEditing ? 'Actualizar Artículo' : 'Agregar Artículo'}
        </button>
      </form>
    </div>
  );
};

export default AddArticleForm;
