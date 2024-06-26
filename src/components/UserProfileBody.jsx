import React from "react";
import ColumnBox from "./flexbox-template-components/ColumnBox/ColumnBox";
import RowBox from "./flexbox-template-components/RowBox/RowBox";
import UserDataField from "./UserDataField";

const UserProfileBody = (props) => (
    <>
        <RowBox componentContext="user_profile_data_body" childComponents={
            <>
                <ColumnBox componentContext="user_profile_data_section profile_basics" childComponents={
                    <>
                        <UserDataField dataIdentifier="user-names"/>
                        <UserDataField dataIdentifier="user-surnames"/>
                        <UserDataField dataIdentifier="user-document-id"/>
                        <UserDataField dataIdentifier="user-email"/>
                        <UserDataField dataIdentifier="user-password"/>
                        <UserDataField dataIdentifier="user-phone-number"/>
                    </>
                } />
                <ColumnBox componentContext="user_profile_data_section benefit_data" childComponents={
                    <>
                        <UserDataField dataIdentifier="benefit-location" />
                        <UserDataField dataIdentifier="benefit-items" />
                        <UserDataField dataIdentifier="benefit-state" />
                    </>
                } />
            </>
        } />
    </>
);

export default UserProfileBody;