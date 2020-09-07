export const BUNSTART = "BUNSTART";
export const BUNSTOP = "BUNSTOP";
export const BtnCtrl = "BtnCtrl";
export const MLBTRIES = "MLBTRIES";
export const MLBVALUE = "MLBVALUE";
export const MLBANSWER = "MLBANSWER";
export const MLBINIT = "MLBINIT";
export const MLBRESULT = "MLBRESULT";
export const MLBHITTED = "MLBHITTED";
export const MLBBALLED = "MLBBALLED";
export const MLBSTRIKED = "MLBSTRIKED";

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

export const mlbInit = () => {
  return {
    type: "MLBINIT",
  };
};

export const mlbResult = (xlocat, result) => {
  return {
    type: "MLBRESULT",
    xlocat,
    result,
  };
};

export const mlbHitted = () => {
  return {
    type: "MLBHITTED",
  };
};

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
