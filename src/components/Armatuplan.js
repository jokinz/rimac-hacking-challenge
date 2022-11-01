import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import AutoInfo from "./AutoInfo";
import SumCalculator from "./SumaCalculator";
import Resumen from "./Resumen";
import { useContext, useState } from "react";
import { UserContext } from "./App";
import { calcTotalPlan } from "../Utils";

function Armatuplan() {
  const user = useContext(UserContext);
  // console.log("arma context", UserContext);

  const [planDetails, setPlanDetails] = useState({
    minimo: 12500,
    maximo: 16500,
    montoBase: 12500,
    llantaRobada: false,
    choque: false,
    choqueEnabled: true,
    atropello: false,
  });
  const total = calcTotalPlan(planDetails);
  const onChangeMontoBase = (newMontoBase) => {
    setPlanDetails((prevPlanDetails) => {
      if (newMontoBase <= 16000) {
        return {
          ...prevPlanDetails,
          montoBase: newMontoBase,
          choqueEnabled: true,
        };
      } else {
        return {
          ...prevPlanDetails,
          montoBase: newMontoBase,
          choque: false,
          choqueEnabled: false,
        };
      }
    });
  };
  const onChangeLlantaRobada = () => {
    setPlanDetails((prevPlanDetails) => {
      const newValue = !prevPlanDetails.llantaRobada;
      return { ...prevPlanDetails, llantaRobada: newValue };
    });
  };
  const onChangeChoque = () => {
    setPlanDetails((prevPlanDetails) => {
      const newValue = !prevPlanDetails.choque;
      return { ...prevPlanDetails, choque: newValue };
    });
  };
  const onChangeAtropello = () => {
    setPlanDetails((prevPlanDetails) => {
      const newValue = !prevPlanDetails.atropello;
      return { ...prevPlanDetails, atropello: newValue };
    });
  };
  // console.log("total", total);
  // TODO: update data source
  const placa = user.placa;
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
            ¡Hola <span className="text-primary">{user.name}!</span>
          </h3>
          <p>Conoce las coberturas para tu plan</p>
          <AutoInfo placa={placa} />
          <SumCalculator
            planDetails={planDetails}
            onChangeMontoBase={onChangeMontoBase}
            onChangeLlantaRobada={onChangeLlantaRobada}
            onChangeChoque={onChangeChoque}
            onChangeAtropello={onChangeAtropello}
          />
        </div>
        <div
          className="col-12 col-sm-5 col-lg-5 col-xl-4 p-5 px-sm-4 flex-column"
          style={{ backgroundColor: "#fff" }}
        >
          {/* TODO: update monto value */}
          <Resumen planDetails={planDetails} total={total} />
        </div>
      </div>
    </div>
  );
}

export default Armatuplan;
