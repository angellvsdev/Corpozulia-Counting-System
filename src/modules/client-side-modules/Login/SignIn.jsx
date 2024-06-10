import React from "react";
import UserInput from "./UserInput";
import Button from "./../Mainpage/BaseButton.jsx"

export default function SignInForm(props) {
    return(
        <>
            <div className="formulary for_sign_in">
                <Button icon="fa-solid fa-arrow-left" content="Atras" elementContext="go-back_formulary-button" />
                <div className="formulary__headers">
                    <h1 className="formulary__headers__title plus-jakarta-sans-bold">Inicio de Sesión <i class="fa-solid fa-person-walking-arrow-right"></i></h1>
                    <p className="formulary__headers__details plus-jakarta-sans-medium">¡Bienvenido de nuevo! En caso de no haberte inscrito, recuerda que debes censarte.</p>
                </div>
                <form action="submit" className="formulary__sending_module sign_in_formulary plus-jakarta-sans-medium">
                    <UserInput inputId="document_id" inputType="number" placeholderMessage="Carnet de identidad" isMandatory={true} />
                    <UserInput inputId="user_password" inputType="password" placeholderMessage="Contraseña" isMandatory={true} />
                    <Button type="submit" icon="fa-solid fa-arrow-right-to-bracket" content="Iniciar Sesión" elementContext="login-button" />                   
                </form>
            </div>
        </>
    )
}