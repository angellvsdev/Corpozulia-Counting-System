// controllers/ItemController.js
import axios from 'axios';
import ItemModel from '../models/Item';

const fetchItems = async () => {
    try {
        const response = await axios.get('/api/items');
        const data = response.data.content;
        // Mapear los datos recibidos a objetos ItemModel
        const items = data.map(item => new ItemModel(item.id, item.name, item.description, item.quantity, item.benefitItems));
        return items;
    } catch (error) {
        console.error('Error fetching items', error);
        return [];
    }
};

export default {
    fetchItems
};
