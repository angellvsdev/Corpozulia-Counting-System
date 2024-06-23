import React, { useState } from 'react';
import Modal from 'react-modal';
import { Transition } from '@headlessui/react';
import Benefit from '../models/BenefitModel';
const BenefitFormModal = ({ isOpen, onRequestClose, onRequestSubmit, request }) => {
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(request);
        const newBenefit = Benefit.fromJson({
            user: request.user,
            details: details,
            request: request,
            status: "APPROVED", // Por defecto, el status puede ser true o false según necesites
            items: [], // Aquí puedes inicializar los items del Benefit si es necesario
            creationDate: new Date()
        });
        onRequestSubmit(newBenefit);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center"
            className="bg-white w-full max-w-lg p-6 rounded-md shadow-lg outline-none"
        >
            <Transition.Child
                as={React.Fragment}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="w-full">
                    <h3 className="text-lg font-bold mb-4">Crear nuevo Benefit</h3>
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
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Detalles del Benefit"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onRequestClose}
                                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
                            >
                                Crear Benefit
                            </button>
                        </div>
                    </form>
                </div>
            </Transition.Child>
        </Modal>
    );
};

export default BenefitFormModal;
