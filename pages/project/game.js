import Head from 'next/head'
import ProjectList from '../components/ProjectList';

export default function ProjectsFrontEnd() {


  return (
    <div>
      <Head>
        <title>遊戲 | Owen Sun</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

        <ProjectList
          icon="/icons/box.svg"
          title="遊戲"
          projectType="game"
        />
        
    </div>
  )
}
