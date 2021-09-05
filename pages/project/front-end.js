import Head from 'next/head'
import ProjectList from '../components/ProjectList';

export default function ProjectsFrontEnd() {


  return (
    <div>
      <Head>
        <title>前端 | Owen Sun</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ProjectList
        icon="/icons/code.svg"
        title="前端"
        projectType="front-end"
      />

    </div>
  )
}
