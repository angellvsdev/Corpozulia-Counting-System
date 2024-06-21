import React from "react";
import "../styles/components-styles/MenuButton.css"

const MenuButton = (props) => (
    <div className="menu_button" id={props.managedSectionId} >
        <button type="button" className={`menu_button__trigger ${props.managedSectionId.concat("_trigger")}`} onClick={props.sectionFunction}>
            <>
                <i className={`menu_button__trigger__icon ${props.managedSectionId.concat("_icon")} ${props.icon}`} /> 
                {props.managedSectionName}
                {props.managedSectionOptionalSuboptions}
            </>

        </button>
    </div>
)

export default MenuButton;