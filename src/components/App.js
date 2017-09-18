import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import ItemDetails from './itemdetails/ItemDetails';


class App extends Component {
    render() {
        return (
          <div className="containerDiv">
            <Header />
            <ItemDetails />
          </div>
        );
    }
}

export default App;
