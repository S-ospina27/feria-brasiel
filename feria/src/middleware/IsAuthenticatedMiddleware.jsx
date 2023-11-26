import { session } from "../tools/SessionSettings";
import Login from "../component/Login";
const IsAuthenticatedMiddleware = ({ children }) => {
  return session() ? children : <Login />;
};

export default IsAuthenticatedMiddleware;
