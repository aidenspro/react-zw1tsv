import React, { useState, useEffect, useRef, createRef } from 'react';
import './style.css';

export default function Motions(props) {

  const [output, setOutput] = useState("➧");

  const addInputs = (motion) => {
    var currentInputs = (output);
    currentInputs += motion;
    setOutput(currentInputs)
  }
  return (
    <div>
      <div>
      <div className="motionoptions">
        <div className="qcf" onClick={() => addInputs(" 236") }> </div>
        <div className="qcb" onClick={() => addInputs(" 214") }> </div>
        <div className="hcf" onClick={() => addInputs(" 426") }> </div>
        <div className="hcb" onClick={() => addInputs(" 624") }> </div>
        <div className="srk" onClick={() => addInputs(" 623") }> </div>
        <div className="arcsys" onClick={() => addInputs(" 6246") } > </div>
      </div>
      <div className="buttonoptions">
        <div className="punch" onClick={() => addInputs("P ") } > </div>
        <div className="kick" onClick={() => addInputs("K ") } > </div>
        <div className="slash" onClick={() => addInputs("S ") } > </div>
        <div className="hslash" onClick={() => addInputs("HS ") } > </div>
        <div className="dust" onClick={() => addInputs("D ") } > </div>
      </div>

      <div className="otheroptions">
        <div className="cancel" onClick={() => addInputs(" x ") } > </div>
        <div className="delay" onClick={() => addInputs(" (...) ") } > </div>
        <div className="link" onClick={() => addInputs(" → ") } > </div>
        
      </div>
      </div>
        
      <div className="output"> {output} </div>
    </div>
        )
}