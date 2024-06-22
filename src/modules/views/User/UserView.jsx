import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import Request from '../../models/Request';
import Benefit from '../../models/Benefit';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom'; // Para manejar la navegación


const UserView = () => {
    const { user } = useUser();
    const [request, setRequest] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newRequestMessage, setNewRequestMessage] = useState('');
    const history = useNavigate(); // Hook para manejar la navegación

    const handleProfileButtonClick = () => {
        history('/user/profile'); // Redirigir al usuario a la ruta /user/profile
    };

    // Simulación de fetchRequest y fetchBenefit
    useEffect(() => {
        const fetchData = async () => {
            // Simular la obtención de datos en lugar de usar axios
            //await fetchRequest(user.id);
            //await fetchBenefit(user.id);

            setLoading(false);
        };

        fetchData();
    }, [user.id]);

    const handleNewRequestSubmit = async (e) => {
        e.preventDefault();
        try {
            if (request) {
                // Actualizar request existente
                setRequest({ ...request, message: newRequestMessage });
            } else {
                // Crear nuevo request
                const createdRequest = Request.fromJson({
                    id: 2,
                    message: newRequestMessage,
                    user: {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        idNumber: user.idNumber,
                        sector: user.sector,
                        location: user.location,
                        gender: user.gender,
                        age: user.age,
                        phone: user.phone
                    }
                });
                setRequest(createdRequest);
            }
            setNewRequestMessage('');
        } catch (err) {
            setError(err);
        }
    };

    // Función para cerrar el diálogo
    const handleCloseDialog = () => {
        setError(null);
    };

    // Mostrar diálogo de error si hay un error
    if (error) {
        return (
            <Transition.Root show={true} as={React.Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleCloseDialog}>
                    <div className="flex items-center justify-center min-h-screen">
                        <TransitionChild
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </TransitionChild>

                        <TransitionChild
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
                                <DialogTitle as="h3" className="text-lg font-medium text-gray-900">
                                    Error
                                </DialogTitle>
                                <div className="mt-2 text-sm text-gray-500">{error.message}</div>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={handleCloseDialog}
                                        className="text-sm font-medium text-gray-500 hover:text-gray-600"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition.Root>
        );
    }

    // Mostrar el Benefit si existe
    if (benefit) {
        return (
            <div className="container mx-auto mt-4">
                <div className="user-requests">
                    <h2 className="text-2xl font-bold">Detalles del Benefit</h2>
                    <div className="mt-4">
                        <p><strong>ID del Benefit:</strong> {benefit.id}</p>
                        <p><strong>Detalles del Benefit:</strong> {benefit.details}</p>
                        <p><strong>Estado de la petición:</strong> {benefit.status ? 'Activo' : 'Inactivo'}</p>
                        <p><strong>ID del Request:</strong> {benefit.request.id}</p>
                        <p><strong>Fecha de Creación:</strong> {new Date(benefit.creationDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Mostrar los detalles del Request si existe
    if (request) {
        return (
            <div className="container mx-auto mt-4">
                <div className="user-requests">
                    <h2 className="text-2xl font-bold">Detalles del Request</h2>
                    <div className="mt-4">
                        <p><strong>ID del Request:</strong> {request.id}</p>
                        <p><strong>Mensaje:</strong> {request.message}</p>
                        <p><strong>ID del Usuario:</strong> {request.user.id}</p>
                        <p><strong>Nombre del Usuario:</strong> {request.user.name} {request.user.surname}</p>
                        <p><strong>Email del Usuario:</strong> {request.user.email}</p>
                        <p><strong>Número de Identificación del Usuario:</strong> {request.user.idNumber}</p>
                        <p><strong>Sector:</strong> {request.user.sector}</p>
                        <p><strong>Ubicación:</strong> {request.user.location}</p>
                        <p><strong>Género:</strong> {request.user.gender}</p>
                        <p><strong>Edad:</strong> {request.user.age}</p>
                        <p><strong>Teléfono:</strong> {request.user.phone}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Mostrar el formulario para crear un nuevo Request si no hay ni Benefit ni Request
    // Mostrar el formulario para crear un nuevo Request si no hay ni Benefit ni Request
return (
    <div className="container mx-auto mt-4">
        <div className="user-requests">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Crear una petición</h2>
            <form onSubmit={handleNewRequestSubmit} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="newRequestMessage" className="block text-gray-700 font-bold mb-2">Mensaje:</label>
                    <input
                        id="newRequestMessage"
                        type="text"
                        value={newRequestMessage}
                        onChange={(e) => setNewRequestMessage(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Crear Request
                </button>
            </form>
        </div>
        <button
                onClick={handleProfileButtonClick}
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg z-10"
            >
                Mi Perfil
            </button>
    </div>
);

};

export default UserView;
