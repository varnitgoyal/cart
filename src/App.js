import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartManager from './components/containers/CartManager/CartManager'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>CART</h1>
   

   
      
      <CartManager/>
  
      </div>
    );
  }
}

export default App;
