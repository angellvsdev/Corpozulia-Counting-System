// controllers/ItemController.js
import axios from 'axios';
import ItemModel from '../models/ItemModel';
import items from '../mocks/itemMocks'; // Importa los mocks de ítems

const API_URL = 'http://localhost:8080/api/items'; // Asegúrate de que la URL es correcta

const isOnline = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.status === 200;
    } catch (error) {
        return false; // En caso de error, asumimos que no hay conexión
    }
};
const ItemController = {
    fetchItems: async () => {
    try {
        const online = await isOnline(); // Espera la verificación de conexión
        if (!online) {
            console.log("Offline mode: using mocks");
            // Mapear los mocks a objetos ItemModel
            return items.map(item => new ItemModel(item.id, item.name, item.description, item.quantity, item.benefitItems));
        }

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
        const online = await isOnline(); // Espera la verificación de conexión
        if (!online) {
            const nextId = Math.max(...items.map(item => item.id)) + 1;
            const createdItem = new ItemModel(nextId, newItem.name, newItem.description, newItem.quantity, newItem.benefitItems);
            items.push(createdItem);
            return createdItem;
        }

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
        const online = await isOnline(); // Espera la verificación de conexión
        if (!online) {
            const index = items.findIndex(item => item.id === itemId);
            if (index !== -1) {
                items[index] = { ...items[index], ...updatedItem };
                return new ItemModel(items[index].id, items[index].name, items[index].description, items[index].quantity, items[index].benefitItems);
            }
            throw new Error('Ítem no encontrado');
        }

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
        const online = await isOnline(); // Espera la verificación de conexión
        if (!online) {
            const index = items.findIndex(item => item.id === itemId);
            if (index !== -1) {
                items.splice(index, 1);
                return true; // Éxito en la eliminación
            }
            return false; // Ítem no encontrado
        }

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