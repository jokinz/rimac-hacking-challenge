import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as IconTheftSvg } from "../images/icon_theft.svg";
import { ReactComponent as IconDamagetSvg } from "../images/icon_damage.svg";
import { ReactComponent as IconPerdidaTotalSvg } from "../images/icon_perdidatotal.svg";

const SumCalculator = (props) => {
  let baseValue = props.planDetails.montoBase;
  const handleMinusClick = (e) => {
    e.preventDefault();
    if (baseValue > props.planDetails.minimo)
      props.onChangeMontoBase(baseValue - 100);
  };
  const handlePlusClick = (e) => {
    e.preventDefault();
    if (baseValue < props.planDetails.maximo)
      props.onChangeMontoBase(baseValue + 100);
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
  const handleLlantaRobadaSwitch = (e) => {
    props.onChangeLlantaRobada();
  };
  const handleChoqueSwitch = (e) => {
    props.onChangeChoque();
  };
  const handleAtropelloSwitch = (e) => {
    props.onChangeAtropello();
  };
  return (
    <>
      <div className="row my-4">
        <div className="col-12 m-auto mb-3 col-sm-6 col-md-7">
          <span>Indica la suma asegurada</span>
          <div className="d-flex flex-row justify-content-start justify-content-mb-between">
            <div>
              <p className="text-start mb-0 me-1 calculator__limits__text-styles">
                MIN ${props.planDetails.minimo}
              </p>
            </div>
            <div className="vr"></div>
            <div>
              <p className="text-start mb-0 ms-1 calculator__limits__text-styles">
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
              readOnly={true}
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
            <Button
              className="d-none d-md-block"
              onClick={handleLlantaRobadaClick}
            >
              {props.planDetails.llantaRobada ? "- Quitar" : "+ Agregar"}
            </Button>
            <Form.Check
              className="d-block d-md-none text-end"
              checked={props.planDetails.llantaRobada}
              type="switch"
              onChange={handleLlantaRobadaSwitch}
            />
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
              className="d-none d-md-block"
              disabled={props.planDetails.choqueEnabled ? false : true}
              onClick={handleChoqueClick}
            >
              {props.planDetails.choque ? "- Quitar" : "+ Agregar"}
            </Button>
            <Form.Check
              className="d-block d-md-none text-end"
              disabled={props.planDetails.choqueEnabled ? false : true}
              checked={props.planDetails.choque}
              type="switch"
              onChange={handleChoqueSwitch}
            />
            <Accordion.Body>
              Choque y/o pasarte la luz roja descripción
            </Accordion.Body>
          </Accordion.Item>
        </div>
        <div className="row">
          <IconPerdidaTotalSvg className="col-2" />
          <Accordion.Item eventKey="2" className="col-10 border-0 p-0">
            <Accordion.Header>Atropello en la vía Evitamiento</Accordion.Header>
            <Button
              className="d-none d-md-block"
              onClick={handleAtropelloClick}
            >
              {props.planDetails.atropello ? "- Quitar" : "+ Agregar"}
            </Button>
            <Form.Check
              className="d-block d-md-none text-end"
              checked={props.planDetails.atropello}
              type="switch"
              onChange={handleAtropelloSwitch}
            />
            <Accordion.Body>
              Atropello en la vía Evitamiento descripción
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
