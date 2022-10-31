import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import AutoInfo from "./AutoInfo";
import SumaCalculadora from "./SumaCalculator";
import Resumen from "./Resumen";
import { useRef } from "react";

function Armatuplan(props) {
  const baseValue = useRef(14500);
  // TODO: update data source
  const nombre = "Juan";
  const placa = "1A2-B3C";
  return (
    <div style={{ backgroundColor: "#F7F8FC" }}>
      <div className="row fluid m-0">
        <div className="d-lg-none px-5">
          <span>PASO 2 DE 2</span>
          <ProgressBar className="col-sm" now={100} />
        </div>
        <div className="d-none d-lg-block col-lg-2 col-xl-4 p-5">
          <p>Datos</p>
          <p>Arma tu plan</p>
        </div>
        <div
          className="col-12 col-sm-7 col-lg-5 col-xl-4 p-5 px-sm-4"
          style={{ backgroundColor: "#fff" }}
        >
          <Button className="text-uppercase">Volver</Button>
          <h3 className="my-2">
            ¡Hola <span className="text-primary">{nombre}!</span>
          </h3>
          <p>Conoce las coberturas para tu plan</p>
          <AutoInfo placa={placa} />
          <SumaCalculadora baseValue={baseValue.current} />
        </div>
        <div
          className="col-12 col-sm-5 col-lg-5 col-xl-4 p-5 px-sm-4 flex-column"
          style={{ backgroundColor: "#fff" }}
        >
          {/* TODO: update monto value */}
          <Resumen monto={35} />
        </div>
      </div>
    </div>
  );
}

export default Armatuplan;
