import React from "react";
import UserInput from "./UserInput";
import Button from "./../Mainpage/BaseButton.jsx"

export default function SignUpForm(props) {
    return(
        <>
            <div className="formulary">
                <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
                <div className="formulary__headers">
                    <h1 className="formulary__headers__title plus-jakarta-sans-bold">Censarme <i class="fa-solid fa-person-walking-arrow-right"></i></h1>
                    <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido! Para registrarte, asegurate de llenar todos los campos de caracter obligatorio. Recuerda que el censo solamente se realiza una vez por persona. Posterior al registro, entrarás en un periodo de espera en lo que se aprueba tu solicitud de prestación.</p>
                </div>
                <form action="submit" className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                    <UserInput inputId="user_name" inputType="text" placeholderMessage="Nombres" isMandatory={true} />
                    <UserInput inputId="user_surname" inputType="text" placeholderMessage="Apellidos" isMandatory={true} />
                    <UserInput inputId="user_email" inputType="email" placeholderMessage="Correo electronico" isMandatory={true} />
                    <UserInput inputId="user_password_signup" inputType="password" placeholderMessage="Ingrese su contraseña" isMandatory={true} />
                    <UserInput inputId="user_password_signup_confirm" inputType="password" placeholderMessage="Confirme su contraseña" isMandatory={true} />
                    <UserInput inputId="user_document_id" inputType="number" placeholderMessage="Cedula de identidad" isMandatory={true} />
                    <select className="document_type_selection input_field" name="document_type" id="document_type">
                        <option>Tipo de documento</option>
                        <option value="V">- V</option>
                        <option value="E">- E</option>
                        <option value="J">- J</option>
                    </select>
                    <select className="user_location_selection input_field" name="user_location" id="user_location">
                        <option>Localidad</option>
                        <option value="Machiques">Machiques</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Bartolomé">Bartolomé</option>
                    </select>
                    <UserInput inputId="request_reason" inputType="text" placeholderMessage="Solicitud" isMandatory={true} />
                    <UserInput inputId="user_number" inputType="phone" placeholderMessage="Número de teléfono" isMandatory={true} />
                    <Button type="submit" icon="fa-solid fa-arrow-right-to-bracket" content="Iniciar Sesión" elementContext="login-button" />                   
                </form>
            </div>
        </>
    )
}