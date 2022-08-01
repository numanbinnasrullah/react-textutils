// import AboutUs from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alertmsg, setAlertMsg] = useState(null);

  const ToogleMode = () => {
    if(mode === 'dark'){
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode Enable Successfully", "success");
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = '#110837';
      ShowAlert("Dark Mode Enable Successfully", "success");
    }
  }

  const ShowAlert = (message,type) => {
    setAlertMsg({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertMsg(null)
    }, 3000);
  }
  return (
    <>
    <Navbar title="TextConvertex" mode={mode} toogleMode={ToogleMode} modeText = {modeText}  />
    <Alert alert={alertmsg}/>
    <TextForm mode={mode} showAlert={ShowAlert}/>
    {/* <AboutUs /> */}
    </>
  );
}

export default App;
