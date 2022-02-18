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
      `嗨，我是孫宇，從遊戲業轉往前端領域的開發者。`,
      ``,
      `在遊戲業時，我擔任程式從零開始建構一個遊戲，也有與美術和企劃溝通、制定相關規格的經驗。`,
      `遊戲開發期間也製作一個轉表工具，把複雜多層的資料填寫，變得可以用定義好的表格快速輕鬆的填寫。`,
      ``,
      `因為對於前端很有興趣，想透過實習學習前端工程師在實務上的各種眉角。`,
      `過去的程式開發經驗，能幫助我更快的理解前端開發的新知識，希望這些特質也能為你們帶來幫助。`,
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
          <title>孫宇 25sprout 作品集 | Owen Sun</title>
          <meta property="og:title" content="Owen Sun" />
          <link rel="icon" href="/favicon.png" />
        </Head>



        <Intro {...intro} />

        <ProjectList
          // icon="/icons/code.svg"
          // title="前端"
          projectType="25sprout"
          target="/25sprout"
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