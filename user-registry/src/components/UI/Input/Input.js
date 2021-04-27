import "./Input.css";

const Input = (prop) => {
  const onInputValueChange = (event) => {
    prop.inputChange({ inputType: prop.inputFor, value: event.target.value });
  };

  return (
    <div className="inputContainer">
      <h4 className="mb-0">{prop.title}</h4>
      <input
        onChange={onInputValueChange}
        type={prop.inputType}
        value={prop.value}
      />
    </div>
  );
};

export default Input;
