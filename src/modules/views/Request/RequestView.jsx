// views/RequestView.js
import React, { useState, useEffect } from 'react';
import RequestController from '../../controllers/RequestController';
import RequestList from '../../components/RequestList';
const RequestView = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRequests = await RequestController.fetchRequests();
                setRequests(fetchedRequests);
            } catch (error) {
                console.error('Error fetching requests', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Solicitudes</h1>
            <RequestList requests={requests} />
        </div>
    );
};

export default RequestView;
