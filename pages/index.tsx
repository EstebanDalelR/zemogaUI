import { NextPage } from 'next';
import Layout from '../components/layout'
import ExplanationMessage from '../components/explanationMessage';
import VoteCard from '../components/voteCard';
import VoteCardHolder from '../components/voteCardHolder';

let peopleArray = [
  {
    name: "Kristina Kichner",
    time: "1 month",
    category: "Business",
    image: "/estebanDalel.jpg",
    votes: {
      positive: 1,
      negative: 2
    }
  },
  {
    name: "Mark Zuckerberg",
    time: "1 month",
    category: "Business",
    image: "/estebanDalel.jpg",
    votes: {
      positive: 1,
      negative: 2
    }
  },
  {
    name: "Malala Youzaif",
    time: "1 month",
    category: "Business",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shinz%C5%8D_Abe_and_Malala_Yousafzai_%281%29_Cropped.jpg/220px-Shinz%C5%8D_Abe_and_Malala_Yousafzai_%281%29_Cropped.jpg",
    votes: {
      positive: 1,
      negative: 2
    }
  }
]
let changeVoteCount = (personIndex, value) => {
  if (value > 0) peopleArray[personIndex].votes.positive++
  if (value < 0) peopleArray[personIndex].votes.negative++
}
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <section id="homeMainVote">
      MainPic
      MainCard
    </section>
    <section id="homeSecondaryVotes">
      <div className="voteCardsHolder">
        <ExplanationMessage />
        <VoteCardHolder people={peopleArray} changeVoteCount={changeVoteCount}></VoteCardHolder>
        Card
      </div>
    </section>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
