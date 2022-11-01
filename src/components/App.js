import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../App.scss";
import "../custom.scss";
import Armatuplan from "./Armatuplan";
import Login from "./Login";
import { Navbar, Nav, Container } from "react-bootstrap";
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
      //TODO: validate inputs
      console.log("validate doc");
      console.log("validate cel");
      console.log("validate placa");
      //
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

      console.log("app user", user);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App h-100">
      <UserContext.Provider value={user}>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <LogoRimacSvg />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
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
