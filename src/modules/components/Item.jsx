// components/Item.jsx
import React from 'react';

const Item = ({ item }) => {
    const itemStyles = 'bg-gray-100 p-4 rounded shadow';
    const titleStyles = 'text-lg font-bold mb-2';
    const descriptionStyles = 'text-gray-700';

    return (
        <div className={itemStyles}>
            <h2 className={titleStyles}>{item.name}</h2>
            <p className={descriptionStyles}>{item.description}</p>
            <p>Cantidad: {item.quantity}</p>
        </div>
    );
};

export default Item;
