import React from "react";
import ContainerBunny from "./containerBunny";
import NumberMLB from "./numberMLB_start";
import stateContext from "./stateContext";
import { getNumbers } from "./createMLBnum";
import NumberMLBgame from "./numberMLBgame";

const initialState = {
  rotation: 0,
  locat: 1642,
  striked: false,
  balled: false,
  hitted: false,
  control: false,
};

export default function App() {
  return (
    <stateContext.Provider value={initialState}>
      {/* <NumberMLB /> */}
      <NumberMLBgame />
      <ContainerBunny />
    </stateContext.Provider>
  );
}
