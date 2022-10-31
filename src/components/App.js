import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../App.scss";
import "../custom.scss";
import Armatuplan from "./Armatuplan";
import Login from "./Login";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ReactComponent as LogoRimacSvg } from "../images/logo_rimac.svg";
import Gracias from "./Gracias";

function App() {
  //TODO: update user source
  const user = false;
  return (
    <div className="App h-100">
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
          <Route exact path="/" element={user ? <Armatuplan /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/armatuplan" element={<Armatuplan />} />
          <Route exact path="/gracias" element={<Gracias />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
