// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from './components/About';
function App() {
  const [alert, setalert] = useState(null);


const showAlert = (message,type) => {
  setalert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setalert(null); 
  }, 1500);
}


  const [mode, setMode] = useState('light');
const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.title = 'TextUtils - Dark Mode';
      setTimeout(() => {
      document.title = 'TextUtils';
        
      }, 3000);
      document.body.style.backgroundColor = '#212521'
      showAlert('Dark Mode Has Been Enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Has Been Enabled','success');
      document.title = 'TextUtils - Light Mode';
      setTimeout(() => {
      document.title = 'TextUtils';
        
      }, 3000);
    }
}












  
  return (

<>
<Router>
<Navbar title="Textutil" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

{/* 
<Switch>
    <Route path="/">
  <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
    </Route>
    <Route path="/about">
  <Aboutus/>
    </Route>
</Switch> */}

<Routes>
    <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
    <Route exact path='/about' element={<Aboutus/>}/>
</Routes>

</div>


</Router>
</>

    );
}

export default App;
