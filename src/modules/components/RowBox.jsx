import React from "react";
import "../styles/components-styles/RowBox.css";

const RowBox = (props) => (
    <div className={`row_box ${props.componentContext}`}>
        {props.childComponents}
    </div>
)

export default RowBox;