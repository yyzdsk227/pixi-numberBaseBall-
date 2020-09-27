import { put, delay, takeLatest, takeEvery, call } from "redux-saga/effects";

export const BUNSTART = "BUNSTART";
export const BUNSTOP = "BUNSTOP";
export const BtnCtrl = "BtnCtrl";
export const MLBTRIES = "MLBTRIES";
export const MLBVALUE = "MLBVALUE";
export const MLBANSWER = "MLBANSWER";
export const MLBINIT = "MLBINIT";
export const MLBRESULT = "MLBRESULT";
export const MLBRUNRESULT = "MLBRUNRESULT";
export const MLBHITTED = "MLBHITTED";
export const MLBBALLED = "MLBBALLED";
export const MLBSTRIKED = "MLBSTRIKED";

export const MLBHOMERUNCHECK = "MLBHOMERUNCHECK";
export const MLBHITTEDCHECK = "MLBHITTEDCHECK";
export const MLBBALLEDCHECK = "MLBBALLEDCHECK";

export const bunStart = (
  rotation,
  step,
  delta,
  xlocat,
  name,
  speed,
  hitter_X
) => {
  return {
    type: "BUNSTART",
    rotation,
    step,
    delta,
    xlocat,
    name,
    speed,
    hitter_X,
  };
};
export const bunStop = () => {
  return {
    type: "BUNSTOP",
  };
};
export const btnCtrl = () => {
  return {
    type: "BtnCtrl",
  };
};

export const mlbTries = (tried, result) => {
  return {
    type: "MLBTRIES",
    tried,
    result,
  };
};

export const mlbValue = (mlbValue) => {
  return {
    type: "MLBVALUE",
    mlbValue,
  };
};

export const mlbAnswer = () => {
  return {
    type: "MLBANSWER",
  };
};

export const mlbInit = (newAnswer) => {
  return {
    type: "MLBINIT",
    newAnswer,
  };
};

export const mlbResult = (xlocat, result) => {
  return {
    type: "MLBRESULT",
    xlocat,
    result,
  };
};

export const mlbRunResult = (xlocat, result) => {
  return {
    type: "MLBRUNRESULT",
    xlocat,
    result,
  };
};

function* mlbResultCheckfor(action) {
  try {
    yield put(mlbResult(action.xlocat, action.result));
    yield delay(200);
    yield put(mlbResult(action.xlocat, ""));
  } catch (e) {}
}

export function* mlbResultrunSaga() {
  yield takeLatest(MLBRUNRESULT, mlbResultCheckfor);
}

export const mlbHomerunCheck = (tried, result, newAnswer) => {
  return {
    type: "MLBHOMERUNCHECK",
    tried,
    result,
    newAnswer,
  };
};

function* mlbHomerunCheckfor(action) {
  try {
    console.log(action);
    yield put(mlbTries(action.tried, action.result));
    yield delay(1500);
    yield put(mlbResult());
    yield delay(1500);
    yield put(btnCtrl());
    yield delay(30);
    yield put(mlbInit(action.newAnswer));
    yield delay(30);
    yield put(bunStop());
  } catch (e) {}
}

export function* mlbHomerunSaga() {
  yield takeLatest(MLBHOMERUNCHECK, mlbHomerunCheckfor);
}

export const mlbHitted = () => {
  return {
    type: "MLBHITTED",
  };
};

export const mlbHittedCheck = () => ({ type: MLBHITTEDCHECK });

function* mlbHittedCheckfor() {
  console.log("aa");
  yield delay(200);
  yield put(mlbHitted());
  yield delay(2000);
  yield put(mlbHitted());
}

export function* mlbHittedSaga() {
  yield takeEvery(MLBHITTEDCHECK, mlbHittedCheckfor);
}

export const mlbBalled = () => {
  return {
    type: "MLBBALLED",
  };
};

export const mlbStriked = () => {
  return {
    type: "MLBSTRIKED",
  };
};
