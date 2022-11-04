import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "../App.scss";
import "../custom.scss";
import Armatuplan from "./Armatuplan";
import Login from "./Login";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as LogoRimacSvg } from "../images/logo_rimac.svg";
import Gracias from "./Gracias";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const UserContext = createContext();
function App() {
  const userDataSource = "https://jsonplaceholder.typicode.com/users/2";
  const [user, setUser] = useState({});
  const fetchUser = async (document, celular, placa) => {
    try {
      await fetch(userDataSource)
        .then((response) => response.json())
        .then((data) =>
          setUser({
            ...data,
            document: document,
            celular: celular,
            placa: placa,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App h-100">
      <UserContext.Provider value={user}>
        <Navbar bg="light" variant="light" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              <LogoRimacSvg />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="d-none d-md-flex">
                ¿Tienes alguna duda?{" "}
                <a className=" ms-3 d-none d-md-block" href="tel:014116001">
                  (01) 411 6001
                </a>
              </Navbar.Text>
              <Navbar.Text className="d-md-none">
                <a className="d-md-none" href="tel:014116001">
                  Llámanos
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                Object.keys(user).length === 0 && <Navigate to="/home" />
              }
            />
            <Route
              exact
              path="/home"
              element={<Login fetchUser={fetchUser} />}
            />
            <Route
              exact
              path="/armatuplan"
              element={
                Object.keys(user).length > 0 ? (
                  <Armatuplan />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            <Route exact path="/gracias" element={<Gracias />} />
          </Routes>
        </Router>{" "}
      </UserContext.Provider>
    </div>
  );
}

export default App;
