import React from "react";
import "./ColumnBox.css"

const ColumnBox = (props) => (
    <div className={`column_box ${props.componentContext}`}>
        {props.childComponents}
    </div>
)

export default ColumnBox;