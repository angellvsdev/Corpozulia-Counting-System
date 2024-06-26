import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import BenefitFormModal from './BenefitFormModal';
import BenefitController from '../controllers/BenefitController';

const Request = ({ request }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el acordeón
    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad del Request
    const handleCreateBenefit = () => {
        setModalOpen(true); // Abrir el modal al hacer clic en "Crear Benefit"
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Cerrar el modal al hacer clic en cerrar o submit
    };

    const handleSubmitBenefit = (newBenefit) => {
        try {
            BenefitController.createBenefit(newBenefit.request.id, newBenefit);
            handleCloseModal(); // Cerrar el modal después de enviar el Benefit
            setIsVisible(false); // Ocultar el Request después de crear el Benefit
        } catch (err) {
            console.error(err);
        }
    };
    if (!isVisible) {
        return null; // No renderizar nada si isVisible es false
    }
    return (
        <div className="p-4 mb-4 border rounded-md bg-slate-300">
            <div className="flex mb-2">
                <div className='flex flex-col justify-center p-2 rounded-full shadow-md w-14 h-14 bg-gradient-to-r from-slate-200 to-slate-300 text-emerald-600'>
                 <i className="mx-auto text-3xl fa-solid fa-seedling"></i>
                </div>
                <div className='flex flex-col' >
                    <h2 className="mx-4 text-sm font-extrabold md:text-md lg:text-xl text-slate-700">{request.user.name} {request.user.surname}</h2>
                    <p className="mx-4 mb-6 font-medium text-slate-600">{`ID: ${request.id}`}</p>            
                </div>
            </div>

            {/* Acordeón para detalles del usuario */}
            <div>
                <button
                    className="w-full px-4 py-2 mb-2 font-bold rounded-md shadow-md bg-gradient-to-r from-gray-900 to-gray-700 focus:outline-none text-slate-300 shadow-slate-950"
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
                    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-700 plus-jakarta-sans-light">
                        <p className="mb-2 text-slate-300">{`User ID: ${request.user.id}`}</p>
                        <p className="mb-2 text-slate-300">{`Name: ${request.user.name}`}</p>
                        <p className="mb-2 text-slate-300">{`Surname: ${request.user.surname}`}</p>
                        <p className="mb-2 text-slate-300">{`Email: ${request.user.email}`}</p>
                        <p className="mb-2 text-slate-300">{`Sector: ${request.user.sector}`}</p>
                        <p className="mb-2 text-slate-300">{`Location: ${request.user.location}`}</p>
                        <p className="mb-2 text-slate-300">{`Gender: ${request.user.gender}`}</p>
                        <p className="mb-2 text-slate-300">{`Age: ${request.user.age}`}</p>
                        <p className="mb-2 text-slate-300">{`Phone: ${request.user.phone}`}</p>

                        {/* Botón para crear un nuevo Benefit */}
                        <button
                            onClick={handleCreateBenefit}
                            className="px-4 py-2 mt-4 font-bold text-gray-900 transition bg-gray-300 rounded hover:bg-gray-950 hover:text-gray-300 focus:outline-none"
                        >
                            Crear Benefit
                        </button>

                        {/* Modal para crear un nuevo Benefit */}
                        <BenefitFormModal
                            modalOpen={modalOpen}
                            onRequestClose={handleCloseModal}
                            onRequestSubmit={handleSubmitBenefit}
                            request={request}
                        />
                    </div>

                </Transition>
            </div>
        </div>
    );
};

export default Request;
