import React,{useState} from 'react'

export default function TextForm(props) {
const [text,setText] = useState('Enter text here');
const [vowel,setVowel] = useState(0);
    const handleUpClick = (event) => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = (event) => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleToggleClick = (event) => {
        if(text === text.toUpperCase()){
        let newText = text.toLowerCase()
        setText(newText)
        }
        if(text === text.toLowerCase()) {
        let newText = text.toUpperCase()
        setText(newText) 
        }
        
    }

    const handleVowelClick = (event) => {
        
       let newCount = 0
        for(let c of text){
            if(c === 'a' || c === 'e' || c === 'i' || c === 'o'|| c === 'u') {
                newCount++;
            }
        } 
        setVowel(newCount)
       
    }
    const handleChange = (event) => {  
        setText(event.target.value)
    }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleToggleClick}>Toggle the words</button>
        <button className="btn btn-primary mx-2" value = {vowel} onClick={handleVowelClick}>Count Vowels</button>
    </div>
    <div className='container my-3'>
        <h1>
            Your text Summary
        </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>
        <h2>
            Preview
        </h2>
        <p>{text}</p>
        <p>{vowel} number of vowels in text and {text.length - vowel} consonants</p>

    </div>
  </>
  )
}
