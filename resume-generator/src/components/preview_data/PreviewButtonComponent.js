import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function PreviewButtonComponent(props) {
  const navigate = useNavigate();

  const buttonStyles = {
    width: "50vw",
    height: "15vh",
    fontSize: "2rem",
  };

  const containerStyle = {
    width: "100%",
    height: "80vh",
    fontSize: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const resumeData = {
    personalData: props.personalData,
    skillsData: props.skillsData,
    workExperiencesData: props.workExperiencesData,
    educationData: props.educationData,
  };

  return (
    <Container>
      <Row>
        <Col style={containerStyle}>
          <Button
            style={buttonStyles}
            variant="success"
            onClick={() => {
              navigate("/preview", { state: { resumeData: resumeData } });
            }}
          >
            Preview Data
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PreviewButtonComponent;
