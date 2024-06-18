import React from "react";
import { useUser } from "../../UserContext";
import "./style.css";
const UserProfile = () =>{
    const {user} = useUser();
    return (
        <div className="user-profile">
            <h1>Perfil del Usuario</h1>
            <div className="profile-item"><strong>ID:</strong> {user.id}</div>
            <div className="profile-item"><strong>Nombre:</strong> {user.name}</div>
            <div className="profile-item"><strong>Apellido:</strong> {user.surname}</div>
            <div className="profile-item"><strong>Email:</strong> {user.email}</div>
            <div className="profile-item"><strong>Cédula:</strong> {user.idNumber}</div>
            <div className="profile-item"><strong>Sector:</strong> {user.sector}</div>
            <div className="profile-item"><strong>Ubicación:</strong> {user.location}</div>
            <div className="profile-item"><strong>Género:</strong> {user.gender}</div>
            <div className="profile-item"><strong>Edad:</strong> {user.age}</div>
            <div className="profile-item"><strong>Teléfono:</strong> {user.phone}</div>
            <div className="profile-item"><strong>Fecha de Creación:</strong> {new Date(user.creationDate).toLocaleString()}</div>
            <div className="profile-item"><strong>Rol:</strong> {user.roles}</div>
        </div>
    );
}
export default UserProfile;