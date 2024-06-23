// components/Request.js
import React from 'react';

const Request = ({ request }) => {
    console.log(request);
    console.log(request.user);
    return (
        <div className="border rounded-md p-4 mb-4">
            <div className="flex justify-between mb-2">
                <h2 className="text-lg font-bold">{request.message}</h2>
                <p className="text-gray-500">{`ID: ${request.id}`}</p>
            </div>
            <p className="text-gray-700 mb-2">{`User: ${request.user}`}</p>
            {/* Agrega más detalles de la solicitud según sea necesario */}
        </div>
    );
};

export default Request;
