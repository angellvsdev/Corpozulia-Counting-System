import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Transition } from '@headlessui/react';
import Benefit from '../models/BenefitModel';
import ItemController from '../controllers/ItemController';
import BenefitItem from '../models/BenefitItemModel';
import Item from '../models/ItemModel';

const BenefitFormModal = ({ modalOpen, onRequestClose, onRequestSubmit, request }) => {
    const [details, setDetails] = useState('');
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [status, setStatus] = useState('APPROVED');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const fetchedItems = await ItemController.fetchItems();
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    const handleItemSelect = (item) => {
        setSelectedItems((prevItems) => {
            const itemExists = prevItems.find((i) => i.id === item.id);
            if (itemExists) {
                return prevItems.filter((i) => i.id !== item.id);
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const handleQuantityChange = (item, quantity) => {
        setSelectedItems((prevItems) =>
            prevItems.map((i) => (i.id === item.id ? { ...i, quantity: quantity } : i))
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Items");
        console.log(selectedItems);
        const itemsToAdd = status === 'APPROVED'
            ? selectedItems.map(item => {
                return BenefitItem.fromJson({
                    quantity: item.quantity,
                    item: Item.fromJson(item) // Aquí, item es el objeto completo Item
                });
            })
            : [];

        const newBenefit = {
            user: request.user,
            details: details,
            request: request,
            status: status,
            benefitItems: itemsToAdd,
            creationDate: new Date(),
        };

        try {
            await onRequestSubmit(newBenefit);
            onRequestClose();
        } catch (error) {
            console.error('Error submitting benefit:', error);
        }
    };

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={onRequestClose}
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center"
            className="w-full max-w-lg p-6 bg-white rounded-md shadow-lg outline-none"
        >
            <Transition
                as={React.Fragment}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="w-full">
                    <h3 className="mb-4 text-lg font-bold">Crear nuevo Benefit</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                Detalles
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                rows="3"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Detalles del Benefit"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                Estado
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            >
                                <option value="APPROVED">Aprobado</option>
                                <option value="REJECTED">Rechazado</option>
                            </select>
                        </div>

                        {status === 'APPROVED' && (
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-700">Seleccionar Items</label>
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`item-${item.id}`}
                                            checked={selectedItems.some((i) => i.id === item.id)}
                                            onChange={() => handleItemSelect(item)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`item-${item.id}`} className="mr-2">{item.name}</label>
                                        {selectedItems.some((i) => i.id === item.id) && (
                                            <input
                                                type="number"
                                                min="1"
                                                max={item.quantity}
                                                value={selectedItems.find((i) => i.id === item.id)?.quantity || 1}
                                                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                                className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onRequestClose}
                                className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                            >
                                Crear Benefit
                            </button>
                        </div>
                    </form>
                </div>
            </Transition>
        </Modal>
    );
};

export default BenefitFormModal;
