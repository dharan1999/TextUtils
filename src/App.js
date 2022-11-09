import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//import About from './components/About';
import './App.css';
import React,{ useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#3747a1"
    }else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
   <>
    <Navbar title="textutils2" mode = {mode} toggleMode = {toggleMode} aboutTextUtils="about1"/>
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyze to below" mode = {mode} />
      {/* <About /> */}
    </div>
      
   </>
  );
}

export default App;
