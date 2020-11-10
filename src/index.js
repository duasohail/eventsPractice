import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './components/RegistrationForm';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';

ReactDOM.render(
  <div className="bg-dark m-0 p-1 justify-content-center align-items-center" style={{height:'100vh', display:"flex"}}>
    <div className="container w-25 bg-dark"  >
      < RegistrationForm/>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
