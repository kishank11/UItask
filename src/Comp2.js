
import { render } from "react-dom";
import Rnd from "react-rnd";

import React from 'react'

const style_2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

export default function Comp2() {
    return (
        <div>
            <Rnd
style={style_2}
default={{
  x: 10,
  y: 0,
  width: 110,
  height: 300
}}
>
skjanka
</Rnd>
        </div>
    )
}