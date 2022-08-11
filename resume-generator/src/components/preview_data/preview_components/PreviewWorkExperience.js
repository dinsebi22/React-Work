import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function PreviewWorkExperience(props) {
  const margin = { marginBottom: "0px" };
  const [workExperiencesData, setWorkExperiencesData] = useState([]);

  function deisplayDelimiter(arrayElement) {
    return (
      workExperiencesData.length > 1 &&
      workExperiencesData.indexOf(arrayElement) !==
        workExperiencesData.length - 1
    );
  }

  useEffect(() => {
    setWorkExperiencesData(props.workExperiencesData);
  }, [props.workExperiencesData]);

  return (
    <>
      {workExperiencesData.map((elem) => (
        <Row key={elem.company + "-" + elem.position + "-" + elem.startDate}>
          <Col xs={5}>
            <p style={margin}> Company: {elem.company} </p>
            <p style={margin}>Position: {elem.position} </p>
            <hr />
            <p style={margin}>Start Date: {elem.startDate} </p>
            <p style={margin}>End Date: {elem.endDate} </p>
          </Col>
          <Col xs={7} style={{ borderLeft: "1px solid #ced4da" }}>
            <p style={margin}>Responsabilities: {elem.responsabilities} </p>
          </Col>

          {deisplayDelimiter(elem) ? <hr /> : null}
        </Row>
      ))}
    </>
  );
}

export default PreviewWorkExperience;
