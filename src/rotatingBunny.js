import React, { useContext, useEffect, useState, memo } from "react";

import { withApp } from "react-pixi-fiber";
import Bunny from "./bunny";
import stateContext from "./stateContext";
import { useSelector, useDispatch } from "react-redux";
import { bunStart, mlbResult } from "./action";
import { SimplePlane } from "pixi.js";

let abc;
// http://pixijs.io/examples/#/basics/basic.js
const RotatingBunny = memo((props) => {
  useEffect(() => {
    //if문절 주입가능 잠금장치해제(false, true등등)
    console.log(
      props.bunnyContext,
      props.name
      //   bunnys.rotation,
      //   props.speed,
      //   bunnys.locat,
    );
    props.bunnyContext.control === false
      ? props.app.ticker.remove(animate)
      : props.app.ticker.add(animate);

    return () => props.app.ticker.remove(animate);
  }, [props.bunnyContext.control]);

  // useEffect(() => {
  //   abc = 1642;
  // }, [props.bunnycontext.control]);

  const name = props.name;
  const step = props.step;
  const speed = props.speed;
  const hitter_X = props.x;
  let xlocat = props.bunnyContext.locat;
  const rotationrota = props.bunnyContext.rotation;
  //const delta = 0.08;

  console.log(props.bunnyContext.tries.find((v, i) => v.result === "홈런!"));

  const homeruntrue = props.bunnyContext.tries.find(
    (v, i) => v.result === "홈런!"
  );

  const animate = (delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    // setBunnys({
    //   // ...bunnys,
    //   rotation: (bunnys.rotation += props.step * delta),
    //   locat:
    //     props.name === "regular"
    //       ? bunnys.locat > 0
    //         ? (bunnys.locat += props.speed * delta)
    //         : (abc += props.speed * delta)
    //       : props.x,
    //   //바깥에 외부버튼 클릭으로 컨트롤
    //   control: bunnys.locat < 0 ? true : false,

    if (props.name === "regular") {
      xlocat += props.speed * delta;

      props.useDispatch(
        bunStart(rotationrota, step, delta, xlocat, name, speed, hitter_X)
      );
      if (homeruntrue) {
        async function homeruning() {
          await sleep(1500);
          xlocat -= props.speed * delta * 1.6;
          props.useDispatch(mlbResult(xlocat, 2));
        }
        homeruning();
      }
    } else {
      xlocat = hitter_X;
    }
  };

  console.log(xlocat, rotationrota, props.bunnyContext.result);

  //

  return (
    <Bunny
      {...props}
      x={props.name === "regular" ? xlocat : hitter_X}
      texture={
        props.name === "cool" && homeruntrue
          ? props.bunnyContext.result
          : props.texture
      }
      rotation={rotationrota}
    />
  );

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
});

export default withApp(RotatingBunny);
