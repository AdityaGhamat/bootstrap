import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import data from "./medicines.json";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function NavScrollExample() {
  const [value, setValue] = useState("");
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [location, setLocation] = useState("Location");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };
  const showLocation = () => {
    setLocation("Nerul, 400706");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="h1">
            MedEase
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About Us
              </Nav.Link>
              <NavDropdown title="Get On" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <li className="location" onClick={showLocation}>
                    {location}
                  </li>
                </NavDropdown.Item>
                <NavDropdown.Item href="./maps2.html">Map</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <li>
                  {isAuthenticated ? (
                    <li>
                      <Button
                        className="btn btn-danger btn-sm"
                        variant="Success"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log out
                      </Button>
                    </li>
                  ) : (
                    <li>
                      <Button
                        className="btn mb-2 btn-sm"
                        variant="primary"
                        onClick={() => loginWithRedirect()}
                      >
                        Log In
                      </Button>
                    </li>
                  )}
                </li>
              </Nav.Link>
              <li>
                {isAuthenticated && <p className="user">Hello,{user.name}</p>}
              </li>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={value}
                onChange={onChange}
              />
              <Button variant="outline-success" onClick={() => onSearch(value)}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="search-results">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.name.toLowerCase();
            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .map((item, index) => (
            <div
              className="overflow-auto cursor-pointer py-2 px-4 mb-2 bg-gray-100 rounded"
              onClick={() => onSearch(item.name)}
              key={index}
            >
              {item.name}
            </div>
          ))}
      </div>
      <div className="row text-center display:flex gap-3 mt-3 overflow-hidden">
        {data
          .filter((val) => {
            if (value == "") {
              return val;
            } else if (val.name.toLowerCase().includes(value.toLowerCase())) {
              return val;
            }
          })
          .map((val) => {
            return (
              <Card style={{ width: "18rem" }} key={val.index}>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>{val.info}</Card.Text>
                 <Link to={val.info}>
                  <Button href="" variant="primary">
                    Go somewhere
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default NavScrollExample;
