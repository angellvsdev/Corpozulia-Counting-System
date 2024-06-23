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
      setBenefits(benefitsList); // Actualiza `benefits` con los datos obtenidos
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
    <div>
      {loading && <LoadingModal />}
      {error && <p>Error: {error}</p>}
      <ul>
        <BenefitList
          benefits={benefits}
          onUpdate={handleUpdateBenefit}
          onDelete={handleDeleteBenefit}
        />
      </ul>
    </div>
  );
};

export default BenefitView;
