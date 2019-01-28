import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ObjectInRoom from '../components/ObjectInRoom';
import { connect } from 'react-redux';
import '../components/MyRooms.css'  
import { roomClick } from '../actions'
import { bindActionCreators } from 'redux';



class MyRooms extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      roomName: this.props.roomList[0].name
     }
     this.handleRoomClick = this.handleRoomClick.bind(this);
  }

  handleRoomClick(idx){
    this.setState({
      roomName: this.props.roomList[idx].name,
    });
    this.props.roomClick(idx);  
  }

  render() { 
    return ( 
      <div className="MyRooms">
        <Row className="roomsRow">
          <Col sm="2" className="roomsSide">
            {this.props.roomList.map((room, index) => {
              return (
                <button key={room.id} type="button" className="room" onClick={() => this.handleRoomClick(index)} name={room.type}>
                  <img src={room.img} alt="room" width="50%" height="50%" />
                </button>
              );
            })}
          </Col>
          <Col className="text-center mt-5 mr-5">
            <h2 className="roomName">{this.state.roomName}</h2>
            <div className="objects">
              {this.props.roomObjects.sort(function(a, b){return b.consumption - a.consumption}).map(object => {
                return(
                  <ObjectInRoom
                    key={object.id}
                    img={object.img}
                    name={object.name}
                    type={object.type}
                    consumption={object.consumption}
                    description={object.description}
                  />
                )
              })}
            </div>        
          </Col>      
        </Row>
      </div>
     );
  }
}
 
function mstp(state) {
  return {
    roomList: state.roomList,
    roomObjects: state.roomObjects,
  }
}

function mdtp(dispatch){
  return bindActionCreators({
    roomClick
  }, dispatch)
}
 
export default connect(mstp, mdtp)(MyRooms);