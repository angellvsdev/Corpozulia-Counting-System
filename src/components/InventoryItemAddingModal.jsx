import React, { useState } from "react";
import Modal from 'react-modal';
import InventoryItemAddingModalInput from "./InventoryItemAddingModalInput";
import ItemController from "../controllers/ItemController";

const InventoryItemAddingModal = ({ isOpen, closeModal, onItemAdded }) => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [quantityInStock, setQuantityInStock] = useState("");
    const handleCreateItem = async () => {
        try {
            console.log(productName, productDescription, quantityInStock);
            const newItem = {
                name: productName,
                description: productDescription,
                quantity: quantityInStock,
            };
            console.log(newItem)
            const createdItem = await ItemController.createItem(newItem);

            onItemAdded(createdItem);
            setProductName("");
            setProductDescription("");
            setQuantityInStock("");
            // Close modal after successful creation
            closeModal();
        } catch (error) {
            console.error('Error creating item', error);
            // Handle error (e.g., show an error message to the user)
        }
    };
    const customStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            backdropFilter: "blur(8px)",
        },
        // content: {
        //     position: "absolute",
        //     top: "50%",
        //     left: "50%",
        //     transform: "translate(-50%, -50%)",
        //     maxWidth: "90%",
        //     width: "fit-content",
        //     maxHeight: "90%",
        //     overflow: "auto",
        //     borderRadius: "0.75rem",
        //     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        //     backgroundColor: "#FFFFFF",
        //     padding: "2rem",
        // }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Añadir Item"
            style={customStyles}
            className="flex justify-center items-center flex-wrap h-screen"
            ariaHideApp={false} // Para evitar warnings de accesibilidad en React Modal
        >
            <div className="w-11/12 md:w-3/5 lg:w-2/5 xl:w-1/3 bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <button onClick={closeModal} className="self-end mb-2 px-4 py-2 font-medium text-white bg-red-900 rounded-md hover:bg-red-700">Cerrar</button>
                    <img src="/src/assets/undraw_order_delivered_re_v4ab (1).svg" alt="Mujer cargando cajas" className="w-24 h-auto mb-8" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-400 mb-4">Añadir Item</h1>
                        <p className="text-sm text-gray-600 mb-6">Bienvenido, para añadir un nuevo elemento al inventario de la empresa, rellena todos los campos y presiona el botón "Listo".</p>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col">
                            <InventoryItemAddingModalInput
                                inputTitle="Nombre del Producto"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <InventoryItemAddingModalInput
                                inputTitle="Descripción del Producto"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)} />
                            <InventoryItemAddingModalInput
                                inputTitle="Cantidad en Stock"
                                inputType="number"
                                value={quantityInStock}
                                onChange={(e) => setQuantityInStock(e.target.value)} />
                        </div>
                        <div className="mt-6">
                            <button onClick={handleCreateItem} className="w-full py-2 rounded-md bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 text-white font-bold hover:from-emerald-600 hover:to-emerald-400 hover:text-emerald-700">Listo</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default InventoryItemAddingModal;
