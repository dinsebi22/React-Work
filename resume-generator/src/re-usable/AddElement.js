import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useRef } from "react";
import Button from "react-bootstrap/Button";

function AddElement(props) {
  const formRef = useRef();

  function submitNewSkill(event) {
    event.preventDefault();

    if (formRef.current[0].value) {
      props.generateElement(formRef.current[0].value);
      event.target.reset();
    }
  }

  return (
    <Form onSubmit={submitNewSkill} ref={formRef}>
      <Row>
        <Col xs={"9"}>
          <Form.Group controlId="newSkill">
            <Form.Control type="text" placeholder="New Skill" />
          </Form.Group>
        </Col>
        <Col xs={"3"}>
          <div className="d-grid gap-2">
            <Button variant="success" type="submit">
              Add
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default AddElement;
