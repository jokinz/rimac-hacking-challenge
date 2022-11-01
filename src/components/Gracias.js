import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as GraciasSvg } from "../images/gracias.svg";
import { ReactComponent as GraciasMobileSvg } from "../images/gracias_mobile.svg";
import { useContext } from "react";
import { UserContext } from "./App";
import { useLocation } from "react-router";

export default function Gracias(props) {
  console.log("Monto final:", useLocation().state.montoFinal);
  const email = useContext(UserContext).email;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <GraciasSvg className="m-auto d-none d-lg-block" />
        </div>
        <div className="d-lg-none p-0">
          <GraciasMobileSvg className="w-100" />
        </div>
        <div className="col-lg-5 col-md-12">
          <h1>
            <span
              style={{
                color: "#d90048",
              }}
            >
              ¡Te damos la bienvenida!
            </span>
            <br />
            Cuenta con nosotros para proteger tu vehículo
          </h1>
          <p>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
            <br />
            <strong>{email}</strong>
          </p>
          <Button size="lg" className="text-uppercase">
            Como usar mi seguro
          </Button>
        </div>
      </div>
    </div>
  );
}
