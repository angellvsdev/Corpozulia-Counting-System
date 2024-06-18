import { React, useState } from 'react';
import ColumnBox from "./flexbox-template-components/ColumnBox/ColumnBox";
import RowBox from "../components/flexbox-template-components/RowBox/RowBox";
import UserDataField from './UserDataField';

const UserProfileHeader = (props) => (
    <ColumnBox componentContext="user_profile_header plus-jakarta-sans-bold" childComponents={
        <>
            <RowBox componentContext="profile_header_symbol" childComponents={
                <div className="profile_header_symbol__icon"><i className={`profile_header_symbol__icon_element ${props.headerIcon}`}></i></div>
            } />
            <UserDataField dataContent="Reny Mireles" dataIdentifier="header-names"/>
            <UserDataField dataContent="123456789" dataIdentifier="header-document-id"/>
        </>
    } />
)

export default UserProfileHeader;