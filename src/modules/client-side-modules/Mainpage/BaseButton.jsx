import React from "react";

export default function Button(props) {
    return(
        <div className={'base_button' + ' ' + props.elementContext}>
            <button className="base_button__button">
                <p className="base_button__content plus-jakarta-sans-bold"><i className={'base_button__icon' + ' ' + props.icon} ></i> {props.content}</p>
            </button>
        </div>
    )
    
}