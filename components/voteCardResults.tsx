
export default function VoteCardResults(props) {
  let { results } = props
  return (
    <>
      <style jsx>{`
          .voteCardResults {
            --selfHeight: 10%;
            display: flex;
            color: white;
            height: var(--selfHeight);
          }
          .negative {
            width: ${results.negative||50}%;
            opacity: 0.9;
            background-color: DarkOrange;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: xx-large;
          }
          .negative > img {
            transform: rotate(180deg);
            width: 1em;
            max-width: 2em;
          }
          .positive {
            width: ${100 - (results.negative||50)}%;
            opacity: 0.9;            
            background-color: LightSeaGreen ;
            display: flex;
            font-size: xx-large;
            align-items: center;
            justify-content: flex-start;
          }
          .positive > img {
            width: 1em;
            max-width: 2em;
          }
          h3 > span {
            font-size: medium;
          }
          h3 {
            margin: 0;
            padding-block: 5%;
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
            {results.positive||0}
            <span>
              %
            </span>
          </h3>
        </div>
        <div className="negative">
          <h3>
            {results.negative||0}
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