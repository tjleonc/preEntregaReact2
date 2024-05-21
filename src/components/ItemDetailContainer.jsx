import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('/data/items.json');
      const items = await response.json();
      const foundItem = items.find((item) => item.id === parseInt(id));
      setItem(foundItem);
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;