import React, { useContext, useState, useEffect } from "react";
import stateContext from "./stateContext";
import { useSelector, useDispatch } from "react-redux";
import { btnCtrl } from "./action";

const NumberMLB = () => {
  //console.log(useSelector((state) => state.bunReducer));

  const dispatch = useDispatch();

  return (
    <>
      <a href="/">numberbebe</a>
      <button onClick={onControl}>hello</button>
    </>
  );

  function onReset() {
    window.location.href("/");
  }

  function onControl() {
    dispatch(btnCtrl());
  }
};
export default NumberMLB;
