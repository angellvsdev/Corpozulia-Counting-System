import React from "react";
import ColumnBox from "./ColumnBox";
import RowBox from "./RowBox";
import UserDataField from "./UserDataField";

const AdminProfileBody = (props) => (
    <>
        <RowBox componentContext="user_profile_data_body" childComponents={
            <>
                <ColumnBox componentContext="user_profile_data_section profile_basics plus-jakarta-sans-light" childComponents={
                    <>
                        <UserDataField dataIdentifier="admin-names" dataContent="Reny David" />
                        <UserDataField dataIdentifier="admin-surnames" dataContent="Mireles Bozo" />
                        <UserDataField dataIdentifier="admin-document-id" dataContent="12345789" />
                        <UserDataField dataIdentifier="admin-email" dataContent="renypitochico@gmail.com" />
                        <UserDataField dataIdentifier="admin-password" dataContent="123456789" />
                        <UserDataField dataIdentifier="admin-phone-number" dataContent="0412-7879412" />
                        <UserDataField dataIdentifier="admin-location" dataContent="Machiques" />
                        <UserDataField dataIdentifier="admin-age" dataContent="22" />
                        <UserDataField dataIdentifier="admin-gender" dataContent="Masculino" />
                    </>
                } />
            </>
        } />
    </>
);

export default AdminProfileBody;