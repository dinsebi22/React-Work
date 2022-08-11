import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WorkExperienceComponent from "./WorkExperienceComponent";
import { useState } from "react";

function WorkExperienceForm(props) {
  const [validated, setValidated] = useState(false);

  const [workExperiences, setWorkExperiences] = useState([
    <WorkExperienceComponent key={"work-experience-component-0"} />,
  ]);

  function processWorkExperience(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    let result = [];
    for (let i = 0; i < workExperiences.length; i++) {
      result.push({
        company: event.target[i * 5].value,
        position: event.target[i * 5 + 1].value,
        startDate: event.target[i * 5 + 2].value,
        endDate: event.target[i * 5 + 3].value,
        responsabilities: event.target[i * 5 + 4].value,
      });
    }

    console.log(workExperiences);

    if (checkWorkExperience(result)) {
      props.submitWorkExperience(result);
    }
  }

  function checkWorkExperience(formInfo) {
    let validation = true;
    formInfo.forEach((elem) => {
      if (
        !elem.company.length ||
        !elem.position.length ||
        !elem.startDate.length ||
        !elem.endDate.length ||
        !elem.responsabilities.length
      ) {
        validation = false;
      }
    });
    return validation;
  }

  function processGenerateNewExperience() {
    setWorkExperiences([
      ...workExperiences,
      <WorkExperienceComponent
        onChange={processWorkExperience}
        key={"work-experience-component-" + workExperiences.length}
      />,
    ]);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Work experiance</Card.Header>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={processWorkExperience}
              >
                <Row>{workExperiences.map((elem) => elem)}</Row>
                <Row>
                  <Col xs={9}>
                    <div className="d-grid gap-2">
                      <Button
                        className="mt-3"
                        variant="primary"
                        size="lg"
                        type="submit"
                      >
                        Submit Work Experience
                      </Button>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="d-grid gap-2">
                      <Button
                        className="mt-3"
                        variant="success"
                        size="lg"
                        onClick={processGenerateNewExperience}
                      >
                        Add new experiance
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

export default WorkExperienceForm;
