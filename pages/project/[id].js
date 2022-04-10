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
        paths={[{ title: title, icon: icon }]}
      />

      <div className="project-container">


        <div className="m-no-round project">
          <div className="col">

            <div className="head">
              <img className="icon" src={icon} />
              <div className="col">
                <h1 className="title">{title}</h1>
                {<p className="subtitle">{date || ""}</p>}
              </div>
            </div>


            <RichText content={content} />

          </div>
        </div>


        <ProjectList
          icon="/icons/notebook.svg"
          title="其他專案"
          projectType={types}
          projectData={projectData}
          count={3}
          view="bar"
        />


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
            box-shadow: 0 0 0 0 ${swatch.mainHoverAlpha0};

            transition: background-color 0.15s, box-shadow 0.3s;
          }
          .link-btn:last-child {
            margin-right: 0;
          }

          .link-btn:hover {
            box-shadow: 0 0 0 4px ${swatch.mainHover};
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