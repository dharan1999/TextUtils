import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import ShowItem from './components/ShowItem';
import './App.css';

import React,{ useState } from 'react';
import Alert1 from './components/Alert';
import {
  Routes,Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [red,setRed] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#3747a1"
      showAlert("Dark Mode has been enabled","success")
    }else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled","success")
    }
  }

  const changeRed = () => {
    if(red === 'light'){
      setRed('Red');
      document.body.style.backgroundColor = '#ff0000'
      showAlert("Red mode has been enabled","danger")
    }else {
      setRed('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
   <>
    <Navbar title="textutils2" mode = {mode} red = {red} changeRed = {changeRed} toggleMode = {toggleMode} aboutTextUtils="About" showItem = "shotItem"/>
     
        <Alert1 alert = {alert}></Alert1>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/" element={ <TextForm showAlert = {showAlert} heading="Enter the text to analyze to below" mode = {mode} />} />
        <Route exact path="about" element={<About />}/>
        <Route exact path="showitem" element={<ShowItem />}/>
      </Routes>
      </div>
      
   </>
  );
}

export default App;
