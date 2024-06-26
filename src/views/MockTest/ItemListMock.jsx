import React, { useState, useEffect } from 'react';
import { mockItems } from '../../mocks';

const ItemListMock = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ id: '', name: '', description: '', quantity: '', benefit: { name: '' } });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setItems(mockItems);
      } catch (error) {
        console.error('Error al obtener los items:', error.message);
      }
    };
    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleBenefitChange = (e) => {
    const { value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      benefit: { name: value },
    }));
  };

  const handleSubmit = (e) => {
    //itemController.create(newItem);
    e.preventDefault();
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItem({ id: '', name: '', description: '', quantity: '', benefit: { name: '' } });
  };

  return (
    <div>
      <h1>Mock de Lista de Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newItem.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newItem.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={newItem.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={newItem.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="benefit"
          placeholder="Beneficio"
          value={newItem.benefit.name}
          onChange={handleBenefitChange}
          required
        />
        <button type="submit">Agregar Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Beneficio</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.benefit.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemListMock;
