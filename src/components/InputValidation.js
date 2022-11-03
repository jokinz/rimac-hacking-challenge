import React from "react";

const InputValidation = (props) => {
  if (props.validationSource === null) return <></>;
  return (
    <>
      {props.validationSource === false && (
        <p className="text-danger">{props.warningMessage}</p>
      )}
    </>
  );
};

export default InputValidation;
