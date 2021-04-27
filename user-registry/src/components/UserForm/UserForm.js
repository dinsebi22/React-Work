import Input from "../UI/Input/Input";
import "./UserForm.css";
import React, { useState } from "react";
import WarningPopup from "../WarningPopup/WarningPopup";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handelInputChange = (event) => {
    event.inputType === "age" ? setAge(event.value) : setUsername(event.value);
  };

  const submitAddUserForm = (event) => {
    event.preventDefault();

    if (username.trim().length === 0) {
      setWarningMessage("Please enter a Valid Username");
      setShowWarning(true);
    } else if (age <= 0) {
      setWarningMessage("Please enter a valid Age");
      setShowWarning(true);
    } else {
      props.handleSubmitForm(username, age);
      setUsername("");
      setAge("");
    }
  };

  const handleClosePopup = () => setShowWarning(false);

  return (
    <div>
      <form onSubmit={submitAddUserForm}>
        <Input
          inputFor={"username"}
          inputType={"text"}
          title={"Username"}
          inputChange={handelInputChange}
          value={username}
        />

        <Input
          inputFor={"age"}
          title={"Age( Years )"}
          inputType={"number"}
          inputChange={handelInputChange}
          value={age}
        />

        <button type="submit" className="submitButton">
          Add User
        </button>
      </form>

      {showWarning && (
        <WarningPopup
          errorMessage={warningMessage}
          closePopup={handleClosePopup}
        />
      )}
    </div>
  );
};

export default UserForm;
