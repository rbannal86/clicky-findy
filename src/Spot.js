import React from 'react';
import './Spot.css'

export default function Spot(props) {
  return (
      <button className='target' onClick={() => props.click(props.name)} key={props.index} id={props.index}>?</button>
  )
}
