import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

function NamedInput(props) {
  return (
    <InputGroup className="mb-2">
      <InputGroup.Text>{props.label}</InputGroup.Text>
      <Form.Control required type={props.type} onChange={props.onChange} />
      <Form.Control.Feedback type="invalid">
        Please enter a valid {props.label} .
      </Form.Control.Feedback>
    </InputGroup>
  );
}

NamedInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default NamedInput;
