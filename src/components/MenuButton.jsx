import React from "react";
import { Link } from "react-router-dom";

const MenuButton = (props) => (
    <div className="menu_button" id={props.managedSectionId}>
        <Link to={props.to}>
            <button
                type="button"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${props.managedSectionId}_trigger`}
                onClick={props.sectionFunction}
            >
                <div className="flex items-center">
                    <i className={`menu_button__trigger__icon ${props.managedSectionId}_icon ${props.icon}`} />
                    <span className="ml-2">{props.managedSectionName}</span>
                    {props.managedSectionOptionalSuboptions && (
                        <span className="ml-2">{props.managedSectionOptionalSuboptions}</span>
                    )}
                </div>
            </button>
        </Link>
    </div>
);

export default MenuButton;
