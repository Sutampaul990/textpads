import React from 'react'

export default function About(props) {

    /*const [myStyle,setmyStyle] = useState({
        color : 'black',
        backgroundColor: 'white'
    })*/

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor : props.mode==='dark'?'#042743':'white'
    }

    /*const [btnText,setBtnText]= useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color : 'black',
            backgroundColor: 'white',
            border: '1px solid white'
            })
            setBtnText("Enable Dark Mode")
        }
        else
        {
            setmyStyle({
                color : 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }*/
    

    

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-4">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>What is TextPads?</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first React Website created by me.</strong> Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. The Initial tools include HTML, JSON, SQL, and XML formatters, Base 64 and URL encoder/decoder, and many other tools to handle text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first React Website created by me.</strong> Free Use means a specific case in which people can use the work without permission according to the copyright limitation on the work. In this case, the user should comply with the specific legal conditions.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Platform Compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first React Website created by me.</strong> Browser Compatibility refers to the ability of a certain website or app to appear fully functional on different browsers that are available in the market. This means that your website's HTML coding, as well as the scripts on that website, should be compatible to run on all browsers your users might use.
                </div>
                </div>
            </div>
        </div>
        {/*<div className="container my-2">
        <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btnText}</button>
        </div>*/}
        
    </div>
  )
}
