import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./MonCompte.css";

const MonCompte = () => {
  return (
    <Container fluid className="account">
    
      <Row>
        <Col lg={12}>
          <img className="profil" src="./images/profil.png" alt="moncompte" />
        </Col>
        </Row>

        <Row>
        <Col lg={6}>
          <img className="graph1" src="./images/graph1.png" alt="moncompte" />
        </Col>
        <Col lg={6}>
          <img className="graph2" src="./images/graph2.png" alt="moncompte" />
        </Col>
        </Row>

        <Row>
        <Col lg={12}>
          <img className="graph3" src="./images/graph3.png" alt="moncompte" />
        </Col>
      </Row>
    </Container>

  );
};

export default MonCompte;
