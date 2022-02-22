import React from "react";
import { Button, Card, Container, Row,Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Container>
        <h1>Demo2 on BootStrap Component</h1>
        <Row>
          <Col >
            <div style={{display:"flex",justifyContent:'space-between',  alignItems:"center",flexWrap:"wrap"}}>
              {data.map((each) => (
                <Card key={each.id} style={{ width: "18rem",marginTop:'20px' }}>
                  <Card.Img variant="top" src={each.image} />
                  <Card.Body>
                    <Card.Title>{each.name}</Card.Title>
                    <Card.Text>{each.species}</Card.Text>
                    <Button variant="primary" href={each.url} target="_blank">
                      More Info
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
