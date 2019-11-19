import { NextPage } from 'next';
import Layout from '../components/layout'
import ExplanationMessage from '../components/explanationMessage';
import VoteCard from '../components/voteCard';
import VoteCardHolder from '../components/voteCardHolder';
import { useState } from "react"
const Home: NextPage = () => {
  let [people, setPeople] = useState([])
  let [hasFetched, setFetched] = useState(false)
  async function getPeople() {
    let response = await fetch("/api/db")
    const myJson = await response.json();
    return myJson
  }
  async function sendPersonVote(index, value) {
    if(checkLogged()){
    if (value > 0) people[index].votes.positive++
    if (value < 0) people[index].votes.negative++
    let data = {
      "id": people[index].id,
      "fields": {
        "Positive": people[index].votes.positive,
        "Negative": people[index].votes.negative
      }
    }
    let resp = await fetch(
      "/api/changeVote",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    console.log(resp)
    updatePeople()
    return true
    } else {
      alert("You must be logged in to Vote")
      return false
    }
  }
  let changeVoteCount = (personIndex, value) => {
    return sendPersonVote(personIndex, value)
  }
  let updatePeople = () => {
    if (!hasFetched) {
      getPeople()
        .then(resp => {
          setPeople(resp.people)
          setFetched(true)
        })
        .catch(err => { console.log(err); return null })
    }
  }
  updatePeople()
  let checkLogged = () => {
    if (typeof window !== 'undefined') {
      if (localStorage) {
        return localStorage.getItem("userId")
      }
    }
/* Candidate for JS Optional Chaining, but experimental
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/
    return false
  }
  return (
    <Layout>
      <section id="homeMainVote">
        MainPic
        MainCard
      </section>
      <ExplanationMessage />
      <section id="homeSecondaryVotes">
        <h1>
          Vote
        </h1>
        <div className="voteCardsHolder">
          <VoteCardHolder
            people={people}
            changeVoteCount={changeVoteCount}
          />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
