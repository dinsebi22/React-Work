import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import html2pdf from "html2pdf.js";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PreviewPersonalData from "./preview_components/PreviewPersonalData";
import PreviewSkillsData from "./preview_components/PreviewSkillsData";
import PreviewWorkExperience from "./preview_components/PreviewWorkExperience";
import PreviewEducationData from "./preview_components/PreviewEducationData";
import Button from "react-bootstrap/esm/Button";

function DataPreviewComponent() {
  const location = useLocation();
  const [personalData, setPersonalData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [workExperiencesData, setWorkExperiencesData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    setPersonalData(location.state.resumeData.personalData);
    setSkillsData(location.state.resumeData.skillsData);
    setWorkExperiencesData(location.state.resumeData.workExperiencesData);
    setEducationData(location.state.resumeData.educationData);
  }, [
    location.state.resumeData.personalData,
    location.state.resumeData.skillsData,
    location.state.resumeData.workExperiencesData,
    location.state.resumeData.educationData,
  ]);

  function generatePDF() {
    let element = document.getElementById("resume-result");

    let opt = {
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      margin: 1,
      filename: personalData[0] + personalData[1] + "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  }

  return (
    <Container className="mb-5">
      <Row id="resume-result">
        <Col xs={3}>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Personal Data</Card.Header>
            <Card.Body>
              <PreviewPersonalData personalData={personalData} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={9}>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Work Experience</Card.Header>
            <Card.Body>
              <PreviewWorkExperience
                workExperiencesData={workExperiencesData}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Skills</Card.Header>
            <Card.Body>
              <PreviewSkillsData skillsData={skillsData} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card bg="light" text="dark" className="mt-4 mb-2">
            <Card.Header>Education</Card.Header>
            <Card.Body>
              <PreviewEducationData educationData={educationData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="d-grid gap-2">
            <Button
              variant="outline-info"
              onClick={() => generatePDF()}
              size="lg"
            >
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DataPreviewComponent;
