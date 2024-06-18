import React from "react";
import RowBox from "./flexbox-template-components/RowBox/RowBox";
import MenuButton from "./MenuButton";

const UserMenu = (props) => (
    <RowBox componentContext="administration_menu plus-jakarta-sans-bold" childComponents={
        <>
            <MenuButton managedSectionId="profile-dashboard" managedSectionName="Perfil" icon="fa-solid fa-id-badge" />
            <MenuButton managedSectionId="users-dashboard" managedSectionName="Prestaciones" icon="fa-solid fa-hands-holding-circle" />
            <MenuButton managedSectionId="inventory-dashboard" managedSectionName="Inventario" icon="fa-solid fa-boxes-stacked" />
        </>
    } />
)

export default UserMenu;