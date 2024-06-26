// controllers/BenefitController.js
import axios from 'axios';
import Benefit from '../models/BenefitModel'; // Asegúrate de importar el modelo Benefit
import benefits from '../mocks/benefitMocks'; // Importa los mocks de beneficios

const API_URL = 'http://localhost:8080/api/benefits'; // Asegúrate de que la URL es correcta

const BenefitController = {
    getAllBenefits: async () => {
        try {
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


            // Creación de beneficio en la API real si hay conexión
            const response = await axios.post(`${API_URL}/request/${requestId}`, newBenefit);
            return Benefit.fromJson(response.data); // Devolver la instancia de Benefit creada
        } catch (error) {
            throw new Error(`Error al crear el beneficio: ${error.message}`);
        }
    },

    deleteBenefit: async (benefitId) => {
        try {
            // Eliminación de beneficio en la API real si hay conexión
            const response = await axios.delete(`${API_URL}/${benefitId}`);
            return response.status === 204; // Indica éxito si el código de estado es 204 (No Content)
        } catch (error) {
            throw new Error(`Error al eliminar el beneficio: ${error.message}`);
        }
    },
    updateBenefit: async (id, newBenefit) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, newBenefit);

            if (response.status === 200) {
                return Benefit.fromJson(response.data); // Devuelve el beneficio actualizado
            } else if (response.status === 404) {
                return null; // Manejar caso donde el recurso no se encuentra
            } else {
                throw new Error(`Unexpected status code ${response.status}`);
            }
        } catch (error) {
            throw new Error(`Error al actualizar el beneficio: ${error.message}`);
        }
    }
};

export default BenefitController;