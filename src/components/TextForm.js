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

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" rows="10" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'?'white':'gray',color: props.mode=== 'dark'?'white':'black'}} placeholder="Enter your text here"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowererCase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClrClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words & <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").length} </b>Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Please write something on textarea to preview it."}</p>
        </div>
        </>
    );
}
