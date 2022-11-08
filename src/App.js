import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return (
   <>
    <Navbar title="textutils2" aboutTextUtils="about1"/>
    <div className='container my-3'>
      {/* <TextForm heading="Enter the text to analyze to below"/> */}
      <About />
    </div>
      
   </>
  );
}

export default App;
