import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import EducationComponent from "./EducationComponent";

function EducationForm(props) {
  const [validated, setValidated] = useState(false);

  const [educationList, setEducationList] = useState([
    <EducationComponent key={"education-component-0"} />,
  ]);

  function processEducation(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    let result = [];

    for (let i = 0; i < educationList.length; i++) {
      result.push({
        institution: event.target[i * 4].value,
        startDate: event.target[i * 4 + 1].value,
        endDate: event.target[i * 4 + 2].value,
        description: event.target[i * 4 + 3].value,
      });
    }

    if (checkInformation(result)) {
      props.submitEducation(result);
    }
  }

  function processGenerateNewEducation() {
    setEducationList([
      ...educationList,
      <EducationComponent
        key={"education-component-" + educationList.length}
      />,
    ]);
  }

  function checkInformation(formInfo) {
    let validation = true;
    formInfo.forEach((elem) => {
      if (
        !elem.institution.length ||
        !elem.startDate.length ||
        !elem.endDate.length ||
        !elem.description.length
      ) {
        validation = false;
      }
    });
    return validation;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Education</Card.Header>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={processEducation}
              >
                <Row>{educationList.map((elem) => elem)}</Row>
                <Row>
                  <Col xs={9}>
                    <div className="d-grid gap-2">
                      <Button
                        className="mt-3"
                        variant="primary"
                        size="lg"
                        type="submit"
                      >
                        Submit education
                      </Button>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="d-grid gap-2">
                      <Button
                        className="mt-3"
                        variant="success"
                        size="lg"
                        onClick={processGenerateNewEducation}
                      >
                        Add new education
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EducationForm;
