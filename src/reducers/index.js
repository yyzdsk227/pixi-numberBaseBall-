import { findAllByAltText } from "@testing-library/react";
import { combineReducers } from "redux";
import { mlbHittedSaga, mlbHomerunSaga, mlbResultrunSaga } from "../action";

import bunReducer from "./bunReducer";
import { all, call } from "redux-saga/effects";

const Reducer = combineReducers({
  bunReducer,
});

export function* rootSaga() {
  yield all([mlbHittedSaga(), call(mlbHomerunSaga), call(mlbResultrunSaga)]);
}

export default Reducer;
