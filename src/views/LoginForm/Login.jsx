import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import axios from "axios";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import Button from '../../components/BaseButton'

function Login() {
    const [documentId, setDocumentId] = useState('');
    const [password, setPassword] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!documentId || !password || !documentType) {
            setErrorMessage('Por favor complete todos los campos.');
            return;
        }

        setErrorMessage('');

        try {
            const formattedDocumentId = `${documentType}${documentId}`;

            const response = await axios.post('http://localhost:8080/api/login', {
                username: formattedDocumentId,
                password: password
            });

            if (response.status === 200) {
                const userData = response.data;
                setUser(userData);

                if (userData.roles === "ADMIN") {
                    navigate("/admin");
                } else if (userData.roles === "USER") {
                    navigate("/user");
                } else {
                    console.error("Error, rol de usuario no identificado");
                }
            } else {
                setErrorMessage('Ocurrió un error al iniciar sesión.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Error al iniciar sesión.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-red-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Inicio de Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="documentId" className="block text-sm font-medium text-gray-700 w-max">Número de documento</label>

                    <div className="mb-6 flex items-center">
                        <select
                            id="documentType"
                            className="block w-1/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                            required
                        >
                            <option value="V">V</option>
                            <option value="E">E</option>
                            <option value="J">J</option>
                        </select>
                        <input
                            id="documentId"
                            type="text"
                            placeholder="Ej: 12345678"
                            value={documentId}
                            onChange={(e) => setDocumentId(e.target.value)}
                            className="ml-2 mt-1 block w-5/6 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Ej: Mi-Contraseña123"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="flex items-center bg-red-100 text-red-500 text-sm p-2 rounded-lg mb-4">
                            <ExclamationCircleIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>{errorMessage}</span>
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <Button
                            type="submit"
                            content="Iniciar Sesión"
                            className="bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
