import React from "react";
import InformationSection from "./InformationSection";

export default function InformationModule(props) {
    return(
        <>
            <div className="information_module">
                <InformationSection identifier="about-us" icon="fa-solid fa-seedling" sectionTitle="Sobre Nosotros" sectionContent="Somos una corporación de orígen venezolano dedicado a la ganadería y al sector agrícola, y nos encargamos de ofrecer las mejores prestaciones al pueblo venezolano y sus ganaderos, con el fin de promover activamente el desarrollo agrícola de la región." sectionEmblem="src\assets\undraw_environment_iaus.svg" id="about-us" />
                <InformationSection identifier="requirements" icon="fa-solid fa-book" sectionTitle="Requisitos del Censo" 
                    sectionContent={
                        <ul className="service_requirements_list">
                            <li className="requirement_item">Documentos en regla y bajo conformidad con la ley.</li>
                            <li className="requirement_item">Carácter de censado: Único. Solo se admite 1 censo por persona.</li>
                            <li className="requirement_item">Ingresar los datos mediante esta plataforma para la solicitud o acercarse a la sede más cercana con los datos correspondientes.</li>
                        </ul>
                    } 
                    sectionEmblem="src\assets\undraw_agreement_re_d4dv.svg" 
                />
            </div>
        </>        
    )
}