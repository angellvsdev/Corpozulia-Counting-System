// components/BenefitDetail.jsx
import React from 'react';
import Request from '../models/RequestModel';
import Benefit from '../models/BenefitModel';
import User from '../models/UserModel';

const BenefitDetail = ({ benefit }) => {
    const containerStyles = 'bg-white p-4 rounded shadow';
    const titleStyles = 'text-lg font-bold mb-2';
    const detailStyles = 'text-gray-700 mb-2';

    return (
        <div className={containerStyles}>
            <h2 className={titleStyles}>Benefit ID: {benefit.id}</h2>
            <div className={detailStyles}>Details: {benefit.details}</div>
            <div className={detailStyles}>Status: {benefit.status}</div>
            <div className={detailStyles}>Creation Date: {benefit.creationDate.toString()}</div>

            <h3 className={titleStyles}>User Information</h3>
            <div className={detailStyles}>Name: {benefit.user.name} {benefit.user.surname}</div>
            <div className={detailStyles}>Email: {benefit.user.email}</div>
            <div className={detailStyles}>ID Number: {benefit.user.idNumber}</div>

            <h3 className={titleStyles}>Request Information</h3>
            <div className={detailStyles}>Message: {benefit.request.message}</div>
        </div>
    );
};

export default BenefitDetail;
