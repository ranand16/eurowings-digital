import { call, put, takeLatest } from 'redux-saga/effects'
import { flightApi } from '../api/flight-api';
import { GET_FLIGHTS_FAILED, GET_FLIGHTS_REQUESTED, GET_FLIGHTS_SUCCESS } from '../types';

function* fetchFlights() {
   try {
      const flights = yield call(flightApi);
      yield put({type: GET_FLIGHTS_SUCCESS, flights: flights});
   } catch (e) {
      yield put({type: GET_FLIGHTS_FAILED, message: e.message});
   }
}

function* flightSaga() {
   yield takeLatest(GET_FLIGHTS_REQUESTED, fetchFlights);
}

export default flightSaga;