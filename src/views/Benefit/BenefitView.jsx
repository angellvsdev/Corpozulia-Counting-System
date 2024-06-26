import React, { useState, useEffect } from 'react';
import BenefitController from '../../controllers/BenefitController';
import LoadingModal from '../../components/LoadingModal';
import Benefit from '../../models/BenefitModel';
import BenefitList from '../../components/BenefitList';

const BenefitView = () => {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBenefits();
  }, []);

  const loadBenefits = async () => {
    setLoading(true);
    try {
      const benefitsList = await BenefitController.getAllBenefits();
      setBenefits(benefitsList);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleUpdateBenefit = (updatedBenefit) => {
    setBenefits(benefits.map(b => (b.id === updatedBenefit.id ? updatedBenefit : b)));
  };

  const handleDeleteBenefit = (benefitId) => {
    setBenefits(benefits.filter(b => b.id !== benefitId));
  };

  return (
    <div className='flex flex-col h-screen max-h-screen min-h-full bg-gradient-to-r from-red-900 to-red-700 overflow-auto'>
      {loading && <LoadingModal />}
      {error && <p className="text-red-600 font-bold text-lg text-center my-4">{`Error: ${error}`}</p>}

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className='text-4xl font-bold text-center text-slate-300 mt-8 mb-4'>Beneficios</h1>
        <p className='w-3/4 my-4 font-light text-center text-lg text-slate-200'>
          Bienvenido al módulo de gestión de beneficios, donde puedes administrar todos los beneficios de los empleados.
        </p>
        
        <div className="flex-grow w-3/4">
          <BenefitList
            benefits={benefits}
            onUpdate={handleUpdateBenefit}
            onDelete={handleDeleteBenefit}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitView;
