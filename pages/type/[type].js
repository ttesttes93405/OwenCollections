import Head from 'next/head'
import ProjectList from '../components/ProjectList';
import Header from "../components/Header";
import { typeData } from '../../data';

export default function ProjectsFrontEnd(props) {

  const {
    id,
    title,
    icon,
  } = props;

  return (
    <>
      <Header />
      <div>
        <Head>
          <title>{title} | Owen Sun</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <ProjectList
          icon={icon}
          title={title}
          projectType={id}
        />

      </div>
    </>
  )
}


export function getStaticProps({ params }) {

  const data = typeData.find(e => e.id == params.type);

  return { props: { ...data } }
}

export function getStaticPaths() {

  const typePaths = typeData.map(p => `/type/${p.id}`);

  return {
    paths: typePaths,
    fallback: false,
  }
}