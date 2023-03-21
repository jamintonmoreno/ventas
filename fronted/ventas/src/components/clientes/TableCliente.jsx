import React, { useState } from "react";
import RowCliente from "./RowCliente";

const TableCliente = () => {
  const [clientesList, setClientesList] = useState([
    {
        "idCliente": "1",
        "nombres":"Jaminton",
        "apellidos":"Moreno",
        "direccion":"Av. Lincon",
        "telefono": "+654789",
        "email":"jmoren@gmail.com"
    },
    {
        "idCliente": "2",
        "nombres":"Jaime",
        "apellidos":"Fuentes",
        "direccion":"Av. Suarez",
        "telefono": "+6547892354",
        "email":"jmorenfuei@gmail.com"
    }
  ]);

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Direcciòn</th>
            <th>Telefono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientesList.map((cliente) => (
            <RowCliente cliente={cliente} key={cliente.idCliente}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCliente;
