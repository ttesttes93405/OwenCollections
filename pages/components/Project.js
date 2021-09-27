import ProjectCover from "./ProjectCover";
import swatch from "../../styles/swatch"


export default function Project(props) {

  const {
    icon,
    title,
    subtitle,
    cover,
    content,
    links,
  } = props;

  return (
    <div className="m-no-round project">

      <div className="col">

        <div className="row head">
          <img className="icon" src={icon} />
          <div className="col">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>

        <ProjectCover cover={cover} />

        {content.split('\n').map(c => <p className="des" key={c}>{c}</p>)}

        <div className="btn-container">
          {
            links.map(m => (
              <a href={m.link} className="link-btn" key={m.title} target="_blank">
                {m.icon ? <img src={m.icon} className="link-icon" /> : null}
                <p className="link-title">{m.title}</p>
              </a>
            ))
          }
        </div>

      </div>


      <style jsx>{`
                
        .project {
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          padding: 48px 16px;
          border-radius: 16px;
        }
        .project:first-child {
          padding-top: 0;
        }


        .project::after {
          content: '';
          position: absolute;
          bottom: 0;
          height: 4px;
          width: 50px;
          left: 50%;
          border-radius: 9999px;
          background-color: #bbb; /*${swatch.main};*/
          opacity: 0.5;
          transform: translateX(-25px);
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

        .des {
          font-size: 1.4rem;
          color: #333;
          margin: 0;
          line-height: 175%;
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

          .project {
            padding: 100px 0;
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
  )
}
