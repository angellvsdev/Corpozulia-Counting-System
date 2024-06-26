import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import LoadingModal from '../../components/LoadingModal';
import BenefitDetail from '../../components/BenefitDetail';
import BenefitController from '../../controllers/BenefitController';
import RequestController from '../../controllers/RequestController';

const UserView = () => {
    const { user } = useUser();
    const [request, setRequest] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [benefitError, setBenefitError] = useState(null);
    const [requestError, setRequestError] = useState(null);
    const [newRequestMessage, setNewRequestMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedBenefit = await BenefitController.getBenefitsByUserId(user.id);
                setBenefit(fetchedBenefit);
            } catch (error) {
                setBenefitError(error);
            }

            try {
                const fetchedRequest = await RequestController.getRequestsByUserId(user.id);
                if (fetchedRequest){
                    setRequest(fetchedRequest);
                } else {
                    console.error("Request NULO");
                }
                console.log(fetchedRequest);
            } catch (error) {
                setRequestError(error);
            }
            setLoading(false);
        };

        if (user && user.id) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [user]);

    const handleNewRequestSubmit = async (e) => {
        e.preventDefault();
        try {
            if (request) {
                await RequestController.updateRequest(request.id, { message: newRequestMessage });
                setRequest({ ...request, message: newRequestMessage });
            } else {
                const createdRequest = await RequestController.createRequest({
                    message: newRequestMessage,
                    user: { ...user }
                });
                setRequest(createdRequest);
            }
            setNewRequestMessage('');
        } catch (error) {
            setRequestError(error);
        }
    };

    const handleCloseDialog = () => {
        setBenefitError(null);
        setRequestError(null);
    };

    if (loading) {
        return <LoadingModal />;
    }

    if (benefitError || requestError) {
        const error = benefitError || requestError;
        return (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-lg">
                        <h3 className="text-lg font-medium text-gray-900">Error</h3>
                        <div className="mt-2 text-sm text-gray-500">{error.message}</div>
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={handleCloseDialog}
                                className="text-sm font-medium text-gray-500 hover:text-gray-600"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-4">
            {benefit && (
                <div className="mb-8">
                    <h1 className="mb-4 text-2xl font-bold">Benefit Detail</h1>
                    <BenefitDetail benefit={benefit} />
                </div>
            )}
            
            {request ? (
                <div className="user-requests">
                    <h2 className="text-2xl font-bold">Detalles del Request</h2>
                    <div className="mt-4">
                        <p><strong>ID del Request:</strong> {request.id}</p>
                        <p><strong>Mensaje:</strong> {request.message}</p>
                        {request.user && (
                            <>
                                <p><strong>ID del Usuario:</strong> {request.user.id}</p>
                                <p><strong>Nombre del Usuario:</strong> {request.user.name} {request.user.surname}</p>
                                <p><strong>Email del Usuario:</strong> {request.user.email}</p>
                                <p><strong>Número de Identificación del Usuario:</strong> {request.user.idNumber}</p>
                                <p><strong>Sector:</strong> {request.user.sector}</p>
                                <p><strong>Ubicación:</strong> {request.user.location}</p>
                                <p><strong>Género:</strong> {request.user.gender}</p>
                                <p><strong>Edad:</strong> {request.user.age}</p>
                                <p><strong>Teléfono:</strong> {request.user.phone}</p>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className="user-requests">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Crear una petición</h2>
                    <form onSubmit={handleNewRequestSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="newRequestMessage" className="block mb-2 font-bold text-gray-700">Mensaje:</label>
                            <input
                                id="newRequestMessage"
                                type="text"
                                value={newRequestMessage}
                                onChange={(e) => setNewRequestMessage(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        >
                            Crear Request
                        </button>
                    </form>
                </div>
            )}
            <button
                onClick={() => navigate('/user/profile')}
                className="fixed z-10 px-4 py-2 font-bold text-white bg-blue-500 rounded-lg shadow-lg bottom-4 right-4 hover:bg-blue-700"
            >
                Mi Perfil
            </button>
        </div>
    );
};

export default UserView;
