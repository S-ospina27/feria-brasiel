import style from "../css/Login.module.css";
import logo from "../assets/img/logo.avif";
import { handleSubmit } from "../component/data/Login";
import { getJWT, set } from "../tools/SessionSettings";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ alert }) => {
  const user = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const submite = (e) => {
    e.preventDefault();
    const user_login = user.current.value;
    const pass_login = password.current.value;
    handleSubmit({ user_login, pass_login }).then((res) => {
      if (res.data.status === "success") {
        user.current.value = "";
        password.current.value = "";
        set("jwt", res.data.data);
        const role = getJWT("idrol");

        role == 2 ? navigate("/Categoria") : navigate("/Home");
      } else {
        alert({
          open: true,
          message: "Usuario y/o contraseña es invalido ",
          severity: "error",
        });
        console.log("error");
      }
    });
  };
  return (
    <div className={style.container}>
      <div className={style.container_padre}>
        <section className={style.container_izq}>
          <div className={style.container_logo_login}>
            <img src={logo} />
          </div>
        </section>
        <section className={style.container_der}>
          <form className={style.form_login} onSubmit={submite}>
            <h1>Bienvenido!</h1>
            <div className={style.container_input}>
              <input
                className={style.input_login}
                type="email"
                placeholder="Ingrese correo Electronico"
                autoComplete="off"
                required
                ref={user}
              />
            </div>
            <div className={style.container_input}>
              <input
                className={style.input_login}
                type="password"
                placeholder="Ingrese contraseña"
                autoComplete="off"
                required
                ref={password}
              />
            </div>

            <button type="submit" className={style.login_button}>
              Ingresar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
