import React from "react";
import "./UserList.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={Math.random()}>
            Name: {user.name} ... Age: {user.age} Years ... College:{" "}
            {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
