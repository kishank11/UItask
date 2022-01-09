
import { render } from "react-dom";
import Rnd from "react-rnd";

import React from 'react'

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

export default function Comp3() {
    return (
        <div>
            <Rnd
style={style}
default={{
  x: 300,
  y: -110,
  width: 320,
  height: 200
}}
>
ankak
</Rnd>
        </div>
    )
}