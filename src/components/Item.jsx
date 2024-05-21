import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
return (
    <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link to={`/item/${item.id}`}>View Details</Link>
    </div>
    );
};

export default Item;