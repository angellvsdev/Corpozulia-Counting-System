import React from "react";

const UserDataField = (props) => (
    <div className="profile_data_element" id={props.dataIdentifier} >
        <p className="profile_data_element_content">{props.dataContent}</p>
    </div>
)

export default UserDataField;