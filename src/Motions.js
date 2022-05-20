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
        <div className="qcb"> </div>
        <div className="hcf"> </div>
        <div className="hcb"> </div>
        <div className="srk"> </div>
        <div className="arcsys"> </div>
      </div>
      <div className="motionoptions">
        
        <div className="punch"> </div>
        <div className="kick"> </div>
        <div className="slash"> </div>
        <div className="hslash"> </div>
        <div className="dust"> </div>
      </div>
      </div>
        
      <div className="output"> {output} </div>
    </div>
        )
}