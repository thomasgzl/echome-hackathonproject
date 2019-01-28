import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./DetailsHome.css";
import { Link } from 'react-router-dom';

class DetailsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/point1.jpg?itok=jGTH8XuS"
    }
  }

  componentDidMount(){
    switch (this.props.type) {
      case 'salon' :
        this.setState({
          imageSource: "../images/salon.png",
        });
      break;
      case 'cuisine' :
        this.setState({
          imageSource: "../images/cuisine.png",
        });
      break;
      case 'chambre' :
        this.setState({
          imageSource: "../images/chambre.png",
        });
      break;
      case 'salle de bain' :
        this.setState({
          imageSource: "../images/sdb.png",
        });
      break;
      default :
        return "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/point1.jpg?itok=jGTH8XuS"
    } 
  }

  render() {
    return (
      <div className="DetailsHome">
        <Link to="/mes-pieces">
          <Card className={`card-details-home ${this.props.classColor}`} >
            <CardBody className="card-body-details-home">
              <CardTitle className="title-card-details">{this.props.name}</CardTitle>
              <CardSubtitle>Consommation actuelle : {this.props.consumption}</CardSubtitle>
            </CardBody>          
            <img className="image-card-piece" width="100%" src={this.state.imageSource} alt="pictogram rooms" />
          </Card >
        </Link>
      </div >
    );
  }
}

export default DetailsHome;