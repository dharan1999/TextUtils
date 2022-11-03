import React,{useState} from 'react'

export default function TextForm(props) {
const [text,setText] = useState('Enter text here');
    const handleUpClick = (event) => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleChange = (event) => {  
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  </div>
  )
}
