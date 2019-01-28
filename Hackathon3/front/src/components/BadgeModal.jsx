import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const BadgeModal = () => (
  <div className="BadgeModal">
    <div className="insideBadgeModal">
      <h2>Badge name</h2>
      <p>La description de l'enfer</p>
      <img src="" alt="" />
      <div className="maxProgress">
        <div className="progress"></div>
      </div>
    </div>
  </div>
)

function mstp(state) {
  return{

  }
}

function mdtp(dispatch){
  return bindActionCreators({

  })
}
 
export default connect(mstp, mdtp)(BadgeModal);