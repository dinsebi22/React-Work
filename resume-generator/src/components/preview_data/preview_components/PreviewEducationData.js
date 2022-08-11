import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function PreviewEducationData(props) {
  const margin = { marginBottom: "0px" };
  const [educationData, setEducationData] = useState([]);

  function deisplayDelimiter(arrayElement) {
    return (
      educationData.length > 1 &&
      educationData.indexOf(arrayElement) !== educationData.length - 1
    );
  }

  useEffect(() => {
    setEducationData(props.educationData);
  }, [props.educationData]);

  return (
    <>
      {educationData.map((elem) => (
        <Row key={elem.institution + "-" + elem.startDate + "-" + elem.endDate}>
          <Col xs={6}>
            <p style={margin}> Institution: {elem.institution} </p>
            <hr />
            <p style={margin}>Start Date: {elem.startDate} </p>
            <p style={margin}>End Date: {elem.endDate} </p>
          </Col>
          <Col xs={6} style={{ borderLeft: "1px solid #ced4da" }}>
            <p style={margin}>Institution: {elem.description} </p>
          </Col>

          {deisplayDelimiter(elem) ? <hr /> : null}
        </Row>
      ))}
    </>
  );
}

export default PreviewEducationData;
