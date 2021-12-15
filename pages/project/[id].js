import Head from 'next/head'
import { projectData, } from '../../data';
import ProjectCover from "../components/ProjectCover";
import RichText from "../components/RichText";
import Header from "../components/Header";
import swatch from "../../styles/swatch";

export default function ProjectPage(props) {

  const {
    id,
    icon,
    title,
    subtitle,
    cover,
    content,
    links,
  } = props;

  return (
    <>
      <Header />
      <div className="project-container">
        <Head>
          <title>{title} | Owen Sun</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="m-no-round project">
          <div className="col">

            <div className="head">
              <img className="icon" src={icon} />
              <div className="col">
                <h2 className="title">{title}</h2>
                <p className="subtitle">{subtitle}</p>
              </div>
            </div>


            <RichText content={content} />

            {/* <ProjectCover cover={cover} />



            {content.split('\n').map(c => <p className="des" key={c}>{c}</p>)}

            <div className="btn-container">
              {
                links.map(m => (
                  <a href={m.link} className="link-btn" key={m.title} target="_blank" rel="noreferrer">
                    {m.icon ? <img src={m.icon} className="link-icon" /> : null}
                    <p className="link-title">{m.title}</p>
                  </a>
                ))
              }
            </div> */}

          </div>
        </div>

        {/* <style jsx global>{` */}
        <style jsx global>{`

        .rich-text p {
          font-size: 1.45rem;
          line-height: 2.4rem;
          color: #444;
          margin: 0 0 4px;
          padding: 0;
        }
        
        .rich-text h1 {
          font-size: 2.5rem;
          line-height: 3.5rem;
          color: #222;
          margin: 12px 0 8px;
          padding: 0;
        }
        
        .rich-text h2 {
          font-size: 2.25rem;
          line-height: 3.25rem;
          color: #222;
          margin: 12px 0 8px;
          padding: 0;
        }
        
        .rich-text h3 {
          font-size: 2.0rem;
          line-height: 3.0rem;
          color: #222;
          margin: 12px 0 8px;
          padding: 0;
        }

        .rich-text .space {
          height: 12px;
          display:inline-block;
        }

        .rich-text .btn {
          display: flex;
          padding: 8px;
          
          justify-content: center;
          align-content: center;
          margin: 8px 0;
        }

        .rich-text .btn p {
          font-size: 1.35rem;
          width: 140px;
          height: 48px;
          line-height: 48px;
          background-color: #eee;
          border-radius: 12px;
          text-align: center;
        }

        `}</style>

        <style jsx>{`

        .project-container {
          width: 100%;
        }

        .project {
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          padding: 24px 16px 48px;
          border-radius: 16px;
          
        }

        .icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          margin-right: 12px;
          box-shadow: 0 0 8px #00000018;
        }

        .title {
          font-size: 2.5rem;
          color: #000;
          font-weight: 700;
          margin: 0;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #000;
          opacity: 0.5;
          margin: 4px 0 8px;

          
        }
        
        .head {
          align-items: center;
        }

        .btn-container {
          display: flex;
          flex-direction: row;
          margin-top: 16px;

        }

        .link-btn {
          display: flex;
          flex-direction: row;
          height: 50px;
          background-color: ${swatch.main};
          border-radius: 12px;
          width: 100%;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          transition: background-color 0.15s;
        }
        .link-btn:last-child {
          margin-right: 0;
        }

        .link-btn:hover {
          background-color: ${swatch.mainHover};
        }

        .link-icon {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          margin-left: -16px;
        }

        .link-title {
          font-size: 1.3rem;
          color: ${swatch.textInMain};
        }

        @media (min-width: 576px){

          .project-container {
            width: 576px;
          }

          .row {
            padding: 0 16px;
          }

          .project {
            padding: 48px 0 100px;
          }

          .btn-container {
            justify-content: flex-end;
          }

          .link-btn {
            width: 180px;
          }
        }

      `}</style>

      </div>
    </>
  )
}

export function getStaticProps({ params }) {
  const project = projectData.find(e => e.id == params.id);

  return { props: { ...project } }
}

export function getStaticPaths() {

  const projectPaths = projectData.map(p => `/project/${p.id}`);

  return {
    paths: projectPaths,
    fallback: false,
  }
}