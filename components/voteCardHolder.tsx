import VoteCard from "./voteCard"

export default function VoteCardHolder(props) {
  return (
    <>
      <style jsx>{`
          .voteCardHolder {
            width: auto;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-gap: 2rem;
          }
        `}
      </style>
      <div className='voteCardHolder'>
        {props.people.length > 0
          ? props.people.map((person, index) =>
            <VoteCard votes={person} key={index} id={index} changeVoteCount={props.changeVoteCount} />
          )
          : null
          }
      </div>
    </>
  )
}