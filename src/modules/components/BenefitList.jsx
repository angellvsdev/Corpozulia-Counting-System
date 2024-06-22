// BenefitList.jsx

import React from 'react';
import Benefit from './Benefit';

const BenefitList = ({ benefits, onUpdate, onDelete }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
