import React from 'react';
import Spot from './Spot';
import './Rows.css';

export default function Rows(props) {
  return (
      <li className="row-items" key={props.index}><Spot name={props.name} index={props.index} click={props.click}/></li>
  )
}
