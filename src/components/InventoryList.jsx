import React, { useState, useEffect } from "react";
import InventoryListItem from "./InventoryListItem.jsx";
import InventoryItemAddingModal from "./InventoryItemAddingModal.jsx";
import PaginationComponent from "./PaginationComponent.jsx";
import ItemController from "../controllers/ItemController.jsx";
import Item from "../models/ItemModel.jsx";
import SearchInput from "./SearchInput";

const InventoryList = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchItems(currentPage); // Cargar la primera página al montar el componente
    }, [currentPage]);

    const fetchItems = async (pageNumber) => {
        try {
            setLoading(true);
            const data = await ItemController.fetchItems(pageNumber);
            setItems(data.content.map(item => new Item(item.id, item.name, item.description, item.quantity, item.benefitItems)));
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching items', error);
            setLoading(false);
            setError('Error al cargar los ítems');
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemAdded = (newItem) => {
        setItems([...items, newItem]);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleItemEdited = (itemId, editedItem) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, ...editedItem } : item
        );
        setItems(updatedItems);
    };

    const handleItemDeleted = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSearch = async (searchTerm) => {
        setSearchTerm(searchTerm);
        try {
            setLoading(true);
            const searchResults = await ItemController.searchItems(searchTerm); // Aquí debes ajustar según cómo se implementa searchItems en ItemController
            setSearchResults(searchResults.content.map(item => new Item(item.id, item.name, item.description, item.quantity, item.benefitItems)));
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error('Error searching items', error);
            setLoading(false);
            setError('Error al buscar los ítems');
            setSearchResults([]);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    // Determinar qué lista mostrar (todos los items o los resultados de la búsqueda)
    const displayedItems = searchTerm === '' ? items : searchResults;

    return (
        <div className="flex flex-col w-full h-auto p-2 mx-auto my-8 lg:w-4/5 lg:p-1 lg:my-12 lg:ml-8 xl:mx-auto xl:max-h-96">
            <div className="plus-jakarta-sans-bold w-full h-12 bg-gradient-to-r from-emerald-700 from-10% via-emerald-600 via-30% to-emerald-500 to-90% rounded-lg mb-2 lg:mb-4">
                <button
                    onClick={openModal}
                    type="button"
                    className="w-full h-full p-2 font-bold text-white transition border-2 rounded-lg border-emerald-900 hover:bg-slate-200 hover:text-emerald-700 hover:border-emerald-500"
                >
                    <i className="fa-solid fa-truck-ramp-box"></i> Añadir Insumo
                </button>
            </div>
            {/* Barra de búsqueda utilizando SearchInput */}
            <SearchInput onSearch={handleSearch} />

            <div className="flex flex-col flex-grow w-full p-2 lg:p-1 my-1 lg:my-0.5 bg-yellow-500 rounded-lg overflow-y-auto max-h-96 lg:max-h-72">
                {/* Mostrar mensajes de carga, error o resultados */}
                {loading ? (
                    <p className="text-gray-500 text-center">Cargando...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : displayedItems.length === 0 ? (
                    <p className="text-gray-500 text-center">No encontrado</p>
                ) : (
                    displayedItems.map((item) => (
                        <InventoryListItem key={item.id}
                            item={item}
                            onEdit={handleItemEdited}
                            onDelete={handleItemDeleted}
                        />
                    ))
                )}
            </div>
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <InventoryItemAddingModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                onItemAdded={handleItemAdded}
            />
        </div>
    );
};

export default InventoryList;
