import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputRange from "../../re-usable/InputRange";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { create_UUID } from "../../utils/UuidGenerator";
import AddElement from "../../re-usable/AddElement";

function SkillsDataForm(props) {
  const INPUT_NAME = "input";
  const [rages, setRanges] = useState([]);
  const [validRages, setValidRages] = useState(true);

  function processGenerateRange(label) {
    let newRange = {
      label: label,
      value: 0,
      position: rages.length,
    };
    setRanges([...rages, newRange]);
    setValidRages(true);
  }

  function processSubmitRanges(event) {
    event.preventDefault();
    checkRanges();

    if (rages.length) {
      let index = 0;
      let result = [...rages];

      for (const element of event.target) {
        if (element.localName === INPUT_NAME) {
          result[index].value = element.value;
          index++;
        }
      }
      props.submitSkillsData(result);
      setRanges([]);
    }
  }

  function checkRanges() {
    if (!rages.length) {
      setValidRages(false);
    }
  }

  function processRemoval(index) {
    let newRanges = [...rages];
    newRanges.splice(index, 1);
    setRanges(newRanges);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Skills</Card.Header>
            <Card.Body>
              <Form onSubmit={processSubmitRanges}>
                {validRages ? null : (
                  <div style={{ color: "#dc3545" }}>
                    Please add at least one skill
                  </div>
                )}

                {rages.map((elem) => (
                  <InputRange
                    position={elem.position}
                    label={elem.label}
                    key={create_UUID()}
                    removeElement={processRemoval}
                  />
                ))}

                <div className="d-grid gap-2">
                  <Button
                    className="mt-3"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Submit skills
                  </Button>
                </div>
              </Form>

              <hr></hr>

              <AddElement generateElement={processGenerateRange} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SkillsDataForm;
