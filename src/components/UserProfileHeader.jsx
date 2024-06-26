import React from 'react';
import { useUser } from '../UserContext';
import ColumnBox from "./flexbox-template-components/ColumnBox/ColumnBox";
import RowBox from "../components/flexbox-template-components/RowBox/RowBox";
import UserDataField from './UserDataField';

const UserProfileHeader = (props) => {
    const { user } = useUser();

    return (
        <ColumnBox componentContext="user_profile_header plus-jakarta-sans-bold" childComponents={
            <>
                <RowBox componentContext="profile_header_symbol" childComponents={
                    <div className="profile_header_symbol__icon">
                        <i className={`profile_header_symbol__icon_element ${props.headerIcon}`}></i>
                    </div>
                } />
                <UserDataField dataContent={user.name} dataIdentifier="header-names" />
                <UserDataField dataContent={user.idNumber} dataIdentifier="header-document-id" />
            </>
        } />
    );
};

export default UserProfileHeader;
