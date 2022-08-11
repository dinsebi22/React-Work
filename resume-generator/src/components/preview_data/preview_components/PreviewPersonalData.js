function PreviewPersonalData(props) {
  const margin = { marginBottom: "2px" };

  return (
    <div>
      <p style={margin}>First Name: {props.personalData[0]} </p>
      <p style={margin}>Last Name: {props.personalData[1]} </p>
      <p style={margin}>Email: {props.personalData[2]} </p>
      <p style={margin}>LinkedIn: {props.personalData[3]} </p>
      <p style={margin}>GitHub: {props.personalData[4]} </p>
      <p style={margin}>Website: {props.personalData[5]} </p>
      <hr />
      <p style={margin}>About You:</p>
      <p style={margin}>{props.personalData[6]}</p>
    </div>
  );
}

export default PreviewPersonalData;
