import { useState } from "react"

function VoteButtons(props) {
  let [selected, changeSelected] = useState(0)
  return (
    <div className="voteButtons">
      <style jsx>{`
        .voteButtons{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50%;
        }
        .voteNegative > img {
          transform: rotate(180deg);
        }
        button > img{
          height: 1em;
          width: 1em;
          max-width: 2em;
        }
        .castVote{
          background: none;
          border: solid white;
          color: white;
          height: 2rem;
          padding: 2%;
        }
        .votePositive {
          width: 2rem;
          height: 2rem;
          border: none;
          background-color: LightSeaGreen;
        }
        .voteNegative {
          width: 2rem;
          height: 2rem;
          border: none;
          background-color: DarkOrange;
        }
        .selected {
          border: solid white;
        }
        `}
      </style>
      <button className={`votePositive ${selected === 1 ? "selected" : null}`}
        onClick={() => changeSelected(1)}
      >
        <img src={"/thumb.png"} />
      </button>
      <button className={`voteNegative ${selected === -1 ? "selected" : null}`}
        onClick={() => changeSelected(-1)}
      >
        <img src={"/thumb.png"} />
      </button>
      <button
        className="castVote"
        onClick={() => props.castVote()}
      >
        Vote now
        </button>
    </div>
  )
}
function VoteAgain(props) {
  return (
    <>
      <style jsx>{`
        .voteAgain{
          background: none;
          border: solid white;
          color: white;
          padding: 1%;
        }
        `}
      </style>
      <button
        className="voteAgain"
        onClick={() => props.voteAgain()}
      >
        Vote again
        </button>
    </>
  )
}
export default function VoteButton(props) {
  return (
    <>
      <style jsx>{`
          .voteButton{
            height: 20%;
          }
        `}
      </style>
      <div className='voteButton'>
        {props.hasVoted
          ? <VoteAgain voteAgain={props.changeVote} />
          : <VoteButtons castVote={props.changeVote} />
        }
      </div>
    </>
  )
}