import VoteCard from "./voteCard"
import { useState } from "react"

export default function VoteCardHolder(props) {

  return (
    <>
      <style jsx>{`
          .voteCardHolder {
            width: auto;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
          }
        `}
      </style>
      <div className='voteCardHolder'>
        {props.people.map((person, index) =>
          <VoteCard votes={person} key={index} />
        )}
      </div>
    </>
  )
}