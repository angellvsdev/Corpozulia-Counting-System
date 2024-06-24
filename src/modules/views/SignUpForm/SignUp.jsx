import React, { useState } from "react";
import Button from '../../components/BaseButton.jsx';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [formData, setFormData] = useState({
        userName: '',
        userSurname: '',
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        userDocumentId: '',
        documentType: '',
        userLocation: '',
        sector: '',
        userNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que todos los campos obligatorios estén completos
        const {
            userName, userSurname, userEmail, userPassword, userPasswordConfirm,
            userDocumentId, documentType, userLocation, sector, userNumber
        } = formData;

        if (!userName || !userSurname || !userEmail || !userPassword || !userPasswordConfirm ||
            !userDocumentId || !documentType || !userLocation || !sector || !userNumber) {
            setErrorMessage('Por favor complete todos los campos.');
            return;
        }

        if (userPassword !== userPasswordConfirm) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                name: userName,
                surname: userSurname,
                email: userEmail,
                password: userPassword,
                idNumber: `${documentType}${userDocumentId}`,
                documentType: documentType,
                sector: sector,
                location: userLocation,
                gender: 'Male', // Por ejemplo, ajustable según tus necesidades
                age: 30, // Ajustable según tus necesidades
                phone: userNumber
            });

            if (response.status === 201) {
                navigate("/login"); // Redirigir a la página de inicio de sesión después del registro exitoso
            } else {
                setErrorMessage('Ocurrió un error al registrarse.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Error al registrar usuario.');
            }
        }
    };

    return (
        <>
            <div className="modal_window">
                <div className="formulary for_sign_up">
                    <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
                    <div className="formulary__headers">
                        <h1 className="formulary__headers__title plus-jakarta-sans-bold">Censarme <i className="fa-solid fa-person-walking-arrow-right"></i></h1>
                        <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido! Para registrarte, asegúrate de llenar todos los campos de caracter obligatorio. Recuerda que el censo solamente se realiza una vez por persona. Posterior al registro, entrarás en un periodo de espera en lo que se aprueba tu solicitud de prestación.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                        <div className="input-group input_field">
                            <label htmlFor="userName">Nombres</label>
                            <input
                                id="userName"
                                type="text"
                                placeholder="Ej: Manuel Finol"
                                value={formData.userName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userSurname">Apellidos</label>
                            <input
                                id="userSurname"
                                type="text"
                                placeholder="Ej: Finol Manuel"
                                value={formData.userSurname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userEmail">Correo electrónico</label>
                            <input
                                id="userEmail"
                                type="email"
                                placeholder="Ej: manufinol@correo.com"
                                value={formData.userEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userPassword">Ingrese su contraseña</label>
                            <input
                                id="userPassword"
                                type="password"
                                placeholder="Ej: Mi-Contraseña123"
                                value={formData.userPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userPasswordConfirm">Confirme su contraseña</label>
                            <input
                                id="userPasswordConfirm"
                                type="password"
                                placeholder="Ej: Mi-Contraseña123"
                                value={formData.userPasswordConfirm}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userDocumentId">Cédula de identidad</label>
                            <input
                                id="userDocumentId"
                                type="number"
                                placeholder="Ej: 12345678"
                                value={formData.userDocumentId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="documentType">Tipo de documento</label>
                            <select
                                id="documentType"
                                className="input_field"
                                value={formData.documentType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Tipo de documento</option>
                                <option value="V">- V</option>
                                <option value="E">- E</option>
                                <option value="J">- J</option>
                            </select>
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userLocation">Ubicación</label>
                            <select
                                id="userLocation"
                                className="input_field"
                                value={formData.userLocation}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione su ubicación</option>
                                <option value="Libertad">Libertad</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Bartolomé de las Casas">Bartolomé de las Casas</option>
                                <option value="San José">San José</option>
                            </select>
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="sector">Sector</label>
                            <input
                                id="sector"
                                type="text"
                                placeholder="Ej: Sector A"
                                value={formData.sector}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group input_field">
                            <label htmlFor="userNumber">Número de teléfono</label>
                            <input
                                id="userNumber"
                                type="tel"
                                placeholder="Ej: 0412-123-4567"
                                value={formData.userNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button type="submit" icon="fa-solid fa-arrow-right-to-bracket" content="Registrarse" elementContext="signup-button" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
