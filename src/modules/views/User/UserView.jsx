import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Comentado para usar mocks
import { useUser } from '../../UserContext';
import Request from '../../models/Request';
import Benefit from '../../models/Benefit';

const UserView = () => {
    const { user } = useUser();
    const [request, setRequest] = useState(null);
    const [benefit, setBenefit] = useState(null); // Estado para el Benefit
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newRequestMessage, setNewRequestMessage] = useState('');

    const fetchRequest = async (userId) => {
        try {
            // Simulando la obtención de datos en lugar de usar axios
            //const responseRequest = await axios.get(`/api/requests/user/${userId}`);
           const responseRequest = {
                id: 1,
                message: "Mock request message",
                user: {
                    id: userId,
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
            };
            const userRequest = Request.fromJson(responseRequest);
            setRequest(userRequest);
        } catch (err) {
            setError(err);
        }
    };

    const fetchBenefit = async (userId) => {
        try {
            //const responseBenefit = await axios.get(`/api/benefits/user/${userId}`);
            const responseBenefit = {
                id: 1,
                details: "Mock benefit details",
                user: {
                    id: userId,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    idNumber: user.idNumber,
                    sector: user.sector,
                    location: user.location,
                    gender: user.gender,
                    age: user.age,
                    phone: user.phone
                },
                request: {
                    id: 1,
                    message: "Mock request message",
                    user: {
                        id: userId,
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
                },
                status: true,
                items: [],
                creationDate: "2024-06-18T00:00:00Z"
            };
            const userBenefit = Benefit.fromJson(responseBenefit);
            setBenefit(userBenefit);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            //LOCAL
            //    await fetchRequest(1);
            
            //    await fetchBenefit(1);
            //Servidor
            //    await fetchRequest(user.id);
            //    await fetchBenefit(user.id);
                setLoading(false);
        };

        fetchData();
    }, [user.id]);

    const handleNewRequestSubmit = async (e) => {
        e.preventDefault();
        try {
            if (request) {
                // Si ya existe un request, actualizarlo
                //const updatedRequest = new Request(request.id, newRequestMessage, user);
                 await axios.put(`/api/requests/${request.id}`, updatedRequest.toJson());
                setRequest({ ...request, message: newRequestMessage });
            } else {
                // Si no existe un request, crear uno nuevo
                //const newRequest = new Request(null, newRequestMessage, user);
                const response = await axios.post('/api/requests', newRequest.toJson());
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

    if (loading) return <div>Cargando...</div>;

    // Mostrar el Benefit si existe
    if (benefit) {
        return (
            <div className="user-requests">
                <h2>Detalles del Benefit</h2>
                <div>
                    <strong>ID del Benefit:</strong> {benefit.id} <br />
                    <strong>Detalles del Benefit:</strong> {benefit.details} <br />
                    <strong>Estado de la petición:</strong> {benefit.status ? 'Activo' : 'Inactivo'} <br />
                    <strong>ID del Request:</strong> {benefit.request.id} <br />
                    <strong>Fecha de Creación:</strong> {benefit.creationDate.toISOString()} <br />
                </div>
            </div>
        );
    }
    // Mostrar los detalles del Request si existe
    if (request) {
        return (
            <div className="user-requests">
                <h2>Detalles del Request</h2>
                <div>
                    <strong>ID del Request:</strong> {request.id} <br />
                    <strong>Mensaje:</strong> {request.message} <br />
                    <strong>ID del Usuario:</strong> {request.user.id} <br />
                    <strong>Nombre del Usuario:</strong> {request.user.name} {request.user.surname} <br />
                    <strong>Email del Usuario:</strong> {request.user.email} <br />
                    <strong>Número de Identificación del Usuario:</strong> {request.user.idNumber} <br />
                    <strong>Sector:</strong> {request.user.sector} <br />
                    <strong>Ubicación:</strong> {request.user.location} <br />
                    <strong>Género:</strong> {request.user.gender} <br />
                    <strong>Edad:</strong> {request.user.age} <br />
                    <strong>Teléfono:</strong> {request.user.phone} <br />
                    {/* Puedes continuar mostrando otros detalles según sea necesario */}
                </div>
            </div>
        );
    }

    // Mostrar el formulario para crear un nuevo Request si no hay ni Benefit ni Request
    return (
        <div className="user-requests">
            <h2>Crear Nuevo Request</h2>
            <form onSubmit={handleNewRequestSubmit}>
                <div>
                    <label>Mensaje:</label>
                    <input
                        type="text"
                        value={newRequestMessage}
                        onChange={(e) => setNewRequestMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Request</button>
            </form>
        </div>
    );
};

export default UserView;
