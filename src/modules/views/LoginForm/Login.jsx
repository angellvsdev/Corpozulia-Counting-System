import React, { useState } from "react";
import Button from '../../components/BaseButton.jsx'
import { useNavigate } from "react-router-dom";

function Login() {
    const [documentId, setDocumentId] = useState('');
    const [password, setPassword] = useState('');
    const [documentType, setDocType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {user, setUser} =useUser();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!documentId || !password || !documentType) {
        
        if (!documentId || !password) {
            setErrorMessage('Por favor complete todos los campos.');
            return; // Salir de la función si los campos están incompletos
        }
    
        setErrorMessage('');
    
        try {
            // Suponiendo que `documentId` es el nombre de usuario
            const response = await axios.post('/api/login', {
                username: documentId,
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
            setErrorMessage(error.response.data.message)
        }
    
        console.log('Iniciando sesión con cedula ' + documentId + ' y contraseña ' + password);
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
                        <select
                            id="documentType"
                            className="input_field"
                            value={documentType}
                            onChange={(e) => setDocType(e.target.value)}
                            required
                        >
                            <option value={null} default>Tipo de documento</option>
                            <option value="V">- V</option>
                            <option value="E">- E</option>
                            <option value="J">- J</option>
                        </select>
                    </div>
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