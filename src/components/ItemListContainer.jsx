import React, { useState, useEffect } from 'react';
import Item from './Item';
import AddItem from './AddItem';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/data/items.json');
      const items = await response.json();
      setItemList(items);
    };

    fetchItems();
  }, []);

  const addItem = (newItem) => {
    setItemList((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, ...newItem },
    ]);
  };

  return (
    <div>
      <h1>Item List</h1>
      <AddItem onAdd={addItem} />
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;