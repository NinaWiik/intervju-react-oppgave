import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function InfectionControl() {
  return (
    <Container>
      <h1>ADMIN</h1>
      <h2>Smittesporede Personer</h2>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 1</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Herman Olsen
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 958 98 547
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost: </b>
                <a className="mailto" href="mailto:someone@yoursite.com">
                  herman@outlook.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 03.03.1988{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 2</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Christian Fjellingsen
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 858 69 +98
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost:</b>{" "}
                <a className="mailto" href="mailto:someone@yoursite.com">
                  Cfjellingsen@hotmail.no
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 06.01.1988{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 3</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Kari Norman
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 958 22 124
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost:</b>{" "}
                <a className="mailto" href="mailto:someone@yoursite.com">
                  KariNor@outlook.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 16.02.1992{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 4</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Frida von Albrech
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 874 54 135
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost:</b>{" "}
                <a className="mailto" href="mailto:someone@yoursite.com">
                  {" "}
                  friduzz@outlook.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 04.03.2001{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 5</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Annelise Bjørnestad
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 823 45 678
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost:</b>{" "}
                <a className="mailto" href="mailto:someone@yoursite.com">
                  {" "}
                  Annbjornestad@live.no
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 19.12.1994{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Person 6</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Fullt Navn:</b> Aksel Svindal
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Telefon:</b> 458 98 652
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Epost:</b>{" "}
                <a className="mailto" href="mailto:someone@yoursite.com">
                  {" "}
                  skiaksel@outlook.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Født:</b> 14.08.1997{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfectionControl;
