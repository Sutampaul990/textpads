import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpClick = ()=>{
        //console.log("Button is Clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = ()=>{
        //console.log("Button is Clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClrClick = ()=>{
        //console.log("Button is Clicked "+text);
        let newText = '';
        setText(newText);
        props.showAlert("Successfully cleared", "success");
    }

    const handleCopy = ()=>{
        //console.log("I am copy.");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" rows="10" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'?'white':'#13466e',color: props.mode=== 'dark'?'white':'black'}} placeholder="Enter your text here"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowererCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy All Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClrClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words & <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </b>Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Nothing to Preview."}</p>
        </div>
        </>
    );
}
