import React from 'react';
import './App.css';
import backGround from "./img/overworld_bg.jpg";
import block from "./img/block.png"
import question from "./img/question.PNG";
import honguito from "./img/mushroom.png";
import flor from "./img/fire_flower.png";
import moneda from "./img/coin.png";
import mario from "./img/mario.png";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: block,
      positionX: 0,
      directionX: 'scaleX(1)',
      positionY: 27
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // componentDidUpdate() {
  //   document.removeEventListener("keydown", this.handleKeyDown);
  // }
  
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        this.setState(() => {
          return {
            image: honguito
          }
        });
        console.log('hola');
        break;
      case 1:
        this.setState(() => {
          return {
            image: flor
          }
        });
        console.log('hola');
        break;
      case 2:
        this.setState(() => {
          return {
            image: moneda
          }
        });
        console.log('hola');
        break;
      default:
        break;
    }
  }

  handleKeyDown = (e) => {
    console.log(e.key);
    
    switch (e.key) {
      case 'ArrowLeft':
        this.getPositionX(e.key)
        break;
      case 'ArrowRight':
        this.getPositionX(e.key)
        console.log(this.state.positionX)
        break;
      case ' ':
        this.getPositionY();
        if (this.state.positionX === 27.5 && this.state.positionY === 23) {
          this.handleClick();
        }
        setTimeout(() => this.setState(prevState => {
          return {
            positionY: prevState.positionY + 4
          }}), 300)
        break;
      default:
        console.log(e.key);
        break;
    }
  }

  getPositionX = (pressedKey) => {
    if (pressedKey === 'ArrowLeft') {
      this.setState((prevState) => {
        return {
          positionX: prevState.positionX ? prevState.positionX - 2.5 : prevState.positionX,
          directionX: 'scaleX(-1)'
        }
      });
    } else if (pressedKey === 'ArrowRight') {
      this.setState((prevState) => {
        return {
          positionX: prevState.positionX === 55 ? prevState.positionX : prevState.positionX + 2.5,
          directionX: 'scaleX(1)'
        }
      });
    } else {
      console.log(pressedKey)
    }
  }

  getPositionY = () => {
    this.setState((prevState) => {
      return {
        positionY: prevState.positionY - 4
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <img
            className="cajita"
            onClick={this.handleClick}
            src={question}
            alt="cajita"
          />
          <img className="item" src={this.state.image} alt="item" />
          <img src={backGround} alt="backGround" />
          <img 
            src={mario} 
            alt="mario" 
            className="mario" 
            style={{
              top: `${this.state.positionY}rem`,
              left: `${this.state.positionX}rem`,
              transform: `${this.state.directionX}`
            }}
          />
        </div>
      </div>
    )
  }
}


export default App;