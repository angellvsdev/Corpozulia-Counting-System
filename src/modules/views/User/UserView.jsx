import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import Request from '../../models/RequestModel'; // Ajusta la ruta según la ubicación de tu modelo Request

const UserView = () => {
    const { user } = useUser();
    const [request, setRequest] = useState(null);
    const [benefit, setBenefit] = useState(null); // Estado para el Benefit
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newRequestMessage, setNewRequestMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener el Request del usuario
                const responseRequest = await axios.get(`/api/requests/user/${user.id}`);
                if (responseRequest.data) {
                    const userRequest = Request.fromJson(responseRequest.data);
                    setRequest(userRequest);
                }

                // Obtener el Benefit del usuario si existe
                const responseBenefit = await axios.get(`/api/benefits/user/${user.id}`);
                if (responseBenefit.data) {
                    setBenefit(responseBenefit.data);
                }

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [user.id]);

    const handleNewRequestSubmit = async (e) => {
        e.preventDefault();
        try {
            if (request) {
                // Si ya existe un request, actualizarlo
                const updatedRequest = new Request(request.id, newRequestMessage, { id: user.id });
                await axios.put(`/api/requests/${request.id}`, updatedRequest.toJson());
                setRequest({ ...request, message: newRequestMessage });
            } else {
                // Si no existe un request, crear uno nuevo
                const newRequest = new Request(null, newRequestMessage, { id: user.id });
                const response = await axios.post('/api/requests', newRequest.toJson());
                const createdRequest = Request.fromJson(response.data);
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
                    {/* Mostrar otros detalles del Benefit según la estructura de datos */}
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
