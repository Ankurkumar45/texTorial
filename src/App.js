import Navbar from './componants/Navbar';
import './App.css';
import TextForm from './componants/TextForm';
import About from './componants/About';
import React, { useState } from 'react';
import Alart from './componants/Alart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    // (mode == 'light') ? (setMode('dark')(document.body.style.backgroundColor = 'black')) : setMode('light');
    // (text == 'light') ? setText('dark') : setText('light');
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4a1570';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
        <Alart alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
