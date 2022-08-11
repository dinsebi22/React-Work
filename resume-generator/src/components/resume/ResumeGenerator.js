import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import EducationForm from "../education/EducationForm";
import PersonalDataForm from "../personal_data/PersonalDataForm";
import PreviewButtonComponent from "../preview_data/PreviewButtonComponent";
import SkillsDataForm from "../skills/SkillsDataForm";
import WorkExperienceForm from "../work_experience/WorkExperienceForm";

function ResumeGenerator() {
  const [progressBarPercent, setProgressBarPercent] = useState(0);
  const [personalData, setPersonalData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [workExperiencesData, setWorkExperiencesData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const progressBarStyle = {
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "2%",
  };

  const fadeOutEffect = {
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0s 2s, opacity 2s linear",
  };

  function handlePersonalData(values) {
    setPersonalData(values);
    setProgressBarPercent(progressBarPercent + 25);
  }

  function handleSkillsData(values) {
    setSkillsData(values);
    setProgressBarPercent(progressBarPercent + 25);
  }

  function handleWorkExperience(values) {
    setWorkExperiencesData(values);
    setProgressBarPercent(progressBarPercent + 25);
  }

  function handleEducation(values) {
    setEducationData(values);
    setProgressBarPercent(progressBarPercent + 25);
  }

  function showPreview() {
    return (
      personalData.length > 0 &&
      skillsData.length > 0 &&
      workExperiencesData.length > 0 &&
      educationData.length > 0
    );
  }

  return (
    <>
      <div style={showPreview() ? fadeOutEffect : null}>
        <div style={progressBarStyle}>
          <ProgressBar animated now={progressBarPercent} />
        </div>
      </div>
      {personalData.length > 0 ? null : (
        <PersonalDataForm submitPerosnalData={handlePersonalData} />
      )}
      {skillsData.length > 0 ? null : personalData.length > 0 ? (
        <SkillsDataForm submitSkillsData={handleSkillsData} />
      ) : null}
      {workExperiencesData.length > 0 ? null : skillsData.length > 0 ? (
        <WorkExperienceForm submitWorkExperience={handleWorkExperience} />
      ) : null}
      {educationData.length > 0 ? null : workExperiencesData.length > 0 ? (
        <EducationForm submitEducation={handleEducation} />
      ) : null}

      {showPreview() ? (
        <PreviewButtonComponent
          personalData={personalData}
          skillsData={skillsData}
          workExperiencesData={workExperiencesData}
          educationData={educationData}
        />
      ) : null}
    </>
  );
}

export default ResumeGenerator;
