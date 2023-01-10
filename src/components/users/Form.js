import React, { useState } from "react";
import Card from "../UI/Card";
import "./Form.css";
import Button from "../UI/Button";
import UserList from "./UserList";
import ErrorHandle from "./ErrorHandle";

const Form = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [list, updateList] = useState([]);
  const [isValid, setValid] = useState();

  const userNameEvent = (e) => {
    setUserName(e.target.value);
  };

  const ageEvent = (e) => {
    setAge(e.target.value);
  };

  const submitEvent = (e) => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setValid({title: 'Invalid input', message: 'please enter valid input(non-empty-values)'});
      return;
    }

    if(enteredAge <= 0){
        setValid({title: 'Invalid age', message: 'please enter valid age'})
        return
    }

    updateList((prevList) => {
      return [...prevList, { name: enteredUserName, age: enteredAge }];
    });

    setUserName("");
    setAge("");
  };

  const errorButton = () => {
    setValid(null);
  };

  return (
    <div>
      {isValid && (
        <ErrorHandle
          onConfirm={errorButton}
          title={isValid.title}
          message={isValid.message}
        />
      )}
      <Card className="input">
        <form onSubmit={submitEvent}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUserName}
            onChange={userNameEvent}
            type="text"
            id="username"
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            onChange={ageEvent}
            type="number"
            id="age"
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
      <UserList users={list} />
    </div>
  );
};

export default Form;
