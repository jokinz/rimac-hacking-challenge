import Card from "react-bootstrap/Card";
import { ReactComponent as CoberturaSvg } from "../images/cobertura.svg";
const AutoInfo = (props) => {
  const placa = props.placa;
  return (
    <Card>
      <Card.Body className="py-0 px-3">
        <div className="row">
          <div className="col-6 col-md-7 d-flex justify-content-center flex-column">
            <p className="mb-0">Placa: {placa}</p>
            <Card.Text>Wolkswagen 2020</Card.Text>
          </div>
          <div className="col-6 col-md-5 d-flex justify-content-end">
            <CoberturaSvg style={{ marginTop: "-10px" }} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AutoInfo;
