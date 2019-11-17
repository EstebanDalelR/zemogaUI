
export default function VoteCardResults(props) {
  let { results } = props
  return (
    <>
      <style jsx>{`
          .voteCardResults {
            display: flex;
            color: white;
          }
          .negative {
            width: ${results.negative}%;
            opacity: 0.6;
            background-color: DarkOrange;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: xx-large;
          }
          .negative > img {
            transform: rotate(180deg);
            width: 2em;
          }
          .positive {
            width: ${100 - results.negative}%;
            opacity: 0.6;            
            background-color: LightSeaGreen ;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .positive > img {
            width: 2em;
          }
          h3 > span {
            font-size: medium;
          }
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='voteCardResults'>
        <div className="positive">
          <img src={"/thumb.png"} />
          <h3>
            {results.positive}
            <span>
              %
            </span>
          </h3>
        </div>
        <div className="negative">
          <h3>
            {results.negative}
            <span>
              %
            </span>
          </h3>
          <img src={"/thumb.png"} />
        </div>
      </div>
    </>
  )
}