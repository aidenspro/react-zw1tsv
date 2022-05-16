import React from 'react';
import './style.css';
import Tabs from './Tabs';
import Motions from './Motions';

export default function App() {
  return (
    <div>
      <h1 className="header">Fighting Game Notation Editor</h1>
      <Tabs />
      <Motions />
    </div>
  );
}
