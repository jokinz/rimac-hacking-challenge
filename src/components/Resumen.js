import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Check } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function Resumen(props) {
  const navigate = useNavigate();

  const total = props.total;
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/gracias", { state: { montoFinal: total } });
  };

  return (
    <>
      <p>Monto</p>
      <h5>{`$${total}`}</h5>
      <p>mensuales</p>
      <hr />
      <p>El precio incluye:</p>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Check /> Llanta de respuesto
        </ListGroup.Item>
        <ListGroup.Item>
          <Check />
          Análisis de motor
        </ListGroup.Item>
        <ListGroup.Item>
          <Check />
          Aros gratis
        </ListGroup.Item>
      </ListGroup>
      <Button
        className="text-uppercase w-100 mt-4"
        onClick={handleClick}
        size="lg"
      >
        Lo Quiero
      </Button>
    </>
  );
}
