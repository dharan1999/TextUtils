import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//import About from './components/About';
import './App.css';

import React,{ useState } from 'react';
import Alert1 from './components/Alert';


function App() {
  const [mode,setMode] = useState('light');
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
  return (
   <>
    <Navbar title="textutils2" mode = {mode} toggleMode = {toggleMode} aboutTextUtils="about1"/>
      {/* <Alert alert = {alert} /> */}
        <Alert1 alert = {alert}></Alert1>
    <div className='container my-3'>
      <TextForm showAlert = {showAlert} heading="Enter the text to analyze to below" mode = {mode} />
      {/* <About /> */}
    </div>
      
   </>
  );
}

export default App;
