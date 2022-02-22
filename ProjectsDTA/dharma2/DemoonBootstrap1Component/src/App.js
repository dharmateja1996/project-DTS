import {
  Button,
  Alert,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Hello</h1>
        <p>Working on react-bootstrap-components</p>

        <br />
        <p>using Normal but styles are applied through bootstrap</p>
        <button className="btn btn-sm btn-primary">bootstrap Button</button>
        <br />
        <br />

        <h2>Buttons Component</h2>

        <Button className="btn-secondary">Various1</Button>
        <Button className="btn-danger"> Danger</Button>
        <Button variant="outline-success ">Success</Button>

        <br />
        <br />
        <h2>Alert Component</h2>
        <Alert variant="danger">Danger</Alert>
        <Alert variant="success">success</Alert>

        <h2>Form Component</h2>

        <Row>
          <Form>
            <Col>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@gmail.com" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter the Password"
                />
              </Form.Group>
            </Col>
            <br />
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
        <br />
        <h2>Card component</h2>
        <Card className="mb-3">
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card Text</Card.Title>
            <Card.Text>Card Text im using react bootstrap </Card.Text>
            <Button>Read More</Button>
          </Card.Body>
        </Card>


        
      </Container>
    </div>
  );
}

export default App;
