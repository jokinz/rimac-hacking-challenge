import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as GraciasSvg } from "../images/gracias.svg";
import { ReactComponent as GraciasMobileSvg } from "../images/gracias_mobile.svg";
import { useContext } from "react";
import { UserContext } from "./App";
import { useLocation } from "react-router";

export default function Gracias() {
  console.log("Monto final:", useLocation().state.montoFinal);
  const email = useContext(UserContext).email;

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-12 col-md-5 d-none d-md-flex align-items-center justify-content-start p-0">
          <GraciasSvg className="my-auto" />
        </div>
        <div className="d-md-none p-0">
          <GraciasMobileSvg className="w-100" />
        </div>
        <div className=" col-10 col-md-5 offset-md-1 m-auto">
          <h1 className="mb-4">
            <span className="text-primary">¡Te damos la bienvenida!</span>
            <br />
            Cuenta con nosotros para proteger tu vehículo
          </h1>
          <p className="mb-5">
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
