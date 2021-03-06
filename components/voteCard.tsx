import VoteCardResults from "./voteCardResults"
import VoteButton from "./voteButton"
import { useState } from "react"

export default function VoteCard(props) {
  const [hasVoted, changeHasVoted] = useState(false)
  const changeVote = (value) => {
    if(props.changeVoteCount(props.id, value) === true){
      changeHasVoted(true)
    }
  }

  let { votes } = props
  let calcPercentages = (): { positive: number; negative: number; } => {
    let votesAmount = votes.votes
    let total = votesAmount.positive + votesAmount.negative
    return {
      positive: Math.trunc((votesAmount.positive / total) * 100),
      negative: Math.trunc((votesAmount.negative / total) * 100)
    }
  }
  let results = calcPercentages()
  return (
    <>
      <style jsx>{`
          .voteCard {
            min-height: 300px;
            background: center / 100% no-repeat url(${votes.image});
          }
          .voteCardImg {
            background-image: linear-gradient(rgba(0, 0, 0, 0.1) , rgba(0, 0, 0, 0.9));
            background-clip: border-box;
            width: auto;
            height: 100%;
          }
          .empty{
            height: 30%;
          }
          .cardInfo {
            margin-left: 2rem;
            color: white;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: stretch;
            margin-bottom: 5%;
          }
          h3{
            margin: 0;
            font-size: xx-large;
            font-weight: normal;
          }
          .cardText {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: stretch;
          }
          .nameAndVote{
            align-items: center;
            display: flex;
          }
          .totalVote{
            margin-left: -1.75rem;
            width: 1.5rem;
            height: 1.5rem;
            ${results.positive > results.negative ? null : "transform: rotate(180deg);"};
            background-color: ${results.positive > results.negative ? "LightSeaGreen" : "DarkOrange"}
          }
          .totalVote > img {
            width: 90%;
          }
          p > span {
            font-weight: bold;
          }
          p {
            margin: 0;
          }
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='voteCard'>
        <div className='voteCardImg'>
          <div className="empty" />
          <div className="cardInfo">
            <div className="cardText">
              <div className="nameAndVote">
                <div className="totalVote">
                  <img src={"/thumb.png"} />
                </div>
                <h3 className="personName">
                  {votes.name}
                </h3>
              </div>
              <p className="timeAndType">
                <span>{votes.time} ago</span> on {votes.category}
              </p>
              {hasVoted
                ? (
                  <p className="caseDescription">
                    Thank you for voting
              </p>
                )
                : (
                  <p className="caseDescription">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
                )
              }
            </div>
            <VoteButton hasVoted={hasVoted} changeVote={changeVote} />
          </div>
          <VoteCardResults results={results} />
        </div>
      </div>
    </>
  )
}