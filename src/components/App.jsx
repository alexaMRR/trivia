import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let question = 0;
  const [answerDisplay, setAnswerDisplay] = useState(false);
  return (
    <div className="app">
      {" "}
      Trivia!
      <Question
        text={data[question].question.text}
        choices={data[question].question.choices}
      />
      <button>{useState(true)}</button>

      <NextQuestion />

    </div>
  );
}
function answerHandle {

}
function Question(props) {
  let text = props.text;
  const choices = props.choices;
  const answers = choices.map((choice) =>
  <Answer text={choice}/>)
  
  return (
    <div className="words">
      {" "}
      {props.text}
      {answers}
    </div>
  );
}
function NextQuestion(props) {
  return <button> Next Question </button>;
}
function Answer(props) {
  let answer = props.text;
  return <div className="words"> {props.text} </div>;
}
export default App;
