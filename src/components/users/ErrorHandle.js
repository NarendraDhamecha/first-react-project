import React from "react";
import ReactDom from "react-dom";
import "./ErrorHandle.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const Modaloverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorHandle = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <Modaloverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modaloverlay")
      )}
    </React.Fragment>
  );
};

export default ErrorHandle;
