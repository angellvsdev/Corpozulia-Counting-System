import React from "react";
import "../styles/components-styles/ColumnBox.css"

const ColumnBox = (props) => (
    <div className={`column_box ${props.componentContext}`}>
        {props.childComponents}
    </div>
)

export default ColumnBox;