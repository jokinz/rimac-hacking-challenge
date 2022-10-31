import React from "react";
import { Button } from "react-bootstrap";

export default function Trigger(props) {
  const value = props.status;
  return <Button>{value ? "+ Agregar" : "- Quitar"}</Button>;
}
