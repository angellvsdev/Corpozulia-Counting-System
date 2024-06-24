import React, { useState } from "react";
import Button from '../../components/BaseButton.jsx'
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import axios from "axios";

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
            return; // Salir de la función si los campos están incompletos
        }

        setErrorMessage('');

        try {
            // Concatenar documentType con documentId
            const formattedDocumentId = `${documentType}${documentId}`;

            // Enviar datos al backend
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
        <>
            <div className="modal_window">
                <div className="formulary for_sign_in">
                    <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
                    <div className="formulary__headers">
                        <h1 className="formulary__headers__title plus-jakarta-sans-bold">Inicio de Sesión <i class="fa-solid fa-person-walking-arrow-right"></i></h1>
                        <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido de nuevo! En caso de no haberte inscrito, recuerda que debes censarte.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                        <div className="input_field">
                            <select
                                id="documentType"
                                className="input_field"
                                value={documentType}
                                onChange={(e) => setDocumentType(e.target.value)}
                                required
                            >
                                <option value="">Tipo de documento</option>
                                <option value="V">- V</option>
                                <option value="E">- E</option>
                                <option value="J">- J</option>
                            </select>
                        </div>
                        <div className="input_field">
                            <label htmlFor="documentId">Carnet de identidad</label>
                            <input
                                id="documentId"
                                type="number"
                                placeholder="Ej: 12345678"
                                value={documentId}
                                onChange={(e) => setDocumentId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input_field">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Ej: Mi-Contraseña123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button type="submit" icon="fa-solid fa-arrow-right-to-bracket" content="Iniciar Sesión" elementContext="login-button" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
