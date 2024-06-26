import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faWrench, faPenToSquare, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import ItemController from "../controllers/ItemController";
const InventoryListItem = ({ item, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState({
        name: item.name,
        description: item.description,
        quantity: item.quantity
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        // Aquí podrías implementar la lógica para guardar los cambios
        // Por ejemplo, podrías llamar a una función `onSave` pasando `editedItem`
        const updatedItem = await ItemController.updateItem(item.id, editedItem);
        onEdit(updatedItem.id, updatedItem);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        // Aquí podrías implementar la lógica para cancelar la edición
        // Por ejemplo, podrías restaurar el estado original del item
        setEditedItem({
            name: item.name,
            description: item.description,
            quantity: item.quantity
        });
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({
            ...editedItem,
            [name]: value
        });
    };
    const handleDeleteClick = async () => {
        try {
            await ItemController.deleteItem(item.id);
            onDelete(item.id);
        } catch (error) {
            console.error('Error al eliminar el ítem:', error);
            // Manejar el error (mostrar mensaje al usuario, etc.)
        }
    };
    return (
        <div className="flex flex-wrap sm:flex-nowrap w-full h-auto sm:h-24 my-1 sm:my-2 rounded-lg bg-slate-300 p-2 sm:p-1">
            <button className="flex justify-center w-16 h-16 sm:w-16 sm:h-full text-2xl sm:text-4xl rounded-lg bg-slate-400">
                <FontAwesomeIcon icon={faBox} className="self-center text-white" />
            </button>
            <div className="flex flex-col flex-grow mx-2 sm:mx-4 my-2 plus-jakarta-sans-light">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={editedItem.name}
                            onChange={handleChange}
                            className="text-lg sm:text-xl font-extrabold text-slate-950 focus:outline-none"
                        />
                        <textarea
                            name="description"
                            value={editedItem.description}
                            onChange={handleChange}
                            className="text-sm text-slate-600 font-medium mt-1 mb-2 h-12 sm:h-auto focus:outline-none"
                        />
                        <input
                            type="number"
                            name="quantity"
                            value={editedItem.quantity}
                            onChange={handleChange}
                            className="text-xs font-bold text-slate-600 focus:outline-none"
                        />
                    </>
                ) : (
                    <>
                        <p className="text-lg sm:text-xl font-extrabold text-slate-950">{item.name}</p>
                        <p className="text-sm text-slate-600 font-medium">{item.description}</p>
                        <p className="text-xs font-bold text-slate-600">Stock: {item.quantity}</p>
                    </>
                )}
            </div>
            <div className="flex items-center ml-auto space-x-4">
                {isEditing ? (
                    <>
                        <button type="button" onClick={handleSaveClick} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-700 border-2 rounded-full border-green-950 flex items-center justify-center text-white">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button type="button" onClick={handleCancelClick} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-700 border-2 rounded-full border-red-950 flex items-center justify-center text-white">
                            <FontAwesomeIcon icon={faBan} />
                        </button>
                    </>
                ) : (
                    <>
                        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-slate-400 border-2 border-slate-950 rounded-full flex items-center justify-center text-white">
                            <FontAwesomeIcon icon={faWrench} />
                        </div>
                        <div className="relative ml-2">
                            <button type="button" onClick={handleEditClick} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-800 to-orange-700 border-2 rounded-full border-orange-950 flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </div>
                        <div className="relative ml-2">
                            <button type="button" onClick={(handleDeleteClick)} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-700 border-2 rounded-full border-red-950 flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faBan} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default InventoryListItem;
