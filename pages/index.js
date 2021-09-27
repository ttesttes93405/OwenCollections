import Head from 'next/head'
import Intro from './components/Intro'
import ProjectList from './components/ProjectList';
import { introData, } from '../data';

function Home(props) {

  return (
    <div className="home">

      <Head>
        <title>Owen Sun</title>
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