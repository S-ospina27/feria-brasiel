export function remove(item) {
  sessionStorage.removeItem(item);
}

export function get(item) {
  return sessionStorage.getItem(item);
}

export function set(key, item) {
  sessionStorage.setItem(key, item);
}

export function getJWT(key = null) {
  const token = get("jwt");
  
  const decode = token.split(".");
  const jwt = JSON.parse(atob(decode[1]));
  return key === null ? jwt : jwt.datos[key];
}

export function getHeader() {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ` + get("jwt"),
    },
  };
}

export function getHeaderMultipart() {
  const header = getHeader();
  header.headers["Content-Type"] = "multipart/form-data";
  return header;
}

export function session() {
  return [undefined, null].includes(get("jwt")) ? false : true;
}

export function getRoleSession() {
  const datosRoles = {
    1: ["pijama", "Brasieres", "Deportivos"],
    2: ["Categoria", "Producto"],
  };
  return datosRoles[parseInt(getJWT("idrol"))];
}
