// import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';
// import About from './Components/about';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

// import ReactDOM from "react-dom";
// import {
//   BrowserRouter,
//    // instead of "Switch"
//   Route, 
//   Routes,


// } from "react-router-dom";




function App() {
  const [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  const [mode, setmode] = useState('light');
  function togglemode() {
    if (mode === 'light') {
      setmode('dark')
      showAlert('Dark mode Activated', 'success')
      document.body.style.backgroundColor = '#052323';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode Activated', 'success')
    }

  }


    return (
      <>

        {/* <BrowserRouter> */}
            <Navbar title={'Select-TExt'} mode={mode} showAlert={showAlert} togglemode={togglemode}/>
            <Alert alert={alert} />
            <div className="container my-5" >
          {/* <Routes> */}
              {/* <Route exact path='/' */}
          {/* element={ */}
          <Textform heading={'Play with your TExt'} showAlert={showAlert} mode={mode} />
            {/* }
               /> */}

           
          {/* </Routes> */}
            </div>
        {/* </BrowserRouter> */}
      </>
    );
  }

  
















export default App;
