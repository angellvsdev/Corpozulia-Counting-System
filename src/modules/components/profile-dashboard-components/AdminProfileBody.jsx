import React from "react";
import ColumnBox from "../flexbox-template-components/ColumnBox/ColumnBox";
import RowBox from "../flexbox-template-components/RowBox/RowBox";
import UserDataField from "../UserDataField";
import { useUser } from '../../UserContext';

const AdminProfileBody = (props) => {
    const { user } = useUser();

    return (
        <RowBox componentContext="user_profile_data_body" childComponents={
            <>
                <ColumnBox componentContext="user_profile_data_section profile_basics plus-jakarta-sans-light" childComponents={
                    <>
                        <UserDataField dataIdentifier="admin-names" dataContent={user.name} />
                        <UserDataField dataIdentifier="admin-surnames" dataContent={user.surname} />
                        <UserDataField dataIdentifier="admin-document-id" dataContent={user.idNumber} />
                        <UserDataField dataIdentifier="admin-email" dataContent={user.email} />
                        <UserDataField dataIdentifier="admin-password" dataContent="********" />  {/* Ocultar la contraseña */}
                        <UserDataField dataIdentifier="admin-phone-number" dataContent={user.phone} />
                        <UserDataField dataIdentifier="admin-location" dataContent={user.location} />
                        <UserDataField dataIdentifier="admin-age" dataContent={user.age} />
                        <UserDataField dataIdentifier="admin-gender" dataContent={user.gender} />
                    </>
                } />
            </>
        } />
    );
};

export default AdminProfileBody;
