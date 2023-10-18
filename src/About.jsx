import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavScrollExample from "./components/NavScrollExample";
const About = () => {
  return (
    <>
      <NavScrollExample></NavScrollExample>
      <div className="vh-100">
        <div className="d-flex justify-content-center mt-5">
          <h1 className="h1">OUR TEAM</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/4ghKsvw/IMG-20221231-113618.jpg"
                />
                <Card.Body>
                  <Card.Title>Chirag Lokhande</Card.Title>
                  <Card.Text>
                    B-3 <br />
                    Roll-No:49
                  </Card.Text>
                  <Button variant="primary">Contact</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/WypT6wt/vivek.jpg"
                />
                <Card.Body>
                  <Card.Title>Vivek Billa</Card.Title>
                  <Card.Text>
                    B-3 <br />
                    Roll-No:51
                  </Card.Text>
                  <Button variant="primary">Contact</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/mqshL3k/IMG-20221231-114123.jpg"
                />
                <Card.Body>
                  <Card.Title>Aditya Ghamat</Card.Title>
                  <Card.Text>
                    B-3 <br />
                    Roll-No:59
                  </Card.Text>
                  <Button variant="primary">Contact</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
