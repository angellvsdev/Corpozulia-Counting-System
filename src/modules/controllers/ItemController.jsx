// controllers/ItemController.js
import axios from 'axios';
import ItemModel from '../models/ItemModel';

const API_URL = 'http://localhost:8080/api/items'; // Asegúrate de que la URL es correcta

const ItemController = {
    fetchItems: async () => {
    try {
        // Consulta a la API real si hay conexión
        const response = await axios.get(API_URL);
        const data = response.data.content;
        // Mapear los datos recibidos a objetos ItemModel
        return data.map(item => new ItemModel(item.id, item.name, item.description, item.quantity, item.benefitItems));
    } catch (error) {
        console.error('Error fetching items', error);
        return [];
    }
},

createItem: async (newItem) => {
    try {
        // Creación de ítem en la API real si hay conexión
        const response = await axios.post(API_URL, newItem);
        return new ItemModel(response.data.id, response.data.name, response.data.description, response.data.quantity, response.data.benefitItems);
    } catch (error) {
        console.error('Error creating item', error);
        throw new Error(`Error al crear el ítem: ${error.message}`);
    }
},

updateItem: async (itemId, updatedItem) => {
    try {
        // Actualización de ítem en la API real si hay conexión
        const response = await axios.put(`${API_URL}/${itemId}`, updatedItem);
        return new ItemModel(response.data.id, response.data.name, response.data.description, response.data.quantity, response.data.benefitItems);
    } catch (error) {
        console.error('Error updating item', error);
        throw new Error(`Error al actualizar el ítem: ${error.message}`);
    }
},

deleteItem: async (itemId) => {
    try {
        // Eliminación de ítem en la API real si hay conexión
        const response = await axios.delete(`${API_URL}/${itemId}`);
        return response.status === 204; // Indica éxito si el código de estado es 204 (No Content)
    } catch (error) {
        console.error('Error deleting item', error);
        throw new Error(`Error al eliminar el ítem: ${error.message}`);
    }
}
}
export default ItemController;