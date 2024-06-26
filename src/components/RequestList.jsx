// components/RequestList.js
import React from 'react';
import Request from './Request';

const RequestList = ({ requests }) => {
    if (requests.length === 0) {
        return <p className="text-gray-500">No hay solicitudes para mostrar.</p>;
    }

    return (
        <div className="self-center w-2/3 space-y-4">
            {requests.map(request => (
                <Request key={request.id} request={request} />
            ))}
        </div>
    );
};

export default RequestList;
