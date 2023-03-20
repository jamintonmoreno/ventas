import React from "react";

const TableCliente = () => {
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
          <tr>
            <td>
              <button
                className="button is-small is-info mr-1"
                title="Modificar"
              >
                <span className="icon is-small">
                  <i className="fas fa-edit"></i>
                </span>
              </button>
              <button className="button is-small is-danger" title="Eliminar">
                <span className="icon is-small">
                  <i className="fas fa-trash-alt"></i>
                </span>
              </button>
            </td>

            <td>Jaminton</td>
            <td>Moreno</td>
            <td>Calle 50 # 25 - 30</td>
            <td>+57 321415</td>
            <td>jmoretfs@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCliente;
