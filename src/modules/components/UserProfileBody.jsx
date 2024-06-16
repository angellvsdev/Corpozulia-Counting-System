import React from "react";
import ColumnBox from "./ColumnBox";
import RowBox from "./RowBox";
import UserDataField from "./UserDataField";

const UserProfileBody = (props) => (
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
                <ColumnBox componentContext="user_profile_data_section benefit_data" childComponents={
                    <>
                        <UserDataField dataTag="benefit-location" />
                        <UserDataField dataTag="benefit-items" />
                        <UserDataField dataTag="benefit-state" />
                    </>
                } />
            </>
        } />
    </>
);

 {/* 
    <div className="user_profile_data_section__names">
        <p className="user_profile_data_section__names__content"></p>
    </div>
    <div className="user_profile_data_section__surnames">
        <p className="user_profile_data_section__surnames__content"></p>
    </div>
    <div className="user_profile_data_section__document_id">
        <p className="user_profile_data_section__document_id__content"></p>
    </div>
    <div className="user_profile_data_section__email">
        <p className="user_profile_data_section__email__content"></p>
    </div>
    <div className="user_profile_data_section__password">
        <p className="user_profile_data_section__password__content"></p>
    </div>
    <div className="user_profile_data_section__phone">
        <p className="user_profile_data_section__phone__content"></p>
    </div> 
*/}

export default UserProfileBody;