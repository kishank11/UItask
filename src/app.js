import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';

import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";



const App = () => (

  ReactDOM.render(
    <div>
      <Comp1/>
      <Comp2/>
      <Comp3/>
    </div>,
    document.getElementById('root'),
  )
)

render(<App />, document.getElementById("root"));
