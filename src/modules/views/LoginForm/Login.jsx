import React, { useState } from "react";
import Button from '../../components/BaseButton.jsx'
import { useNavigate } from "react-router-dom";

function Login() {
    const [documentId, setDocumentId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!documentId || !password) {
            setErrorMessage('Por favor complete todos los campos.');
        } else {
            setErrorMessage('');
            console.log('Iniciando sesión con cedula ' + documentId + ' y contraseña ' + password);

            const isValidUser = await checkDocument(documentId)

            if (isValidUser) {
                const getUserDatasheet = () => {
                    fetch(`https://domain/${documentId}`)
                    .then(jsonSheetResponse => {
                        return JSON.parse(jsonSheetResponse);
                    })
                    .then(dataSheet => {
                        const rawUserProfile = dataSheet;

                        if (rawUserProfile.numberId) {
                            return useNavigate('/adminView', {rawUserProfile})
                        }

                        return useNavigate('/userView', { rawUserProfile });
                    })
                    .catch(err => {
                        throw buildErrorComponent(err);
                    })
                };

                return getUserDatasheet();
            }
        }
    };

    return (
        <>
            <div className="formulary for_sign_in">
                <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
                <div className="formulary__headers">
                    <h1 className="formulary__headers__title plus-jakarta-sans-bold">Inicio de Sesión <i class="fa-solid fa-person-walking-arrow-right"></i></h1>
                    <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido de nuevo! En caso de no haberte inscrito, recuerda que debes censarte.</p>
                </div>
                <form onSubmit={handleSubmit} className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                    <div className="input_field">
                        <label htmlFor="document_id">Carnet de identidad</label>
                        <input
                            id="document_id"
                            type="number"
                            placeholder="Ej: 12.345.678"
                            value={documentId}
                            onChange={(e) => setDocumentId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_field">
                        <label htmlFor="user_password">Contraseña</label>
                        <input
                            id="user_password"
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
        </>
    )
}

export default Login;