import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import background from "../images/background.png";
import { ReactComponent as PromoImg } from "../images/seguro_vehicular.svg";
import { ReactComponent as PromoImgMobile } from "../images/seguro_vehicular_mobile.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // console.log(props);

  const navigate = useNavigate();
  //TODO: update handleSubmitClick method
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await props.fetchUser(
        //TODO: update data source
        { type: "dni", number: "12345678" },
        123123123,
        "111-AAA"
      );
      navigate("/armatuplan");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="col-12 col-xl-5 d-flex justify-content-center flex-column p-0"
        >
          <div
            className="row col-11 col-md-6 col-lg-5 col-xl-8
          offset-1 m-md-auto d-flex flex-row align-items-center d-lg-block"
          >
            <PromoImg className="ms-3 d-none d-md-block" />
            <div className="col-8 col-md-12 p-0">
              <p className="text-uppercase ms-3">¡Nuevo!</p>
              <h1 className="ms-3">
                Seguro
                <span style={{ color: "#d90048" }}>Vehicular Tracking</span>
              </h1>
              <p className="ms-3">
                Cuentanos dónde le harás seguimiento a tu seguro
              </p>
            </div>
            <div className="col-4 d-md-none d-flex justify-content-end p-0">
              <PromoImgMobile />
            </div>
            <p className="d-none d-xl-block">
              © 2021 RIMAC Seguros y Reaseguros
            </p>
          </div>
        </div>
        <div className="col-xl-7 d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-10 col-md-6 col-lg-5 m-auto">
              <h2>Déjanos tus datos</h2>
              <Form>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Document"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">DNI</Dropdown.Item>
                    <Dropdown.Item href="#">RUC</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
                {/* <Form.Group className="mb-3" controlId="for">
              <Form.Control type="email" placeholder="Nro. de doc" />
            </Form.Group> */}
                <Form.Group className="mb-3" controlId="for">
                  <Form.Control type="phone" placeholder="Celular*" />
                  <Form.Control.Feedback type="invalid">
                    Ingrese un número de celular correcto.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Placa*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
                  />
                </Form.Group>
                <Button
                  onClick={handleClick}
                  variant="primary"
                  className="text-uppercase"
                >
                  COTÍZALO
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
