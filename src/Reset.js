import React from 'react';
import './Reset.css';

export default function Reset(props) {
  return (
      <button className="reset-button" onClick={() => props.click(props.click)}>AGAIN, AGAIN!</button>
  )
}
