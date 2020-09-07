import React from "react";
import PropTypes from "prop-types";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

import bballJSON from "./bball.json";
import bballPNG from "./bball.png";

const centerAnchor = new PIXI.Point(0.5, 0.5);

const bunnyTextures = new PIXI.Texture.from(bballPNG);
const textures = [
  new PIXI.Texture(bunnyTextures.baseTexture, new PIXI.Rectangle(0, 0, 18, 18)),
  new PIXI.Texture(
    bunnyTextures.baseTexture,
    new PIXI.Rectangle(18, 0, 174, 174)
  ),
  new PIXI.Texture(
    bunnyTextures.baseTexture,
    new PIXI.Rectangle(192, 0, 174, 174)
  ),
];

function Bunny(props) {
  console.log(props);
  const texture = textures[props.texture];

  const Component = props.as;
  return <Component anchor={centerAnchor} {...props} texture={texture} />;
}

Bunny.defaultProps = {
  as: Sprite,
  texture: 0,
};

export default Bunny;
