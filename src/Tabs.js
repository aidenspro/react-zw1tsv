import React, { useState, useEffect, useRef, createRef } from 'react';
import './style.css';

export default function tabs(props) {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  const [title, setTitle] = useState([]);

  const onClick = (num, title) => {
    setTitle(title);
    if (num == 0) {
      ref.current.className = 'active';
      ref1.current.className = 'tabheaders';
      ref2.current.className = 'tabheaders';
    } else if (num == 1) {
      ref.current.className = 'tabheaders';
      ref1.current.className = 'active';
      ref2.current.className = 'tabheaders';
    } else {
      ref.current.className = 'tabheaders';
      ref1.current.className = 'tabheaders';
      ref2.current.className = 'active';
    }
  };

  return (
    <div>
      <div className="buttonContainergrid">
        <button
          ref={ref}
          className="tabheaders"
          onClick={() => onClick(0, 'Tab1')}
        >
          Tab1
        </button>
        <button
          ref={ref1}
          className="tabheaders"
          onClick={() => onClick(1, 'Tab2')}
        >
          Tab2
        </button>
        <button
          ref={ref2}
          className="tabheaders"
          onClick={() => onClick(2, 'Tab3')}
        >
          Tab3
        </button>
      </div>
      <div className="buttonoptions">{title}
      <div className="qcf"> QCF </div>
      <div> QCF </div>
      </div>
    </div>
  );
}
