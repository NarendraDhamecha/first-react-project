import React from "react";
import "./ErrorHandle.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorHandle = (props) => {
  return (
    
      <div className="backdrop">
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
      </div>
  );
};

export default ErrorHandle;
