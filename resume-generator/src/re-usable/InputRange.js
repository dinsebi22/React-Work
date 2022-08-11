import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Stack from "react-bootstrap/Stack";

function InputRange(props) {
  const [skillLevel, setSkillLevel] = useState(1);

  function processRemove() {
    console.log(props.position);
    props.removeElement(props.position);
  }

  return (
    <Row>
      <Col xs={"3"}>
        <Form.Label>
          {props.label} experiance Level: {skillLevel}
        </Form.Label>
      </Col>
      <Col xs={"9"}>
        <Stack direction="horizontal" gap={3} className="m-auto">
          <Form.Range
            min={1}
            max={5}
            step={1}
            value={skillLevel}
            onChange={(changeEvent) => {
              setSkillLevel(changeEvent.target.value);
            }}
          />
          <CloseButton position={props.position} onClick={processRemove} />
        </Stack>
      </Col>
    </Row>
  );
}

InputRange.propTypes = { label: PropTypes.string };

export default InputRange;
