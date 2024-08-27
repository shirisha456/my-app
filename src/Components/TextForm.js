import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        /*console.log("Upper case was clicked"+text);*/
        let newText=text.toUpperCase()
        setText(newText);
    }
    const handleOnChange=(event)=>{
        /*console.log("On change");*/
        setText(event.target.value)
    }

    const handleLoClick=()=>{
        /*console.log("Upper case was clicked"+text);*/
        let newText=text.toLowerCase()
        setText(newText);
    }

    const handleClearClick=()=>{
        /*console.log("Upper case was clicked"+text);*/
        let newText=""
        setText(newText);
    }
    const [text, setText]= useState("");
  return (
    <>
    <div className="container">
    <h2>{props.heading}</h2>
        
<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower  case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      
    </div>
    <div className="container my-3"></div>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p> 
    <p>{0.008 * text.split(" ").length}</p> 
    <h3>Preview</h3>
    <p>{text}</p>
    </>
  )
}
