import "./WarningPopup.css";

const WarningPopup = (props) => {
  return (
    <div className="container">
      <div className="warn-card center">
        <div className="warn-info">
          <h1>Warning</h1>
          <h3>{props.errorMessage}</h3>
        </div>
        <button onClick={props.closePopup}>Close</button>
      </div>
    </div>
  );
};

export default WarningPopup;
