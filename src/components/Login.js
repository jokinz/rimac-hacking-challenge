import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import background from "../images/background.png";
import { ReactComponent as PromoImg } from "../images/seguro_vehicular.svg";
import { ReactComponent as PromoImgMobile } from "../images/seguro_vehicular_mobile.svg";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  validateCelularInput,
  validateDocumentInput,
  validatePlacaInput,
  validateDocumentFormat,
  validateCelularFormat,
  validatePlacaFormat,
} from "../Utils";
import InputValidation from "./InputValidation";

const Login = (props) => {
  // console.log(props);
  //TODO: quitar values para testing
  const [documentType, setDocumentType] = useState("dni");
  const [document, setDocument] = useState("12121211");
  const [celular, setCelular] = useState("999888771");
  const [placa, setPlaca] = useState("111-AA1");

  //TODO: reactivar empty values
  // const [documentType, setDocumentType] = useState("document");
  // const [document, setDocument] = useState("");
  // const [celular, setCelular] = useState("");
  // const [placa, setPlaca] = useState("");
  const [politica, setPolitica] = useState(false);
  const [validDocument, setValidDocument] = useState(null);
  const [validCelular, setValidCelular] = useState(null);
  const [validPlaca, setValidPlaca] = useState(null);
  const [validPolitica, setValidPolitica] = useState(null);

  const handleDocumentTypeChange = (e) => {
    e.preventDefault();
    setDocumentType(e.target.value);
    setDocument("");
  };

  const onDocumentInputChange = (e) => {
    e.preventDefault();
    validateDocumentInput(e.target.value, documentType) &&
      setDocument(e.target.value);
    setValidDocument(null);
  };

  const onCelularInputChange = (e) => {
    e.preventDefault();
    validateCelularInput(e.target.value) && setCelular(e.target.value);
    setValidCelular(null);
  };

  const onPlacaInputChange = (e) => {
    e.preventDefault();
    validatePlacaInput(e.target.value) && setPlaca(e.target.value);
    setValidPlaca(null);
  };

  const handlePoliticaCheckChange = () => {
    setPolitica(!politica);
    setValidPolitica(!politica);
  };

  const navigate = useNavigate();
  const handleSubmitClick = async (e) => {
    setValidDocument(validateDocumentFormat(document, documentType));
    setValidCelular(validateCelularFormat(celular));
    setValidPlaca(validatePlacaFormat(placa));
    if (validDocument && validCelular && validPlaca && validPolitica) {
      e.preventDefault();
      try {
        await props.fetchUser(
          { type: documentType, number: document },
          celular,
          placa
        );
        navigate("/armatuplan");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div
          style={{
            backgroundImage: `url(${background})`,
          }}
          className="col-12 col-xl-5 d-flex justify-content-center flex-column p-0 login-background"
        >
          <div
            className="row h-100 col-11 col-md-6 col-lg-5 col-xl-8
          offset-1 m-md-auto d-flex flex-row align-items-center"
          >
            <PromoImg className="ps-3 mt-auto d-none d-md-block" />
            <div className="col-8 col-md-12 p-0">
              <p className="text-uppercase text-secondary ms-3 font-weight-bold">
                ¡Nuevo!
              </p>
              <h1 className="ms-3 text-secondary">
                Seguro <span className="text-primary">Vehicular Tracking</span>
              </h1>
              <p className="ms-3 text-secondary">
                Cuentanos dónde le harás seguimiento a tu seguro
              </p>
            </div>
            <div className="col-4 d-md-none d-flex justify-content-end p-0">
              <PromoImgMobile />
            </div>
            <p className="d-none d-xl-block mt-auto">
              © 2021 RIMAC Seguros y Reaseguros
            </p>
          </div>
        </div>
        <div className="col-xl-7 d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-10 col-md-6 col-lg-5 m-auto text-secondary">
              <h2>Déjanos tus datos</h2>
              <Form>
                <Form.Group>
                  <InputGroup className="mb-3">
                    <select
                      value={documentType}
                      onChange={handleDocumentTypeChange}
                      variant="outline-secondary"
                      title="Document"
                      id="input-group-dropdown-1"
                    >
                      <option disabled value="document">
                        Document
                      </option>
                      <option value="dni">DNI</option>
                      <option value="ruc">RUC</option>
                    </select>
                    <Form.Control
                      className="p-3"
                      disabled={documentType === "document" ? true : false}
                      value={document}
                      onChange={onDocumentInputChange}
                      aria-label="Text input with dropdown button"
                    />
                  </InputGroup>
                  <InputValidation
                    validationSource={validDocument}
                    warningMessage={"Completa correctamente este campo"}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="p-3"
                    value={celular}
                    onChange={onCelularInputChange}
                    type="text"
                    placeholder="Celular*"
                  />
                  <InputValidation
                    validationSource={validCelular}
                    warningMessage={"Completa correctamente este campo"}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-uppercase p-3"
                    onChange={onPlacaInputChange}
                    value={placa}
                    type="text"
                    placeholder="Placa*"
                  />
                  <InputValidation
                    validationSource={validPlaca}
                    warningMessage={"Completa correctamente este campo"}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    checked={politica}
                    onChange={handlePoliticaCheckChange}
                    type="checkbox"
                    label={
                      <span>
                        Acepto la{" "}
                        <a
                          href="https://www.rimac.com/terminos-y-condiciones"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Política de Protección de Datos Personales
                        </a>{" "}
                        y los
                        <a
                          href="https://www.rimac.com/terminos-condiciones/politicas"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Términos y Condiciones
                        </a>
                      </span>
                    }
                  />
                  <InputValidation
                    validationSource={validPolitica}
                    warningMessage={"Por favor marca este campo"}
                  />
                </Form.Group>
                <Button
                  onClick={handleSubmitClick}
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
