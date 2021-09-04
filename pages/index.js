import Head from 'next/head'
import Intro from './components/Intro'
import ProjectList from './components/ProjectList';
import { projects, introData, } from '../data';

export default function Home() {

  return (
    <div className="home">

      <Head>
        <title>OwenSun</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Intro {...introData} />

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
