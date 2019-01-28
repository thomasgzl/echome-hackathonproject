import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  Table,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import './Community.css';

const Community = props => {
  return (
    <Container className="community-wrap">
    <h2 className="com-title">Classement</h2>
      <Row className="row-community">
        <Col className="col-top1" lg={3}>
          <Card className="com-card-1">
            <CardImg
              top
              width="100%"
              src="../images/zven.png"
              alt="Card image cap"
            />
            <CardBody className="com-cardbody-1">
              <CardTitle><strong>1 er</strong></CardTitle>
              <CardSubtitle>Jill Smith</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={2}>
          <Card className="com-card-2">
            <CardImg
              top
              width="100%"
              src="../images/eve.png"
              alt="Card image cap"
            />
            <CardBody className="com-cardbody-2">
              <CardTitle><strong>2 ème</strong></CardTitle>
              <CardSubtitle>Eve Jackson</CardSubtitle>
            </CardBody>
          </Card>
          <Card className="com-card-3">
            <CardImg
              top
              width="100%"
              src="../images/thomas.png"
              alt="Card image cap"
            />
            <CardBody className="com-cardbody-3">
              <CardTitle><strong>3 ème</strong></CardTitle>
              <CardSubtitle>Thomas Gonzalez</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="com-table" lg={7}>
          <Table>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>kWh / mois</th>
                <th>Communauté</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>300</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>340</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Thomas</td>
                <td>Gonzalez</td>
                <td>360</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Steven</td>
                <td>Hansson</td>
                <td>380</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>James</td>
                <td>Bond</td>
                <td>400</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Jean</td>
                <td>Durand</td>
                <td>410</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Eva</td>
                <td>Svensson</td>
                <td>430</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
              <tr>
                <td>Hale</td>
                <td>Johnsson</td>
                <td>460</td>
                <td><Button className="bouton-classement" color="secondary">Contacter</Button></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="row-bouton-forum">
        <Col md={3}>
          <NavLink to="/forum"><Button color="success" className="forum-button-2" size="md">Forum</Button></NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Community;
