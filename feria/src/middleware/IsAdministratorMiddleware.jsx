import { getJWT } from "../tools/SessionSettings";
import { useState } from "react";
import Home from "../component/Home";
const IsAdministratorMiddleware = ({ children }) => {
  const [rol, setRol] = useState(getJWT("idrol"));
  return rol === 2 ? children : <Home />;
};

export default IsAdministratorMiddleware;
