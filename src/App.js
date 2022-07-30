// import AboutUs from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const ToogleMode = () => {
    if(mode === 'dark'){
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = '#110837';
    }
  }
  return (
    <>
    <Navbar title="TextConvertex" mode={mode} toogleMode={ToogleMode} modeText = {modeText}/>
    <TextForm mode={mode}/>
    {/* <AboutUs /> */}
    </>
  );
}

export default App;
