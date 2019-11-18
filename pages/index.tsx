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

  let changeVoteCount = (personIndex, value) => {
    if (value > 0) people[personIndex].votes.positive++
    if (value < 0) people[personIndex].votes.negative++
  }
  if (!hasFetched) {
    getPeople()
      .then(resp => {
        setPeople(resp.people)
        setFetched(true)
      })
      .catch(err => { console.log(err); return null })
  }
  return (
    <Layout>

      <section id="homeMainVote">
        MainPic
        MainCard
    </section>
      <section id="homeSecondaryVotes">
        <div className="voteCardsHolder">
          <ExplanationMessage />
          <VoteCardHolder people={people} changeVoteCount={changeVoteCount}></VoteCardHolder>
          Card
      </div>
      </section>
    </Layout>
  );
}

export default Home;
