import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import signup from './signup';
import verify from './verify';
import forgot from './forgot';
import car from './cars';
import bike from './bike';
import motorbike from './motorbike';
import detailCategory from './detailCategory';
import filterVehicle from './filterVehicle';
import detailVehicle from './detailVehicle';
import addVehicle from './addVehicle';
import myOrder from './myOrder';
import detailOrder from './detailOrder';
import paymentForm from './paymentForm';
import transactionCode from './transactionCode';
import addHistory from './addHistory';
import histories from './histories';
import profile from './profile';
import deleteHistory from './deleteHistory';
import updateProfile from './updateProfile';
import favorite from './favorite';
import updateVehicle from './updateVehicle';
import deleteVehicle from './deleteVehicle';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistFav = {
  key: 'favorite',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistConfig, auth),
  signup,
  verify,
  forgot,
  car,
  bike,
  motorbike,
  detailCategory,
  filterVehicle,
  myOrder,
  detailVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  detailOrder,
  paymentForm,
  transactionCode,
  addHistory,
  histories,
  deleteHistory,
  profile,
  updateProfile,
  favorite: persistReducer(persistFav, favorite),
});

export default rootReducers;