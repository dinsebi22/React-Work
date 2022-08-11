import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import NamedInput from "../../re-usable/NamedInput";
import Stack from "react-bootstrap/esm/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import IntervalStack from "../../re-usable/IntervalStack";

function WorkExperienceComponent() {
  return (
    <Row>
      <Col md={5}>
        <Stack>
          <NamedInput type={"text"} label={"Company"} />
          <NamedInput type={"text"} label={"Position"} />
        </Stack>
        <IntervalStack />
      </Col>
      <Col md={7}>
        <InputGroup>
          <InputGroup.Text>Responsabilities</InputGroup.Text>
          <Form.Control required as="textarea" rows={5} />
          <Form.Control.Feedback type="invalid">
            Please enter a valid description of your position .
          </Form.Control.Feedback>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default WorkExperienceComponent;
