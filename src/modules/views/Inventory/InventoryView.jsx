import { useState, useEffect } from 'react';
import React from "react";
import UserMenu from "../../components/UserMenu";
import InventoryList from "../../components/InventoryList";
import ItemController from "../../controllers/ItemController";
import InventoryItemAddingModal from '../../components/InventoryItemAddingModal';

const InventoryView = () => {
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
        <>
            <div className="w-screen h-screen bg-white bg-gradient-to-r from-yellow-600 to-yellow-500 blur-md">
                <div className="flex flex-col w-screen m-auto bg-gray-400 h-1/3">
                    <div className="flex items-start content-center w-1/2 mx-auto h-2/5">
                        <img className="object-cover w-10/12 mx-auto fa-solid fa-cart-flatbed xl:w-6/12" src="src\assets\undraw_logistics_x-4-dc.svg" />
                    </div>
                    <div className="flex content-center self-end w-full h-full">
                        <h1 className="m-auto text-4xl font-extrabold xl:text-8xl text-slate-300 lg:text-2x1">Gestión de Inventario</h1>
                    </div>
                </div>
                <InventoryList items={items} />
                <UserMenu context="lg:right-0 lg:w-26 lg:text-sm" />
            </div>
            <InventoryItemAddingModal />
        </>
    )

}

export default InventoryView;