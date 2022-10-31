import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Check } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function Resumen(props) {
  const navigate = useNavigate();

  const monto = props.monto.toFixed(2);
  //TODO: update handleClick methods
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/gracias");
  };

  return (
    <>
      <p>Monto</p>
      <h5>{`$${monto}`}</h5>
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
