import { Route, Routes } from "react-router-dom";
import NavbarApp from "./component/common/NavbarApp";
import Home from "./component/Home";
import Pijamas from "./component/Píjamas";
import Brasieres from "./component/Brasieres";
import IsAuthenticatedMiddleware from "./middleware/IsAuthenticatedMiddleware";
import IsAdministratorMiddleware from "./middleware/IsAdministratorMiddleware";
import Deportivos from "./component/Deportivos";
import Login from "./component/Login";
import Categories from "./component/Categories";
import Productos from "./component/Productos";
import { useState } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";
import NotFound from "./component/common/NotFound";
function App() {
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <>
      {alert.open && (
        <Snackbar
          open={alert.open}
          autoHideDuration={alert.time ? alert.time : 5000}
          onClose={(event, reason) => {
            if (reason === "clickaway") return;

            setAlert({
              open: false,
              severity: "",
              message: "",
            });
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
          <Alert
            severity={
              [
                "error",
                "route-error",
                "database-error",
                "existence-error",
                "session-error",
              ].includes(alert.severity)
                ? "error"
                : alert.severity
            }
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Routes>
        <Route path="/" element={<Login alert={setAlert} />} />

        <Route path="/" element={<NavbarApp />}>
          <Route
            path="/Home"
            element={
              <IsAuthenticatedMiddleware>
                <Home />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/pijama"
            element={
              <IsAuthenticatedMiddleware>
                <Pijamas />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Brasieres"
            element={
              <IsAuthenticatedMiddleware>
                <Brasieres />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Deportivos"
            element={
              <IsAuthenticatedMiddleware>
                <Deportivos />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Categoria"
            element={
              <IsAuthenticatedMiddleware>
                <IsAdministratorMiddleware>
                  <Categories alert={setAlert} />
                </IsAdministratorMiddleware>
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Producto"
            element={
              <IsAuthenticatedMiddleware>
                <IsAdministratorMiddleware>
                  <Productos alert={setAlert} />
                </IsAdministratorMiddleware>
              </IsAuthenticatedMiddleware>
            }
          />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
