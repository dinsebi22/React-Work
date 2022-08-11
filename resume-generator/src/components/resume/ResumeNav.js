import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function ResumeNav() {
  const titleStyles = {
    fontSize: "2.0rem",
    fontWeight: 800,
  };

  return (
    <Navbar bg="light">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={titleStyles}>Resume Generator</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default ResumeNav;
