import React from 'react';
import Rows from './Rows.js';
import './Square.css';

export default function Square(props) {
  let row1Keys = Object.keys(props.row1)
  let row2Keys = Object.keys(props.row2)
  let row3Keys = Object.keys(props.row3)
  let row4Keys = Object.keys(props.row4)
  let row5Keys = Object.keys(props.row5)

  return (
    <div>
      <ul className="rows">
        {row1Keys.map((item, index) => <Rows  name={item} key={item} index={index} click={props.click}/>)}
      </ul>
      <ul className="rows">
        {row2Keys.map((item, index) => <Rows  name={item} key={item} index={index} click={props.click}/>)}
      </ul>
      <ul className="rows">
        {row3Keys.map((item, index) => <Rows  name={item} key={item} index={index} click={props.click}/>)}
      </ul>
      <ul className="rows">
        {row4Keys.map((item, index) => <Rows  name={item} key={item} index={index} click={props.click}/>)}
      </ul>
      <ul className="rows">
        {row5Keys.map((item, index) => <Rows  name={item} key={item} index={index} click={props.click}/>)}
      </ul>
    </div>
  )
}
