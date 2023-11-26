class Auth {
  constructor() {
    this.users_address = null;
    this.users_password = null;
    this.idrol = null;
  }

  setUsers_address(users_address) {
    this.users_address = users_address;
  }
  setIdrol(idrol) {
    this.idrol = idrol;
  }
  setUsers_password(users_password) {
    this.users_password = users_password;
  }

  getUsers_address() {
    return this.users_address;
  }
  getIdrol() {
    return this.idrol;
  }

  getUsers_password() {
    return this.users_password;
  }

  static formFields(datos) {
    const auth = new Auth();
    auth.setUsers_address(
      [null, undefined].includes(datos.users_address)
        ? null
        : datos.users_address
    );
    auth.setIdrol(
      [null, undefined].includes(datos.idrol)
        ? null
        : datos.idrol
    );
    auth.setUsers_password(
      [null, undefined].includes(datos.users_password)
        ? null
        : datos.users_password
    );
    return auth;
  }
}
export default Auth;
