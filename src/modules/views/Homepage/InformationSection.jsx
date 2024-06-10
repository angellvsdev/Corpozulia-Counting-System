import React from "react";

export default function InformationSection(props) {
    return(
        <div className="information_section" id={props.identifier} >
            <div className="information_section__elements">
                <div className="information_section__elements__title plus-jakarta-sans-bold">
                    <i className={props.icon + ' ' + "information_section__elements__title__icon"}></i> 
                    <p className="information_section__elements__title__legend">{props.sectionTitle}</p>
                </div>
                <div className="information_section__elements__content plus-jakarta-sans-light">{props.sectionContent}</div>
            </div>
            <div className="information_section__emblem">
                <img src={props.sectionEmblem} alt="Emblema de la información" className="information_section__image" />
            </div>
        </div>
    )
}