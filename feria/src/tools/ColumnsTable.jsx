import { Avatar } from "@mui/material";

const url_img = import.meta.env.VITE_SERVER_IMG;
export default {
  category: [
    {
      field: "categories_photo",
      headerName: "Avatar",
      width: 130,

      renderCell: (params) => (
        <Avatar
          alt="Avatar"
          src={url_img + params.row.categories_photo}
          //   sx={{ width: 100 ,height:70 }}
        />
      ),
    },
    { field: "idcategories", headerName: "ID", width: 250 },
    { field: "idbriefcase", headerName: "ID PORTAFOLIO ", width: 250 },
    { field: "categories_name", headerName: "NOMBRE CATEGORIA", width: 200 },
  ],
  products: [
    {
      field: "products_photo",
      headerName: "Avatar",
      width: 130,

      renderCell: (params) => (
        <Avatar
          alt="Avatar"
          src={url_img + params.row.products_photo}
          //   sx={{ width: 100 ,height:70 }}
        />
      ),
    },
    { field: "idcategories", headerName: "ID CATEGORIA", width: 250 },
    { field: "Products_reference", headerName: "NOMBRE ", width: 250 },
    { field: "Products_size", headerName: "TALLA", width: 200 },
    { field: "Products_price", headerName: "TALLA", width: 200 },
    {
      field: "Products_color",
      headerName: "COLOR",
      width: 130,

      renderCell: (params) => (
        <input type="color" disabled value={params.row.Products_color} />
      ),
    },
  ],
};
