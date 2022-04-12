
import './Wheel.css';
import React from 'react';

export default class Wheel extends React.Component {
  state = {
    name: "circle start-rotate"
  }

  startRotate = () => {
    this.setState({
      name: "circle start-rotate"
    });
    
  }
  render() {
    
    return (
      <div>

        <ul className={this.state.name}>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Kocken 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Sjö&Land 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Grillbuffé 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="mdi:chef-hat" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Kocken 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="carbon:restaurant-fine" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Sjö&Land 
            </div>
          </li>
          <li>
            <div className="text"
            contenteditable="true"
            spellcheck="false">
              <span className="iconify" data-icon="ic:baseline-outdoor-grill" style={{fontSize: '5vh', color: "white"}}></span> <br/>  Grillbuffé 
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
