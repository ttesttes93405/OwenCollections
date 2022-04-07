import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import { introData, } from '../data';
import HeadMeta from './components/HeadMeta';

const config = {
  title : '孫宇作品集',
  rootPath: '/nsdi-portfolio',
  target: '/nsdi',
  projectType: '25sprout',
};


function Home(props) {

  const intro = {
    ...props.introData,
    content: [
      `嗨，我是孫宇，從遊戲業轉往前端領域的開發者。`,
      ``,
      `在遊戲業時，我擔任程式從零開始建構一個遊戲，也有與美術和企劃溝通、制定相關規格的經驗。`,
      `遊戲開發期間也製作一個轉表工具，讓複雜多層的資料，可以用定義好的表格快速輕鬆的填寫。`,
      ``,
      `因為對於前端很有興趣，所以想轉往前端領域發展。`,
      `過去的程式開發經驗，能幫助我更快的理解前端開發的新知識，希望這些特質也能為你們帶來幫助。`,
    ],
    picture: '/Owen02.jpg',

  };


  return (
    <>
      <Header
        icon='/Owen02.jpg'
        alwaysShowTitle={false}
        rootPath={config.rootPath}
        isShowType={false}
      />

      <div className="home">

        <HeadMeta />

        <Head>
          <title>{config.title} | Owen Sun</title>
          <meta property="og:title" content="Owen Sun" />
          <link rel="icon" href="/favicon.png" />
        </Head>



        <Intro {...intro} />

        <ProjectList
          // icon="/icons/code.svg"
          // title="前端"
          projectType={config.projectType}
          target={config.target}
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