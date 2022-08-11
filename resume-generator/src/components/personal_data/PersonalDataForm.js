import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputField from "../../re-usable/InputField";
import { create_UUID } from "../../utils/UuidGenerator";
import { useState } from "react";

function PersonalDataForm(props) {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [linkedIn, setLinkedIn] = useState(undefined);
  const [github, setGithub] = useState(undefined);
  const [personalWebsite, setPersonalWebsite] = useState(undefined);
  const [aboutYou, setAboutYou] = useState(undefined);

  function processSubmitPeronalData(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (
      firstName &&
      lastName &&
      email &&
      linkedIn &&
      github &&
      personalWebsite &&
      aboutYou
    )
      props.submitPerosnalData(
        Array.of(
          firstName,
          lastName,
          email,
          linkedIn,
          github,
          personalWebsite,
          aboutYou
        )
      );
  }

  function onInputChange(event, changeStateFunction) {
    changeStateFunction(event.target.value);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Personal Data</Card.Header>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={processSubmitPeronalData}
              >
                <Row>
                  <InputField
                    handleInputValueChange={(event) =>
                      onInputChange(event, setFirstName)
                    }
                    controlId={create_UUID()}
                    label="First Name"
                    type={"text"}
                    placeholder="John"
                  />
                  <InputField
                    handleInputValueChange={(event) =>
                      onInputChange(event, setLastName)
                    }
                    controlId={create_UUID()}
                    label="Last Name"
                    type={"text"}
                    placeholder="Doe"
                  />
                </Row>

                <InputField
                  handleInputValueChange={(event) =>
                    onInputChange(event, setEmail)
                  }
                  controlId={create_UUID()}
                  label="Email"
                  type={"email"}
                  placeholder="someone@gmail.com"
                />

                <InputField
                  handleInputValueChange={(event) =>
                    onInputChange(event, setLinkedIn)
                  }
                  controlId={create_UUID()}
                  label="LinkedIn"
                  type={"text"}
                />

                <InputField
                  handleInputValueChange={(event) =>
                    onInputChange(event, setGithub)
                  }
                  controlId={create_UUID()}
                  label="GitHub"
                  type={"text"}
                />

                <InputField
                  handleInputValueChange={(event) =>
                    onInputChange(event, setPersonalWebsite)
                  }
                  controlId={create_UUID()}
                  label="Personal Website"
                  type={"text"}
                />

                <Row>
                  <InputField
                    handleInputValueChange={(event) =>
                      onInputChange(event, setAboutYou)
                    }
                    controlId={create_UUID()}
                    label="About you"
                    type={"text"}
                    inputType="textarea"
                  />
                </Row>

                <div className="d-grid gap-2">
                  <Button
                    className="mt-3"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalDataForm;
