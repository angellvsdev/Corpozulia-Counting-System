import { useState, useEffect } from 'react';
import React from "react";
import ItemList from '../../components/ItemList';
import ItemController from "../../controllers/ItemController";

const ItemView = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const items = await ItemController.fetchItems();
                setItems(items);
            } catch (err){
                console.error(err)
            }
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