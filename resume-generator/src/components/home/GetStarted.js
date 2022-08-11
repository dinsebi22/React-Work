import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function GetStarted() {
  const buttonStyles = {
    width: "50vw",
    height: "15vh",
    fontSize: "2rem",
  };

  const containerStyle = {
    width: "100%",
    height: "90vh",
    fontSize: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container>
      <Row>
        <Col style={containerStyle}>
          <Link to="/create">
            <Button style={buttonStyles} variant="danger">
              Get Started
            </Button>{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default GetStarted;
