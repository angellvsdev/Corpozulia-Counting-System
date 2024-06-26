// src/UserMock.js

import React from 'react';
import { userMock } from '../../mocks';

const UserMockTest = () => {
  return (
    <div>
      <h1>Mock de Usuario</h1>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{userMock.id}</td>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{userMock.name}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{userMock.email}</td>
          </tr>
          <tr>
            <td>Contraseña:</td>
            <td>{userMock.password}</td>
          </tr>
          <tr>
            <td>Número de Cédula:</td>
            <td>{userMock.idNumber}</td>
          </tr>
          <tr>
            <td>Sector:</td>
            <td>{userMock.sector}</td>
          </tr>
          <tr>
            <td>Ubicación:</td>
            <td>{userMock.location}</td>
          </tr>
          <tr>
            <td>Género:</td>
            <td>{userMock.gender}</td>
          </tr>
          <tr>
            <td>Edad:</td>
            <td>{userMock.age}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{userMock.phone}</td>
          </tr>
          <tr>
            <td>Fecha de Creación:</td>
            <td>{userMock.creationDate}</td>
          </tr>
          <tr>
            <td>Tipo de Usuario:</td>
            <td>{userMock.userType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserMockTest;
