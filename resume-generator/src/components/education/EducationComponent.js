import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import NamedInput from "../../re-usable/NamedInput";
import Stack from "react-bootstrap/esm/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import IntervalStack from "../../re-usable/IntervalStack";

function EducationComponent() {
  return (
    <Row>
      <Col md={5}>
        <Stack>
          <NamedInput type={"text"} label={"Institution"} />
        </Stack>

        <IntervalStack />
      </Col>
      <Col md={7}>
        <InputGroup>
          <InputGroup.Text>Description</InputGroup.Text>
          <Form.Control required as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">
            Please enter a valid description
          </Form.Control.Feedback>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default EducationComponent;
