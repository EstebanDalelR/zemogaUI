import VoteCardResults from "./voteCardResults"
import VoteButton from "./voteButton"

export default function VoteCard(props) {
  let { votes } = props
  let calcPercentages = (): { positive: number; negative: number; } => {
    let  votesAmount  = votes.votes
    let total = votesAmount.positive + votesAmount.negative
    return {
      positive: Math.trunc((votesAmount.positive / total)*100),
      negative: Math.trunc((votesAmount.negative / total)*100)
    }
  }
  let results = calcPercentages()
  return (
    <>
      <style jsx>{`
          .voteCard {
            background: center / 100% no-repeat url(/estebanDalel.jpg);
            background-clip: border-box;
            width: auto;
            height: 100%;
          }
          .cardInfo {
            background-image: linear-gradient(rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.4));
            color: white;
            height: 50%;
          }
          .voteButton{
            border: solid white;
            background: none;
            color: white;
          }
          p > span {
            font-weight: bold;
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
        <div className="cardInfo">
          <h3 className="personName">
            {votes.name}
          </h3>
          <p className="timeAndType">
            <span>{votes.time} ago</span> on {votes.category}
          </p>
          <p className="caseDescription">
            Tahnk you for voting
          </p>
          <VoteButton />
            <VoteCardResults results={results}/>
        </div>
      </div>
    </>
  )
}