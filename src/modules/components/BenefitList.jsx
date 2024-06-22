// components/BenefitList.jsx
import React from 'react';
import Benefit from './Benefit';

const BenefitList = ({ benefits }) => {
    const listStyles = 'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    return (
        <div className={listStyles}>
            {benefits.map(benefit => (
                <Benefit key={benefit.id} benefit={benefit} />
            ))}
        </div>
    );
};

export default BenefitList;
