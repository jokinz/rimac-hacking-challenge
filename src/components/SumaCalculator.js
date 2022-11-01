import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as IconTheftSvg } from "../images/icon_theft.svg";
import { ReactComponent as IconDamagetSvg } from "../images/icon_damage.svg";
import { ReactComponent as IconPerdidaTotalSvg } from "../images/icon_perdidatotal.svg";

const SumCalculator = (props) => {
  // console.log("calcul props:", props);
  let baseValue = props.planDetails.montoBase;
  const handleMinusClick = (e) => {
    e.preventDefault();
    if (baseValue > props.planDetails.minimo)
      props.onChangeMontoBase(baseValue - 100);
    // console.log(baseValue);
  };
  const handlePlusClick = (e) => {
    e.preventDefault();
    if (baseValue < props.planDetails.maximo)
      props.onChangeMontoBase(baseValue + 100);
    // console.log(baseValue);
  };
  const handleLlantaRobadaClick = (e) => {
    e.preventDefault();
    props.onChangeLlantaRobada();
  };
  const handleChoqueClick = (e) => {
    e.preventDefault();
    props.onChangeChoque();
  };
  const handleAtropelloClick = (e) => {
    e.preventDefault();
    props.onChangeAtropello();
  };
  return (
    <>
      <div className="row my-4">
        <div className="col-12 m-auto mb-3 col-sm-6 col-md-7">
          <span>Indica la suma asegurada</span>
          <div className="d-flex flex-row justify-content-start justify-content-mb-between">
            <div>
              <p
                className="text-start mb-0 me-1"
                style={{
                  color: "#676F8F",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                MIN ${props.planDetails.minimo}
              </p>
            </div>
            <div className="vr"></div>
            <div>
              <p
                className="text-start mb-0 ms-1"
                style={{
                  color: "#676F8F",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                MAX ${props.planDetails.maximo}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 m-auto col-sm-6 col-md-5 px-0">
          <InputGroup className="mb-3">
            <Button
              className="border border-2"
              onClick={handleMinusClick}
              variant="outline-secondary"
              id="button-addon1"
            >
              -
            </Button>
            <Form.Control
              className="text-center border-0"
              value={`$${baseValue}`}
              disabled={true}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <Button
              className="border border-2"
              onClick={handlePlusClick}
              variant="outline-secondary"
              id="button-addon2"
            >
              +
            </Button>
          </InputGroup>
        </div>
      </div>
      <hr className=".ms-1 " />
      <p>Agrega o quita coberturas</p>
      <Accordion>
        <div className="row">
          <IconTheftSvg className="col-2" />
          <Accordion.Item eventKey="0" className="col-10 border-0 p-0">
            <Accordion.Header>Llanta robada</Accordion.Header>
            <Button onClick={handleLlantaRobadaClick}>
              {props.planDetails.llantaRobada ? "- Quitar" : "+ Agregar"}
            </Button>
            <Accordion.Body>
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis y mucho más
            </Accordion.Body>
          </Accordion.Item>
        </div>
        <div className="row">
          <IconDamagetSvg className="col-2" />
          <Accordion.Item eventKey="1" className="col-10 border-0 p-0">
            <Accordion.Header>Choque y/o pasarte la luz roja</Accordion.Header>
            <Button
              disabled={props.planDetails.choqueEnabled ? false : true}
              onClick={handleChoqueClick}
            >
              {props.planDetails.choque ? "- Quitar" : "+ Agregar"}
            </Button>
            <Accordion.Body>Choque y/o pasarte la luz roja desc</Accordion.Body>
          </Accordion.Item>
        </div>
        <div className="row">
          <IconPerdidaTotalSvg className="col-2" />
          <Accordion.Item eventKey="2" className="col-10 border-0 p-0">
            <Accordion.Header>Atropello en la vía Evitamiento</Accordion.Header>
            <Button onClick={handleAtropelloClick}>
              {props.planDetails.atropello ? "- Quitar" : "+ Agregar"}
            </Button>
            <Accordion.Body>
              Atropello en la vía Evitamiento desc
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>
      {/* </Tab>
            <Tab
              eventKey="protege-a-los-que-te-rodean"
              title="Protege a los que te rodean"
            >
              <p>Texto </p>
            </Tab>
            <Tab eventKey="mejora-tu-plan" title="Mejora tu plan">
              <p>Texto </p>
            </Tab>
          </Tabs> */}
    </>
  );
};

export default SumCalculator;
