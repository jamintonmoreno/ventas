import React from "react";
import CreateCliente from "../components/clientes/CreateCliente";
import TableCliente from "../components/clientes/TableCliente";
import Layout from "../components/commons/Layout";

const Clientes = () => {
  return (
    <Layout>
      <div className="panel">
        <div className="panel-header">Clientes</div>
        <div className="box">
          <CreateCliente />
          <TableCliente />
        </div>
      </div>
    </Layout>
  );
};

export default Clientes;
