import { combineReducers } from 'redux';
import { roomObjects } from './roomObjects'
import { roomList } from './roomList';
import { roomClick } from '../actions';
import { badgesList } from './badgesList';
import { badgeModalToggle } from './badgeModalToggle';

const allReducers = combineReducers({
  roomObjects,
  roomList, 
  roomClick,
  badgesList,
  badgeModalToggle,
})

export default allReducers;