// Benefit.jsx

import React, { useState } from 'react';
import BenefitController from '../controllers/BenefitController';
import { Dialog } from '@headlessui/react'; // Importamos Dialog de Headless UI

const Benefit = ({ benefit, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBenefit, setEditedBenefit] = useState({ ...benefit });
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedBenefit = await BenefitController.updateBenefit(benefit.id, editedBenefit);
      onUpdate(updatedBenefit);
      setIsEditing(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await BenefitController.deleteBenefit(benefit.id);
      onDelete(benefit.id);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBenefit(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedBenefit.id}
            onChange={handleChange}
            className="border rounded-md p-2 mb-2 w-full"
          />
          <input
            type="text"
            name="description"
            value={editedBenefit.details}
            onChange={handleChange}
            className="border rounded-md p-2 mb-2 w-full"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">{benefit.id}</h3>
          <p className="mb-4">{benefit.details}</p>

          <h4 className="text-md font-semibold mb-2">Request</h4>
          <p className="mb-2">ID: {benefit.request.id}</p>
          <p className="mb-4">Message: {benefit.request.message}</p>
          <p className="mb-4">Status: {benefit.status}</p>
          {benefit.benefitItems.length > 0 ? (
            <ul className="mb-4">
              <h4 className="text-md font-semibold mb-2">Benefit Items</h4>
              {benefit.benefitItems.map(benefitItem => (
                <li key={benefitItem.id}>
                  {benefitItem.item.name} - Quantity: {benefitItem.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No benefit items available.</p>
          )}
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefit;
