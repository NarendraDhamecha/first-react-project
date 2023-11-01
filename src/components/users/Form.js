import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import "./Form.css";
import Button from "../UI/Button";
import UserList from "./UserList";
import ErrorHandle from "./ErrorHandle";

const Form = (props) => {
  // const [enteredUserName, setUserName] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [list, updateList] = useState([]);
  const [isValid, setValid] = useState();
  const enteredUserNameRef = useRef();
  const enteredAgeRef = useRef();
  const enteredCollegeRef = useRef();

  // const userNameEvent = (e) => {
  //   setUserName(e.target.value);
  // };

  // const ageEvent = (e) => {
  //   setAge(e.target.value);
  // };

  const submitEvent = (e) => {
    e.preventDefault();
    const enteredUserName = enteredUserNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;
    const enteredCollege = enteredCollegeRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollege.trim().length === 0
    ) {
      setValid({
        title: "Invalid input",
        message: "please enter valid input(non-empty-values)",
      });
      return;
    }

    if (enteredAge <= 0) {
      setValid({ title: "Invalid age", message: "please enter valid age" });
      return;
    }

    updateList((prevList) => {
      return [
        ...prevList,
        { name: enteredUserName, age: enteredAge, college: enteredCollege },
      ];
    });
    
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
    document.getElementById('college').value = '';
    // setUserName("");
    // setAge("");
  };

  const errorButton = () => {
    setValid(null);
  };

  return (
    <>
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
          <input type="text" id="username" ref={enteredUserNameRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={enteredAgeRef}></input>
          <label htmlFor="college">College Name</label>
          <input type="text" id="college" ref={enteredCollegeRef}></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
      <UserList users={list} />
    </>
  );
};

export default Form;
