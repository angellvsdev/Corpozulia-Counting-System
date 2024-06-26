import React from "react";
import InventoryListItem from "./InventoryListItem.jsx";
import InventoryItemAddingModal from "./InventoryItemAddingModal.jsx";
import { useState } from "react";

const InventoryList = ({ items, setItems }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleItemAdded = (newItem) => {
        setItems([...items, newItem]); // Add the new item to the existing items array
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
            <div className="flex flex-col flex-grow w-full p-2 lg:p-1 my-1 lg:my-0.5 bg-yellow-500 rounded-lg overflow-y-auto max-h-96 lg:max-h-72">
                {items.map((item) => (
                    <InventoryListItem key={item.id} 
                    item={item}
                    onEdit={handleItemEdited} // Pasando la función de edición
                    onDelete={handleItemDeleted} // Pasando la función de eliminación
/>
                ))}
            </div>
            <InventoryItemAddingModal 
            isOpen={isModalOpen} 
            closeModal={closeModal} 
            onItemAdded={handleItemAdded} />
        </div>
    );
};

export default InventoryList;
