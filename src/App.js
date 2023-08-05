import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// Importing React router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      /*setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);*/
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/*<Navbar/>*/}
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About />} />
          
          <Route path="/"
          element={<TextForm showAlert={showAlert} heading="Enter your Thoughts to analyze" mode={mode}/>}/>
  
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
