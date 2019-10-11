import React, { Component } from 'react';
import Square from './Square'
import Reset from './Reset'
import './App.css'

class App extends Component {
  static defaultProps = {
  }
  state = {
    squares: {
      row1: {
        '1a': {id: '1a'},
        '1b': {id: '1b'},
        '1c': {id: '1c'},
        '1d': {id: '1d'},
        '1e': {id: '1e'}
      },
      row2: {
        '2a': {id: '2a'},
        '2b': {id: '2b'},
        '2c': {id: '2c'},
        '2d': {id: '2d'},
        '2e': {id: '2e'}
      },
      row3: {
        '3a': {id: '3a'},
        '3b': {id: '3b'},
        '3c': {id: '3c'},
        '3d': {id: '3d'},
        '3e': {id: '3e'}
      },
      row4: {
        '4a': {id: '4a'},
        '4b': {id: '4b'},
        '4c': {id: '4c'},
        '4d': {id: '4d'},
        '4e': {id: '4e'}
      },
      row5: {
        '5a': {id: '5a'},
        '5b': {id: '5b'},
        '5c': {id: '5c'},
        '5d': {id: '5d'},
        '5e': {id: '5e'}
      }
    },
    target: {id: '1a'},
    displayStatus: true,
    clicks: 0,
    finds: 0,
    bestScore: null,
    resetMessage: <main>
    <h1>CLicKy-fINdY</h1>
    <h2>YOU FOUND IT!</h2>
    <h3>Ha ha HA ha HA ha!</h3>
    <h4>Wow!</h4>
    <Reset click={this.handleReset}/>
  </main>
  }
  
  targetSet = () => {
    let changingTarget
    let allArrays = this.state.squares
    let keys = Object.keys(allArrays)
    changingTarget = allArrays[keys[ keys.length * Math.random() << 0]]
    keys = Object.keys(changingTarget)
    changingTarget = changingTarget[keys[ keys.length * Math.random() << 0]]
    this.setState({
        target: changingTarget
    })
  }

  handleClick = (id) => {
    
    let clickCount = this.state.clicks + 1
    let findCount = this.state.finds
    this.setState({
      clicks: clickCount
    })
    if(id === this.state.target.id) {
      this.setState({
        displayStatus: false,
        finds: findCount + 1
      })
      if(!this.state.bestScore)
      {
        this.setState({
          bestScore: clickCount
        })
      }
      else if(this.state.bestScore > clickCount)
      {
        this.setState({
          bestScore: clickCount
        })
      }
    }
    else{
    }
    console.log(clickCount)
    console.log(this.state.finds)
    console.log(this.state.bestScore)
  }

  handleReset = () => {
    this.targetSet()
    this.setState({
      displayStatus: true,
      clicks: 0
    })
  }

  componentDidMount() {
    this.targetSet()
  }

  render() {
    if(this.state.displayStatus === true){
    return (
      <main className='App'>
        <h1>CLicKy-fINdY</h1>
        <h2 className='score'>CLicKys: {this.state.clicks}</h2>
        <h2 className='score'>fINdYs: {this.state.finds}</h2>
        {!this.state.bestScore ? '' : <h2 className='score'>BEsT ScORe: {this.state.bestScore}</h2>}
        <Square 
        target={this.state.target} 
        row1={this.state.squares.row1}
        row2={this.state.squares.row2}
        row3={this.state.squares.row3}
        row4={this.state.squares.row4}
        row5={this.state.squares.row5}
        click={this.handleClick}
        />
      </main>
    )
    }
    else{
      return (
        <main>
          <h1>CLicKy-fINdY</h1>
          <h2>YOU FOUND IT!</h2>
          <h3>Ha ha HA ha HA ha!</h3>
          <h4>Wow!</h4>
          <Reset click={this.handleReset}/>
        </main>
      )
    }
  }
}
export default App;
