
export default function VoteCard(props) {
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
            Mark Zuck
          </h3>
          <p className="timeAndType">
            <span>1 month ago</span> on Entertaimnent
          </p>
          <p className="caseDescription">
            Tahnk you for voting
          </p>
          <button className="voteButton">
            vote again
          </button>
          <div className="voteResults">
            %  %
          </div>
        </div>
      </div>
    </>
  )
}