import React, { useState } from 'react';
import About from './About';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearInput = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const aLtErNaTiNgcAsE = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            newText += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();
        }
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        console.log(`I'm Copy.`);
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to Clipboard!", "Success");
    }
    const handleExtraSpaces = () =>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "Success");
    }

    const [text, setText] = useState('');
    // text="new text"; wrong way to change the state
    // setText("new text"); correct way to change the state
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#723789' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="mybox" rows="8"></textarea><br />
                    {/* <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button> */}
                    {/* <button type="button" class="btn btn-outline-light" onClick={handleUpClick}>Convert To UpperCase</button> */}
                    <button type="button" class="btn btn-outline-info" onClick={handleUpClick}>UpperCase</button>
                    <button type="button" class="btn btn-outline-info mx-3 my-2" onClick={handleLowClick}>LowerCase</button>
                    <button type="button" class="btn btn-outline-info mx-3 my-2" onClick={aLtErNaTiNgcAsE}>aLtErNaTiNg</button>
                    <button type="button" class="btn btn-outline-info mx-3 my-2" onClick={clearInput}>Clear</button>
                    <button type="button" class="btn btn-outline-info mx-3 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                    {/* <button type="button" class="btn btn-outline-info mx-3 my-2" onClick={handleCopy}>CopyText</button> */}
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                {text.split(" ").filter((element) => { return element.length != 0 }).length} words and {text.length} characters
                <br />
                {0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length} Seconds
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter somthing in the textbox above to preview it here'}</p>
            </div>

            {/* <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                    The current button
                </button>
                <button type="button" class="list-group-item list-group-item-action">A second button item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
            </div> */}
            {/* <div>
                <About />
            </div> */}
        </>
    );
}
