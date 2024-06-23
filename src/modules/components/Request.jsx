// components/Request.js
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import BenefitFormModal from './BenefitFormModal';
import BenefitController from '../controllers/BenefitController';
const Request = ({ request }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const handleCreateBenefit = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmitBenefit = (newBenefit) => {
        // Aquí podrías enviar el nuevo Benefit a través de tu lógica de controlador o almacenarlo localmente
        try{
            BenefitController.createBenefit(newBenefit.request.id);
        } catch (err){
            console.error(err);
        }
        console.log('Nuevo Benefit creado:', newBenefit);
        // Aquí podrías enviar el nuevo Benefit a través de tu lógica de controlador o almacenarlo localmente
        // Por ejemplo, podrías llamar a una función de controlador para manejar la creación del Benefit
        handleCloseModal();
    };

    return (
        <div className="border rounded-md p-4 mb-4">
            <div className="flex justify-between mb-2">
                <h2 className="text-lg font-bold">{request.message}</h2>
                <p className="text-gray-500">{`ID: ${request.id}`}</p>
            </div>

            {/* Acordeón para detalles del usuario */}
            <div>
                <button
                    className="w-full bg-gray-200 text-gray-700 font-bold py-2 px-4 mb-2 rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Cerrar detalles' : 'Ver detalles'}
                </button>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {(ref) => (
                        <div ref={ref} className="bg-gray-100 p-4 rounded-md">
                            <p className="text-gray-700 mb-2">{`User ID: ${request.user.id}`}</p>
                            <p className="text-gray-700 mb-2">{`Name: ${request.user.name}`}</p>
                            <p className="text-gray-700 mb-2">{`Surname: ${request.user.surname}`}</p>
                            <p className="text-gray-700 mb-2">{`Email: ${request.user.email}`}</p>
                            <p className="text-gray-700 mb-2">{`Sector: ${request.user.sector}`}</p>
                            <p className="text-gray-700 mb-2">{`Location: ${request.user.location}`}</p>
                            <p className="text-gray-700 mb-2">{`Gender: ${request.user.gender}`}</p>
                            <p className="text-gray-700 mb-2">{`Age: ${request.user.age}`}</p>
                            <p className="text-gray-700 mb-2">{`Phone: ${request.user.phone}`}</p>

                            {/* Botón para crear un nuevo Benefit */}
                            <button
                                onClick={handleCreateBenefit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none"
                            >
                                Crear Benefit
                            </button>

                            {/* Modal para crear un nuevo Benefit */}
                            <BenefitFormModal
                                isOpen={modalOpen}
                                onRequestClose={handleCloseModal}
                                onRequestSubmit={handleSubmitBenefit}
                                request={request}
                            />
                        </div>
                    )}
                </Transition>
            </div>
        </div>
    );
};

export default Request;
