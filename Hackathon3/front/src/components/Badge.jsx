import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imagePic: "../images/trophee1.png"
     }
  }

  componentDidMount(){
    switch (this.props.name) {
      case 'Noctambule': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee1unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee1.png"
        });
      break;
      case 'EcoStar': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee2unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee2.png"
        });
      break;
      case `Magicien d'Oz`: 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee3unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee3.png"
        });
      break;
      case 'Le Bon Samaritain': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee4unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee4.png"
        });
      break;
      case 'Offline': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee5unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee5.png"
        });
      break;
      case 'CarboCool': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee6unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee6.png"
        });
      break;
      case 'Le Sobre': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee7unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee7.png"
        });
      break;
      case 'ECO MASTER': 
        this.props.progress === 100 ?
        this.setState({
          imagePic: "../images/trophee8unlock.png"
        }) :
        this.setState({
          imagePic: "../images/trophee8.png"
        });
      break;
      default: 
       return this.state.imagePic;
    }
  }

  render() { 
    return ( 
      <div className="badge">
        <img width= "170px" src={this.state.imagePic} alt="badge icon" />
        <p>{this.props.name}</p>
      </div>
     );
  }
}
 
export default Badge;
