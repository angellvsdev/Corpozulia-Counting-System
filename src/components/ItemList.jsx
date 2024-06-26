// components/ItemList.jsx
import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    const listStyles = 'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    return (
        <div className={listStyles}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
