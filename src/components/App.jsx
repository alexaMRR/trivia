import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  return ( <div className="app"> Trivia! 
  <Question text = "Questions goes here" />

  </div>
  
)
} 
function Question(props) {
  let text = props.text

}

export default App;
