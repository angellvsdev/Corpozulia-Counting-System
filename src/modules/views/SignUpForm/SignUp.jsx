import React, { useState } from "react";
import Button from '../../components/BaseButton';

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
        requestReason: '',
        userNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            userName, userSurname, userEmail, userPassword, userPasswordConfirm,
            userDocumentId, documentType, userLocation, requestReason, userNumber
        } = formData;

        if (!userName || !userSurname || !userEmail || !userPassword || !userPasswordConfirm ||
            !userDocumentId || !documentType || !userLocation || !requestReason || !userNumber) {
            setErrorMessage('Por favor complete todos los campos.');
        } else if (userPassword !== userPasswordConfirm) {
            setErrorMessage('Las contraseñas no coinciden.');
        } else {
            setErrorMessage('');
            // Aquí puedes manejar la lógica de registro, por ejemplo, llamando a una API
            console.log('Registrando con', formData);
        }
    };

    return (
        <div className="formulary for_sign_up">
            <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
            <div className="formulary__headers">
                <h1 className="formulary__headers__title plus-jakarta-sans-bold">Censarme <i className="fa-solid fa-person-walking-arrow-right"></i></h1>
                <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido! Para registrarte, asegurate de llenar todos los campos de caracter obligatorio. Recuerda que el censo solamente se realiza una vez por persona. Posterior al registro, entrarás en un periodo de espera en lo que se aprueba tu solicitud de prestación.</p>
            </div>
            <form onSubmit={handleSubmit} className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                <div className="input-group input_field">
                    <label htmlFor="userName">Nombres</label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="Ej: Angel Leonardo"
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
                        placeholder="Ej: Vera Soto"
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
                        placeholder="Ej: renymireles@correo.com"
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
                        placeholder="Ej: 12.345.678"
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
                <div className="input-group">
                    <select
                        id="userLocation"
                        className="input_field"
                        value={formData.userLocation}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Localidad</option>
                        <option value="Machiques">Machiques</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Bartolomé">Bartolomé</option>
                    </select>
                </div>
                <div className="input-group input_field">
                    <label htmlFor="requestReason">Solicitud</label>
                    <input
                        id="requestReason"
                        type="text"
                        placeholder="..."
                        value={formData.requestReason}
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
    );
}

export default SignUp;
