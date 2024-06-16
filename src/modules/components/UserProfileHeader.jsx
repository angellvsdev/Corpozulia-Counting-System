import { React, useState } from 'react';
import ColumnBox from "./ColumnBox";
import RowBox from './RowBox';
import UserDataField from './UserDataField';

const UserProfileHeader = (props) => (
    <ColumnBox componentContext="user_profile_header" childComponents={
        <>
            <RowBox componentContext="profile_header_symbol" childComponents={
                <div className="profile_header_symbol__icon"><i className={`profile_header_symbol__icon_element ${props.icon}`}></i></div>
            } />
            <UserDataField dataTag="header-names"/>
            <UserDataField dataTag="header-document-id"/>
        </>
    } />
)

export default UserProfileHeader;