import { useState, useEffect } from 'react';
import React from "react";
import InventoryList from "../../components/InventoryList";
import ItemController from "../../controllers/ItemController";
import PaginationComponent from '../../components/PaginationComponent';
import Item from '../../models/ItemModel';

const InventoryView = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // Estado para almacenar el número de página actual
    const [totalPages, setTotalPages] = useState(0); // Estado para almacenar el número total de páginas disponibles
    
    useEffect(() => {
        const fetchItems = async (pageNumber) => {
            try {
                const data = await ItemController.fetchItems(pageNumber);
                setItems(data.content.map(item => new Item(item.id, item.name, item.description, item.quantity, item.benefitItems))); // Establecer los ítems de la página actual
                setTotalPages(data.totalPages); // Establecer el número total de páginas
            } catch (error) {
                console.error('Error fetching items', error);
            }
        };
        fetchData();
    }, []);

    // return (     
    //     fetchItems(currentPage); // Cargar la primera página al montar el componente
    // }, [items, currentPage]);
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };
    // return (
    //     <div>
    //         <h1>Lista de Ítems</h1>
    //         <ItemList items={items} />
    //     </div>
    // );
    return (
        <>
            <div className="w-screen h-screen bg-white bg-gradient-to-r from-yellow-600 to-yellow-500">
                <div className="flex flex-col w-screen m-auto bg-gray-400 h-1/3">
                    <div className="flex items-start content-center w-1/2 mx-auto h-2/5">
                        <img className="object-cover w-10/12 mx-auto fa-solid fa-cart-flatbed xl:w-6/12" src="/src/assets/undraw_logistics_x-4-dc.svg" />
                    </div>
                    <div className="flex content-center self-end w-full h-full">
                        <h1 className="m-auto text-4xl font-extrabold xl:text-8xl text-slate-300 lg:text-2x1">Gestión de Inventario</h1>
                    </div>
                </div>
                <InventoryList items={items} setItems={setItems} />
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )

}

export default InventoryView;