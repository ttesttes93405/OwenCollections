import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import { introData, } from '../data';
import HeadMeta from './components/HeadMeta';

function Home(props) {

  return (
    <>
      <Header onlyShowWhenTop={true} />
      <div className="home">

        <HeadMeta />

        <Head>
          <title>Owen Sun</title>
          <meta property="og:title" content="Owen Sun" />
          <link rel="icon" href="/favicon.png" />
        </Head>


        <Intro {...props.introData} />

        <ProjectList
          icon="/icons/code.svg"
          title="前端"
          projectType="front-end"
        />

        <ProjectList
          icon="/icons/box.svg"
          title="遊戲"
          projectType="game"
        />

      </div>
    </>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
      introData,
    },
  }
}

export default Home;