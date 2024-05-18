import React from "react";
import InformationSection from "./InformationSection";
import ModalVignet from "./ModalVignet";

export default function InformationModule(props) {
    return(
        <>
            <div className="information_module">
                <InformationSection icon="fa-solid fa-seedling" sectionTitle="Sobre Nosotros" sectionContent="Somos una corporación de orígen venezolano dedicado a la ganadería y al sector agrícola, y nos encargamos de ofrecer las mejores prestaciones al pueblo venezolano y sus ganaderos, con el fin de promover activamente el desarrollo agrícola de la región." sectionEmblem="src\assets\undraw_environment_iaus.svg" id="about-us" />
                <InformationSection icon="fa-solid fa-book" sectionTitle="Requisitos del Censo" 
                    sectionContent={
                        <ul className="service_requirements_list">
                            <li className="requirement_item">Documentos en regla y bajo conformidad con la ley.</li>
                            <li className="requirement_item">Carácter de censado: Único. Solo se admite 1 censo por persona.</li>
                            <li className="requirement_item">Ingresar los datos mediante esta plataforma para la solicitud o acercarse a la sede más cercana con los datos correspondientes.</li>
                        </ul>
                    } 
                    sectionEmblem="src\assets\undraw_agreement_re_d4dv.svg" 
                />
                <InformationSection icon="fa-solid fa-circle-question" sectionTitle="Preguntas Frecuentes" 
                    sectionContent={
                        <>
                            <p className="faq_introduction">Para casos donde tenga dudas, he aquí la sección de soporte, esperamos que pueda calmar inquietudes</p>
                        </>
                    } 
                    sectionEmblem="src\assets\undraw_faq_re_31cw.svg" 
                />
            </div>
        </>        
    )
}