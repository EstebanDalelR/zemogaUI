import { NextPage } from 'next';
import Layout from '../components/layout'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <section id="homeMainVote">
      MainPic
      MainCard
    </section>
    <section id="homeSecondaryVotes">
      <div className="voteCardsHolder">
        Card
        Card
        Card
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
