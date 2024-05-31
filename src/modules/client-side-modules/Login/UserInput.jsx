import React from "react";

export default function UserInput(props) {
    return(
        <>
            { props.isMandatory ? <span className="mandatory_input_field_flag">* Obligatorio</span> : null }
            <input id={props.inputId} type={props.inputType} placeholder={props.placeholderMessage} className="input_field" isMandatory={props.isMandatory} />
        </>
    )
}