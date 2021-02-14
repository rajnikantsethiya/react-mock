import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin" : "",
          "Allow": "GET",
          "Content-type": "Application/json",
      }
  };
    const test = axios({
      method: 'GET',
      url: 'http://localhost:8080'
    }).then(function (response) {
      console.log(response);
    });
    return test;
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
