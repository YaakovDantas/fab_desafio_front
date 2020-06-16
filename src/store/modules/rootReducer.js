import { combineReducers } from 'redux';
import flights from './flights/reducer';
import locations from './locations/reducer';
import toast from './toast/reducer';

export default combineReducers({
  flights,
  locations,
  toast,
});
