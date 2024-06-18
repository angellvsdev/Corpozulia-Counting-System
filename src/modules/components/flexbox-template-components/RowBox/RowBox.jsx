import React from "react";
import "./RowBox.css";

const RowBox = (props) => (
    <div className={`row_box ${props.componentContext}`}>
        {props.childComponents}
    </div>
)

export default RowBox;