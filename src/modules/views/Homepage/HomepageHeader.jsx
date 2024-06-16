import React from "react";
import Button from "../../components/BaseButton.jsx";

export default function Header(props) {
    return(
        <>
            <section className="homepage_header">
                <div className="homepage_header__company_logo">
                    <img className="company_logo" src="src\assets\corpozulia-logo.png" alt="Logotipo de Corpozulia" />
                </div>
                <div className="homepage_header__titles">
                    <h1 className="homepage_header__titles_emblem plus-jakarta-sans-bold">¡Bienvenido, ganadero!</h1>
                    <p className="homepage_header__titles_description plus-jakarta-sans-light">Somos la <b>Corporación Socialista</b> del Edo. Zulia, desde la localidad de todo <b>Machiques</b>, y convivimos y vivimos para ofrecerle al pueblo venezolano las herramientas necesarias para el desarrollo agrónomo y finquero de la región.</p>
                </div>
                <div className="homepage_header__options">
                    <Button content="Censarme" icon="fa-solid fa-id-card-clip" />
                    <Button content="Iniciar Sesión" icon="fa-solid fa-person-walking-arrow-right" />
                </div>
                <ul className="homepage_header__markers plus-jakarta-sans-medium">
                    <li className="homepage_header__markers_select"><a href="#about-us"><i class="fa-solid fa-circle-info"></i> Sobre Nosotros</a></li>
                    <li className="homepage_header__markers_select"><a href="#requirements"><i class="fa-solid fa-circle-info"></i> Requisitos del Servicio</a></li>
                    <li className="homepage_header__markers_select"><a href="#faq"><i class="fa-solid fa-circle-info"></i> Preguntas Frecuentes</a></li>
                </ul>
            </section>
        </>
    )
    
}