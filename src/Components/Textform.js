// import React from "react"
// import app from './app.js'
import React, { useState } from 'react'

export default function Textform(props) {
    function handleOnChange(event) {
        console.log("Im handling onchange")
        settext(event.target.value);
    }
    function handleupClick() {
        console.log('I am handling click' + text);
        const newtext = text.toUpperCase();
        settext(newtext);
        
        props.showAlert('Trasformed to UpperCase','succes')
        }
    function handlelowClick() {
        console.log('I am handling click' + text);
        const newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert('Trasformed to LowerCase','success')
    }
    function TextClear() {
        console.log('I am handling click' + text);
        const newtext = "";
        props.showAlert('Textbox Empty','warning')
        settext(newtext);
    }
    
    function HandleCopy() {
        
        navigator.clipboard.writeText(text)
        console.log('I am handling copy to Clipboard')
        props.showAlert('Copied to Clipboard','success')
    }

    const [text, settext] = useState('');
    // setText("I am the text");
    // const [index, setIndex] = useState(0);
    return (
        <div>
            <h1 className={ ` text-center text-${props.mode==='dark'?'white':'dark'}`} >{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control my-3 text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'white':'secondary'}`} value={text} onChange={handleOnChange} placeholder='Enter Your Text here' id="mybox" cols="30" rows="6"></textarea>
                <button className="btn btn-primary my-4 mx-3" onClick={handleupClick}>UpperCase</button>
                <button className="btn btn-primary my-4 mx-3" onClick={handlelowClick}>LowerCase</button>
                <button className="btn btn-primary my-4 mx-3" onClick={TextClear}>Clear-textbox</button>
                <button className="btn btn-danger my-4" onClick={HandleCopy}>Copy-to-clipboard</button>

            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * 60 * text.split(" ").length} second to read </p>



                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </div>

    )
}
