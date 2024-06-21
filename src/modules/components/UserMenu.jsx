import React from "react";
import RowBox from "./flexbox-template-components/RowBox/RowBox";
import MenuButton from "./MenuButton";

const UserMenu = (props) => (
    <RowBox componentContext="administration_menu plus-jakarta-sans-bold" childComponents={
        <>
            <MenuButton managedSectionId="profile-dashboard" managedSectionName="Perfil" icon="fa-solid fa-id-badge" managedSectionOptionalSuboptions=
            {
                <ul className="administration_menu__options">
                    <li className="administration_menu__options_option">Ver Usuarios</li>
                    <li className="administration_menu__options_option">Editar Usuarios</li>
                    <li className="administration_menu__options_option">Borrar Usuarios</li>
                </ul>
            } 
            />
            <MenuButton managedSectionId="users-dashboard" managedSectionName="Prestaciones" icon="fa-solid fa-hands-holding-circle" />
            <MenuButton managedSectionId="inventory-dashboard" managedSectionName="Inventario" icon="fa-solid fa-boxes-stacked" />
        </>
    } />
)

export default UserMenu;