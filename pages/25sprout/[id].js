import { projectData, } from '../../data';
import RichText from "../components/RichText";
import Header from "../components/Header";
import HeadMeta from "../components/HeadMeta";
import ProjectList from "../components/ProjectList";
import swatch from "../../styles/swatch";

export default function ProjectPage(props) {

  const {
    id,
    icon,
    title,
    subtitle,
    date,
    cover,
    content,
    types,
  } = props;

  return (
    <>

      <HeadMeta
        title={title + " | Owen Sun"}
        description={subtitle}
        image={cover.type === "img" ? cover.source : null}
      />

      <Header
        icon='/Owen02.jpg'
        paths={[{ title: title, icon: icon }]}
        rootPath={'/25sprout-portfolio'}
        isShowType={false}
      />

      <div className="project-container">


        <div className="m-no-round project">
          <div className="col">

            <div className="head">
              <img className="icon" src={icon} />
              <div className="col">
                <h2 className="title">{title}</h2>
                {<p className="subtitle">{date || ""}</p>}
              </div>
            </div>


            <RichText content={content} />

          </div>
        </div>


        {/* <ProjectList
          icon="/icons/notebook.svg"
          title="其他專案"
          projectType={type}
          projectData={projectData}
          count={3}
          view="bar"
        /> */}


        <style jsx global>{`

          .rich-text p, .rich-text li {
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: #222;
            margin: 0 0 4px;
            padding: 0;
          }

          .rich-text ol, .rich-text ul {
            padding: 0 0 0 24px;
            margin: 8px 0;
            position: relative;
          }
          
          .rich-text ol {
            list-style:none;
          }

          .rich-text ol li::marker {
            list-style: none;
          }
          
          .rich-text ol li::before {
            content: counter(list-item) ".";
            position: absolute;
            left: 0px;          
            font-size: 1.4rem;
            line-height: 2.4rem;
            vertical-align: middle;
            color: #000;
            width: 24px;
            text-align: center;
          }

          
          .rich-text h1, .rich-text h2, .rich-text h3 {
            color: #111;
            margin: 12px 0 8px;
            padding: 0;
            font-weight: 700;
          }

          .rich-text h1 {
            font-size: 2.5rem;
            line-height: 3.5rem;
          }
          
          .rich-text h2 {
            font-size: 2.25rem;
            line-height: 3.25rem;
          }
          
          .rich-text h3 {
            font-size: 2.0rem;
            line-height: 3.0rem;
          }

          .rich-text .space {
            height: 18px;
            display:inline-block;
            width: 100%;
          }

          .rich-text .line {
            height: 2px;
            display:inline-block;
            border-radius: 9999px;
            background-color: #0001;
            width: 30%;
            margin: 0 35%;
          }

          .rich-text .media {
            margin: 16px 0;
          }
          
          .rich-text code {
            display: block;
            margin: 16px 0;
            padding: 16px;
            background-color: #f4f4f4;
            border-radius: 8px;
            font-size: 1.2rem;
            font-family: "Inconsolata", "Menlo", "Consolas", monospace;
            color: #222;
          }          
          
          .rich-text .btn-container {
            display: flex;
            
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .rich-text .link-btn {
            display: flex;
            
            justify-content: center;
            align-items: center;

            padding: 8px 16px;
            margin: 8px;
            background-color: ${swatch.main};
            border-radius: 12px;
            min-width: 140px;
            max-width: 240px;
            box-sizing: border-box;
          }

          .rich-text .link-btn .link-icon {
            margin: 0 8px 0 -8px;
            height: 32px;
            width: 32px;
          }

          .rich-text .link-btn .link-title {
            font-size: 1.35rem;
            text-align: center;
            color: #fff;
            margin: 0;
            padding: 0;
            height: 32px;
            line-height: 32px;
          }

          .rich-text .link-btn.github {
            background-color: #24292f;
          }
          .rich-text .link-btn.github .link-title {
            color: #fff;
          }

          .rich-text .link-btn.google-play {
            background-color: #eee;
          }
          .rich-text .link-btn.google-play .link-title {
            color: #555;
          }

          .rich-text .link-btn.app-store {
            background-color: #222;
          }
          .rich-text .link-btn.app-store .link-title {
            color: #fff;
          }
          

        `}</style>

        <style jsx>{`

        .project-container {
          width: 100%;
          margin-bottom: 100px;
        }

        .project {
          position: relative;
          display: flex;
          flex-direction: column;
          /* background-color: #fff; */
          padding: 24px 16px 48px;
          border-radius: 16px;
          
        }

        .icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          margin-bottom: 12px;
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
          margin-bottom: 32px;
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

  const projectPaths = projectData
    .filter(p => p.types.includes('25sprout'))
    .map(p => `/25sprout/${p.id}`);

  return {
    paths: projectPaths,
    fallback: false,
  }
}