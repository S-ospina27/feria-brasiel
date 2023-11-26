import React from "react";
import styled from "../../css/Products.module.css";

const BriefcaseSelected = ({ value, setValue, datos }) => {
  return (
    <select
      className={styled.input_products}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option>Selecciona una categoria</option>
      {datos.map((data, index) => (
        <option key={data.idcategories} value={data.idcategories}>
          {data.categories_name}
        </option>
      ))}
    </select>
  );
};

export default BriefcaseSelected;
