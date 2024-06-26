// BenefitList.jsx

import React from 'react';
import Benefit from './Benefit';

const BenefitList = ({ benefits, onUpdate, onDelete }) => {
  return (
    <div className="self-center space-y-4">
      {benefits.map(benefit => (
        <Benefit
          key={benefit.id}
          benefit={benefit}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BenefitList;
