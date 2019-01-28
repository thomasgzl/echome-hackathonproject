import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, CardBody, Card, CardTitle, } from 'reactstrap';
import DetailsHome from './DetailsHome';
import './MyHome.css';


const MyHome = (props) => (
  <div className="MyHome">
    <h2 className="title-h2-my-home">Ma maison</h2>
    <p>Consomation : 17 kWh</p>
    <p className="titleEnd">Empreinte carbone : 1.1t CO2/ mois</p>
    <Container>
      <Row>
        {props.roomList.map(room => {
          return (
              <Col md="4">
                <DetailsHome name={room.name} consumption={room.consumption} type={room.type} classColor={room.classColor}/>
              </Col>
          )
        })}
      </Row>
      <Row className="row-ajouter">
        <Col md="4">
          <Card className="card-ajouter">
            <CardBody className="card-body-ajouter">
              <CardTitle className="title-card-ajouter">Ajouter une pièce</CardTitle>
            </CardBody>          
            <img className="img-ajouter" width="40%" src="../images/ajouter.png" alt="pictogram rooms" />
          </Card >
        </Col>
      </Row>
    </Container>
  </div>
)

function mstp(state) {
  return{
    objectsList: state.objectsList,
    roomList: state.roomList,
  }
}
 
export default connect(mstp)(MyHome);