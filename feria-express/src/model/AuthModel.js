import { connection } from "../configs/mySQL.js";

class AuthModel {
  AuthModel = async (auth) => {
    const [query] = await connection.execute("CALL Auth (?,?)", [
      auth.users_address,
      auth.users_password,
    ]);
    return query.shift();
  };
}

export default AuthModel;
