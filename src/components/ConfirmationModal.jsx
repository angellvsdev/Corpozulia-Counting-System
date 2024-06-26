import React from 'react';
import Modal from 'react-modal';

// Estilos CSS para el modal de confirmación con Tailwind CSS
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '480px',
    padding: '2rem',
    border: 'none',
    borderRadius: '0.5rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
  },
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm(true); // Ejecutar acción de confirmación con true
    onClose(); // Cerrar el modal
  };

  const handleCancel = () => {
    onConfirm(false); // Ejecutar acción de cancelación con false
    onClose(); // Cerrar el modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Confirmación"
      ariaHideApp={false} // Deshabilita el aviso de accesibilidad
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl sm:max-w-lg sm:w-full">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-xl font-bold">Confirmación</h2>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-700">¿Estás seguro de que deseas realizar esta acción? Esta acción no se puede deshacer.</p>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-end items-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
