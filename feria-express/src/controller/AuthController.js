import AuthModel from "../model/AuthModel.js";
import Auth from "../class/Auth.js";
import JWT from "../helpers/Jwt.js";
class AuthController {
  constructor() {
    this.AuthModel = new AuthModel();
  }

  AuthController = async (req, res) => {
    try {
      const auth = Auth.formFields(req.body);
      const data = await this.AuthModel.AuthModel(auth);
      const datos = data.shift();
      if (datos) {
        return res.success("Datos validos", JWT.createJWT(datos));
      }
      return res.error("Datos invalidos");
    } catch (error) {
      return res.json("Ocurrrio un error " + error);
    }
  };
}

export default AuthController;
