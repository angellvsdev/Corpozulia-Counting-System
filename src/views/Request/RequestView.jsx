// views/RequestView.js
import React, { useState, useEffect } from 'react';
import RequestController from '../../controllers/RequestController';
import RequestList from '../../components/RequestList';
import UserMenu from '../../components/UserMenu';

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
        <div className='flex flex-col content-center h-screen max-h-screen min-h-full plus-jakarta-light bg-gradient-to-r from-red-900 to-red-700 overflow-auto'>
            <img src="/src/assets/undraw_message_sent_re_q2kl.svg" alt="Mensaje de entrada" className='object-contain w-full h-60 my-14'/>
            <h1 className='text-4xl font-bold text-center text-slate-300'>Solicitudes de Prestación</h1>
            <p className='self-center w-3/4 my-4 font-light text-center text-md md:text-lg text-slate-200'>Bienvenido al modulo de revisión de prestaciones, a partir de aquí, tiene total poder para manipular la aprobación, chequeo, y rechazo de las prestaciones solicitades a la empresa. Usese con precaución.</p>
            <RequestList requests={requests} />
            <UserMenu />
        </div>
    );
};

export default RequestView;
