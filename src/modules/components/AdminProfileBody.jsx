import React from "react";
import ColumnBox from "./ColumnBox";
import RowBox from "./RowBox";
import UserDataField from "./UserDataField";

const AdminProfileBody = (props) => (
    <>
        <RowBox componentContext="user_profile_data_body" childComponents={
            <>
                <ColumnBox componentContext="user_profile_data_section profile_basics" childComponents={
                    <>
                        <UserDataField dataTag="names"/>
                        <UserDataField dataTag="surnames"/>
                        <UserDataField dataTag="document-id"/>
                        <UserDataField dataTag="email"/>
                        <UserDataField dataTag="password"/>
                        <UserDataField dataTag="phone-number"/>
                    </>
                } />
            </>
        } />
    </>
);

export default AdminProfileBody;