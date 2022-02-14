import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import { introData, } from '../data';
import HeadMeta from './components/HeadMeta';

function Home25Sprout(props) {

  const intro = {
    ...props.introData,
    content: [
      `我是孫宇，從遊戲業轉往前端領域的開發者。`,
      ``,
      `我喜歡四處看看各種新奇的東西，思考這些東西可以運用在哪些地方。`,
      `有相關知識基礎時，我能很快的學習新的東西，也很容易觸類旁通。`,
      `面對複雜或麻煩的事情，我會製作各種工具，來解決問題或改善工作流程。`,
      ``,
      `希望這些特質也能為你們帶來幫助。`,
    ],
    picture: '/Owen02.jpg',

  };


  return (
    <>
      <Header
        icon='/Owen02.jpg'
        alwaysShowTitle={false}
        rootPath={'/25sprout-portfolio'}
        isShowType={false}
      />

      <div className="home">

        <HeadMeta />

        <Head>
          <title>Owen Sun 25sprout portfolio</title>
          <meta property="og:title" content="Owen Sun" />
          <link rel="icon" href="/favicon.png" />
        </Head>



        <Intro {...intro} />

        <ProjectList
          // icon="/icons/code.svg"
          // title="前端"
          target="25sprout"
          projectType="25sprout"
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

export default Home25Sprout;