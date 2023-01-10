import React, { useState } from "react";
import "./App.css";
import Form from "./components/users/Form";
//import UserList from "./UserList";

const App = (props) => {

  // const [list, updateList] = useState([]);

  // const submitHandler = (uName, uAge) => {
  //   updateList((prevList) => {
  //     return [...prevList, { name: uName, age: uAge }];
  //   });
  // };

  return (
    <React.Fragment>
      <Form/>
    </React.Fragment>
  );
};

export default App;
