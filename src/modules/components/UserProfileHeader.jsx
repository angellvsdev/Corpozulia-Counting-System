import { React, useState } from 'react';
import ColumnBox from "./ColumnBox";
import RowBox from './RowBox';
import UserDataField from './UserDataField';

const UserProfileHeader = (props) => (
    <ColumnBox componentContext="user_profile_header plus-jakarta-sans-bold" childComponents={
        <>
            <RowBox componentContext="profile_header_symbol" childComponents={
                <div className="profile_header_symbol__icon"><i className={`profile_header_symbol__icon_element ${props.headerIcon}`}></i></div>
            } />
            <UserDataField dataContent="Angel Vera" dataIdentifier="header-names"/>
            <UserDataField dataContent="33033170" dataIdentifier="header-document-id"/>
        </>
    } />
)

export default UserProfileHeader;