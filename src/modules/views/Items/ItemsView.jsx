import { useState, useEffect } from 'react';
import React from "react";
import ItemList from '../../components/ItemList';
import ItemController from "../../controllers/ItemController";

const ItemView = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await ItemController.fetchItems();
            setItems(items);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Ítems</h1>
            <ItemList items={items} />
        </div>
    );
};
export default ItemView;