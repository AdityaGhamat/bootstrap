import "./Landing.css";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="heading">Welcome to MedEase</h1>
        <Button as={Link} to="/Home">
          Start
        </Button>
      </div>
    </div>
  );
};

export default Landing;
