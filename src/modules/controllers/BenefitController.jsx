// controllers/BenefitController.js
import axios from 'axios';
import Benefit from '../models/BenefitModel'; // Asegúrate de importar el modelo Benefit
import benefits from '../mocks/benefitMocks'; // Importa los mocks de beneficios

const API_URL = 'api/benefits'; // Asegúrate de que la URL es correcta

const isOnline = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.status === 200;
    } catch (error) {
        return false; // En caso de error, asumimos que no hay conexión
    }
};

const BenefitController = {
    getAllBenefits: async () => {
        try {
            const online = await isOnline(); // Espera la verificación de conexión
            if (!online) {
                console.log("Offline mode: using mocks");
                return benefits.map(benefit => Benefit.fromJson(benefit)); // Mapear a instancias de Benefit
            }

            // Consulta a la API real si hay conexión
            const response = await axios.get(API_URL);
            return response.data.content.map(benefit => Benefit.fromJson(benefit)); // Mapear a instancias de Benefit
        } catch (error) {
            throw new Error(`Error al obtener los beneficios: ${error.message}`);
        }
    },
    getBenefitsByUserId: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}`);

            if (response.status === 400) {
                // Manejar error de solicitud incorrecta
                return null;
            } else if (response.status === 404) {
                // Manejar recurso no encontrado
                return null;
            } else if (response.status === 200) {
                // Procesar el beneficio encontrado
                return Benefit.fromJson(response.data); // Asume que tienes un método fromJson en tu modelo Benefit
            } else {
                throw new Error(`Unexpected status code ${response.status}`);
            }
        } catch (error) {
            throw new Error(`Error al obtener los beneficios: ${error.message}`);
        }
    },
    createBenefit: async (requestId, newBenefit) => {
        try {
            const online = await isOnline(); // Espera la verificación de conexión
            if (!online) {
                const nextId = Math.max(...benefits.map(benefit => benefit.id)) + 1;
                const createdBenefit = new Benefit(
                    nextId,
                    User.fromJson(newBenefit.user),
                    newBenefit.details,
                    Request.fromJson(newBenefit.request),
                    'Pending',
                    newBenefit.items.map(item => Item.fromJson(item)),
                    newBenefit.creationDate
                );
                benefits.push(createdBenefit.toJson());
                return createdBenefit;
            }

            // Creación de beneficio en la API real si hay conexión
            const response = await axios.post(`${API_URL}/request/${requestId}`, newBenefit);
            return Benefit.fromJson(response.data); // Devolver la instancia de Benefit creada
        } catch (error) {
            throw new Error(`Error al crear el beneficio: ${error.message}`);
        }
    },

    deleteBenefit: async (benefitId) => {
        try {
            const online = await isOnline(); // Espera la verificación de conexión
            if (!online) {
                const index = benefits.findIndex(benefit => benefit.id === benefitId);
                if (index !== -1) {
                    benefits.splice(index, 1);
                    return true; // Éxito en la eliminación
                }
                return false; // Beneficio no encontrado
            }

            // Eliminación de beneficio en la API real si hay conexión
            const response = await axios.delete(`${API_URL}/${benefitId}`);
            return response.status === 204; // Indica éxito si el código de estado es 204 (No Content)
        } catch (error) {
            throw new Error(`Error al eliminar el beneficio: ${error.message}`);
        }
    }
};

export default BenefitController;
