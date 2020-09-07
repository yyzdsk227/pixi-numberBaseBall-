import React, { useContext } from "react";
import { Container, Stage } from "react-pixi-fiber";
import RotatingBunny from "./rotatingBunny";
import { useSelector, useDispatch } from "react-redux";

const OPTIONS = {
  backgroundColor: 0x1099bb,
};
const ContainerBunny = () => {
  let taja;
  const bunnyContext = useSelector((state) => state.bunReducer);

  const propsDispatch = useDispatch();

  const homeruntrue = bunnyContext.tries.find((v, i) => v.result === "홈런!");

  if (homeruntrue) {
    setTimeout(() => {
      taja = 2;
    }, 1500);
  } else {
    taja = 1;
  }
  return (
    <>
      <Stage width={800} height={600} options={OPTIONS}>
        <Container ref={(c) => (window.example = c)}>
          <RotatingBunny
            x={400}
            y={300}
            texture={0}
            name="regular"
            step={0}
            speed={-6.9}
            bunnyContext={bunnyContext}
            useDispatch={propsDispatch}
          />
          <RotatingBunny
            x={100}
            y={300}
            texture={1}
            step={0}
            speed={0}
            name="cool"
            bunnyContext={bunnyContext}
            useDispatch={propsDispatch}
          />
        </Container>
      </Stage>
    </>
  );
};

export default ContainerBunny;
