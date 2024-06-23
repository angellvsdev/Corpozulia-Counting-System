// controllers/RequestController.js
import axios from 'axios';
import Request from '../models/RequestModel';
import requestMocks from '../mocks/requestMocks.jsx'; // Importa los mocks de requests si los tienes

const API_URL = 'http://localhost:8080/api/requests'; // Asegúrate de que la URL es correcta

const isOnline = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.status === 200;
    } catch (error) {
        return false; // En caso de error, asumimos que no hay conexión
    }
};

const RequestController = {
    fetchRequests: async () => {
        try {
            const online = await isOnline(); // Verifica la conexión
            if (!online) {
                console.log("Offline mode: using mocks");
                // Mapear los mocks a objetos Request
                return requestMocks.map(req => new Request(req.id, req.message, req.user));
            }

            // Consulta a la API real si hay conexión
            const response = await axios.get(API_URL);
            const data = response.data.content;
            // Mapear los datos recibidos a objetos Request
            return data.map(req => new Request(req.id, req.message, req.user));
        } catch (error) {
            console.error('Error fetching requests', error);
            return [];
        }
    },

    createRequest: async (newRequest) => {
        try {
            const online = await isOnline(); // Verifica la conexión
            if (!online) {
                const nextId = Math.max(...requestMocks.map(req => req.id)) + 1;
                const createdRequest = new Request(nextId, newRequest.message, newRequest.user);
                requestMocks.push(createdRequest);
                return createdRequest;
            }

            // Creación de request en la API real si hay conexión
            const response = await axios.post(API_URL, newRequest);
            return new Request(response.data.id, response.data.message, response.data.user);
        } catch (error) {
            console.error('Error creating request', error);
            throw new Error(`Error al crear la solicitud: ${error.message}`);
        }
    },

    // Implementa métodos updateRequest y deleteRequest si es necesario
};

export default RequestController;
