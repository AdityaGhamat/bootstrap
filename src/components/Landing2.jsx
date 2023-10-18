import "./Landing2.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Landing2 = () => {
  return (
    <div className="main2 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
