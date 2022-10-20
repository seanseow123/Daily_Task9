import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class App extends Component {

    SignUpForm = (suf) => {

        console.log(suf);

    }

    render() {
      return (
        <>
        <SignUpForm addData={this.addData} />
        </>
      )
    }
}

export default App;
