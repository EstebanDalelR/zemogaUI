import { useState } from "react"

export default function ExplanationMessage(props) {
  const [messageShown, changeMessageShown] = useState(true)
  return (
    <>
      <style jsx>{`
          .explanationMessage {
            display: ${messageShown ? "flex" : "none"};
            background-color: lightgrey;
            align-items: center;
            justify-content: center;
            padding: 1%;
          }
          h3 {
            font-weight: normal;
          }
          h3 > span{
            font-weight: bold;
            display: block;
            font-size: xx-large;
          }
          .messageMotto {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .messageText {
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .messageRemove {
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .messageRemove > button {
            background: none;
            border: none;
            font-size: x-large;
          }
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='explanationMessage'>
        <div className="messageMotto">
          <h3>
            Speak out. Be heard. 
            <span>Be counted</span>
          </h3>
        </div>
        <div className="messageText">
          <p>
            Rule of Thumb is a crow sourced court of public opinion where anyone and everyone can speak out and speak freely.
            It's easy: you share your opinion, and we analyze the data and put the data in a public report. 
          </p>
        </div>
        <div className="messageRemove">
          <button onClick={() => changeMessageShown(false)}>
            X
          </button>
        </div>
      </div>
    </>
  )
}