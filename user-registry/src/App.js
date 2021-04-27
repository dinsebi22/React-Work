import Card from "./components/UI/Card/Card";
import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm.js";
import UserList from "./components/UserList/UserList.js";

function App() {
  const [userList, setUserList] = useState([
    { userId: 1, age: 20, username: "Sebastian Din" },
  ]);

  const addNewUser = (newUserName, newAge) => {
    let newUser = { username: newUserName, age: newAge, userId: Math.random() };
    setUserList([newUser, ...userList]);
  };

  return (
    <div>
      <Card>
        <UserForm handleSubmitForm={addNewUser}></UserForm>
      </Card>

      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
