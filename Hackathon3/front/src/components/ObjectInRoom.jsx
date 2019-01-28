import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './Object.css';

class ObjectInRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectDivClass: 'hidden',
      switch: true,
      switchimg: "./images/switchon.png",
    }
    this.toggleInfos = this.toggleInfos.bind(this);
  }

  toggleInfos() {
    if (this.state.objectDivClass === 'hidden') {
      this.setState({
        objectDivClass: 'show',
      })
    } else {
      this.setState({
        objectDivClass: 'hidden',
      })
    }
  }

  switchOff() {
    if (this.state.switch === true) {
      this.setState({
        switch: false,
        switchimg: "./images/switchoff.png",
      })
    } else {
      this.setState({
        switch: true,
        switchimg: "./images/switchon.png",
      })
    }
  }

  render() {
    return (
      <div className="Object" >
        <Row className="objectRow mr-1 ml-0">
          <img src={this.props.img} alt="img" />
          <p><strong>Objet : </strong>{this.props.name}</p>
          <p><strong>Type : </strong>{this.props.type}</p>
          <p><strong>Consommation : </strong> {this.props.consumption} W</p>
          <button className="switch" onClick={() => this.switchOff()}>  <img src={this.state.switchimg} alt="Login" width="30%" height="30%" /> </button>
        </Row>
        <Row>
          <button className="moreDetail" onClick={() => this.toggleInfos()}><i class="fas fa-angle-down"></i></button>
        </Row>

        <div className={this.state.objectDivClass}>{this.props.description}</div>
      </div>
    );
  }
}

export default ObjectInRoom;