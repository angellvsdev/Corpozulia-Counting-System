import React, { useState } from 'react';
import BenefitController from '../controllers/BenefitController';
import { Dialog } from '@headlessui/react'; // Importamos Dialog de Headless UI
import BenefitFormModal from './BenefitFormModal';
import ConfirmationModal from './ConfirmationModal';

const Benefit = ({ benefit, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // Estado para controlar la visibilidad de los detalles
  const [editModalOpen, setEditModalOpen] = useState(false); // Estado para controlar la apertura del modal de edición
  const [editedBenefit, setEditedBenefit] = useState({}); // Estado para almacenar los datos editados del beneficio

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  const handleEdit = () => {
    setEditedBenefit({
      id: benefit.id,
      details: benefit.details,
      status: benefit.status,
      benefitItems: benefit.benefitItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
        item: { ...item.item }
      })),
      user: benefit.user,
      request: benefit.request
    });
    setEditModalOpen(true);
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleConfirmAction = (confirmed) => {
    if (confirmed) {
      handleDelete();
      console.log('Acción confirmada');
      // Aquí puedes realizar cualquier lógica o llamada a funciones que necesites al confirmar la acción.
    } else {
      console.log('Acción cancelada');
      // Manejar la cancelación de la acción si es necesario
    }
    setIsOpen(false); // Cerrar el diálogo después de confirmar o cancelar
  };

  const handleSave = async () => {
    try {
      const updatedBenefit = await BenefitController.updateBenefit(benefit.id, editedBenefit);
      onUpdate(updatedBenefit);
      setEditModalOpen(false);
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
    <div className="border p-4 mb-4 rounded-md shadow-md bg-slate-300">
      <h3 className="text-lg font-semibold mb-2 text-slate-700">{benefit.id}</h3>

      {/* Section for basic details */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Benefit ID: {benefit.id}</h4>
        <p className="text-sm mb-2">User: {benefit.request.user.name} {benefit.request.user.surname} | ID: {benefit.request.id}</p>
      </div>

      {/* Acordeón para mostrar detalles */}
      <div>
        <button
          onClick={toggleDetails}
          className="px-4 py-2 mb-2 font-bold text-gray-900 transition bg-gray-300 rounded hover:bg-gray-950 hover:text-gray-300 focus:outline-none"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="mb-2">Message: {benefit.request.message}</p>
            <p className="mb-2">Status: {benefit.status}</p>
            {benefit.benefitItems.length > 0 ? (
              <ul className="mb-2">
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
          </div>
        )}
      </div>

      {/* Edit and Delete buttons */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 font-bold text-gray-900 transition bg-gray-300 rounded hover:bg-gray-950 hover:text-gray-300 focus:outline-none"
        >
          Edit
        </button>
        <button
          onClick={handleOpenDialog}
          className="px-4 py-2 font-bold text-gray-900 transition bg-gray-300 rounded hover:bg-gray-950 hover:text-gray-300 focus:outline-none"
        >
          Delete
        </button>
      </div>

      <BenefitFormModal
        modalOpen={editModalOpen}
        onRequestClose={handleCloseModal}
        onRequestSubmit={handleSave}
        benefit={editedBenefit}
        request={benefit.request}
      />

      <ConfirmationModal  isOpen={isOpen} onClose={handleCloseDialog} onConfirm={handleConfirmAction} />
    </div>
  );
};

export default Benefit;
