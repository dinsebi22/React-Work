import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import Row from "react-bootstrap/esm/Row";

function PreviewSkillsData(props) {
  const margin = { marginBottom: "0px" };
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setSkillsData(props.skillsData);
  }, [props.skillsData]);

  return (
    <>
      {skillsData.map((elem) => (
        <Row key={elem.label + "-" + elem.value}>
          <Col xs={3}>
            <p style={margin}> {elem.label} </p>
          </Col>
          <Col xs={9}>
            <ProgressBar min={1} max={5} now={elem.value} />
          </Col>
        </Row>
      ))}
    </>
  );
}

export default PreviewSkillsData;
