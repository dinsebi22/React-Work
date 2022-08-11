import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";

function InputField(props) {
  return props.inputType === "textarea" ? (
    <>
      <Form.Group
        controlId={props.elementId}
        onChange={(event) => props.handleInputValueChange(event)}
      >
        <Form.Label>{props.label}</Form.Label>
        <Form.Control required as="textarea" rows={4} />
        <Form.Control.Feedback type="invalid">
          Please tell us about you
        </Form.Control.Feedback>
      </Form.Group>
    </>
  ) : (
    <>
      <Form.Group
        as={Col}
        controlId={props.elementId}
        onChange={(event) => props.handleInputValueChange(event)}
      >
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          required
          type={props.type}
          placeholder={props.placeholder}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a {props.label}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

InputField.propTypes = {
  inputType: PropTypes.string,
  controlId: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
