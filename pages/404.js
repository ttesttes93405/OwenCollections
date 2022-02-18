import Head from 'next/head';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

export default function ProjectPage(props) {

  return (
    <>
      <Head>
        <title>Owen Sun</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <div>

        <div className='messagebox'>
          <h1>404</h1>
          <p>找不到這個頁面</p>

        </div>

        <ProjectList
          icon="/icons/notebook.svg"
          title="其他專案"
          projectType={["front-end", "game"]}
          view="bar"
          target="/project"
        />

      </div>

      <style jsx>{`

      .messagebox {
        text-align: center;
        padding: 50px 0 80px;
        margin: 50px 0 150px;
        background-color: #f8f8f8;
        border-radius: 16px;
      }

      .messagebox h1 {
        font-size: 5rem;
        margin: 20px 0;
        padding: 0;
      }
      
      .messagebox p {
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        color: #666;
      }

      @media (min-width: 576px){

        .project-container {
          width: 100%;
        }

      }

      `}</style>

    </>
  )
}
