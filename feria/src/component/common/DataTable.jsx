import { Table } from "@mui/material";
import React from "react";
const url_img = import.meta.env.VITE_SERVER_IMG;

const DataTable = ({ datos, getdata }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>ID</th>
          <th>Categoria</th>
          <th>ID portafolio</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr
            key={dato.idcategories}
            onClick={() => getdata(dato)}
            style={{ cursor: "pointer" }}
          >
            <td>
              <img
                src={url_img + dato.categories_photo}
                width={"70px"}
                style={{ borderRadius: "20px" }}
                alt={dato.categories_name}
              />
            </td>
            <td>{dato.idcategories}</td>
            <td>{dato.categories_name}</td>

            <td>jajajajajaj</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
