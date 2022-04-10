import ProjectCover from "./ProjectCover";
import swatch from "../../styles/swatch"
import Link from "next/link";


export default function Project(props) {

  const {
    id,
    icon,
    title,
    subtitle,
    cover,
    target,
  } = props;


  const btnText = "閱讀內文";

  const forcePathCover = {
    ...cover,
    link: target,
    linkTarget: "_self",
  };

  return (
    <Link href={target}>
      <a className="m-no-round project">

        <div className="col">

          <ProjectCover cover={forcePathCover} />

          <div className="row head">
            <img className="icon" src={icon} />
            <div className="col text-container">
              <h2 className="title">{title}</h2>
              {subtitle ? (<p className="subtitle">{subtitle}</p>) : null}
            </div>
          </div>


          <div className="btn-container">
            <a href={target} className="link-btn" key={btnText} rel="noreferrer">
              <p className="link-title">{btnText}</p>
              <img src="/icons/arrow-right.svg" className="link-icon" />
            </a>
          </div>

        </div>


        <style jsx>{`
                
        .project {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 48px 8px;
          border-radius: 0;
          width: 576px;
          max-width: 100vw;
          margin-bottom: 70px;
          background-color: #ffffff; 
          transition: background-color 0.2s, box-shadow 0.3s;
          box-shadow: 0 0 0 5px #ffffff;
        }
        .project:hover {
          background-color: #fafafa; 
          box-shadow: 0 0 0 10px #fafafa, 0 0 0 11px #00000008;
        }
        
        /*
        .project::after {
          content: '';
          position: absolute;
          bottom: 0;
          height: 4px;
          width: 50px;
          left: 50%;
          border-radius: 9999px;
          background-color: #bbb; 
          opacity: 0.5;
          transform: translateX(-25px);
        }
        */

        .icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          margin-right: 16px;
          box-shadow: 0 0 8px #00000018;
        }

        .text-container {
          flex-grow: 0;
        }

        .title {
          font-size: 1.9rem;
          color: #000;
          font-weight: 700;
          margin: 0;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #666;
          margin: 2px 0;
          font-weight: 300;
        }

        .des {
          font-size: 1.4rem;
          color: #333;
          margin: 0;
          line-height: 175%;
        }
        
        .head {
          align-items: start;
          margin-top: 12px;
        }

        .btn-container {
          display: flex;
          flex-direction: row;
          margin-top: 24px;
          justify-content: center;

        }

        .link-btn {
          display: flex;
          flex-direction: row;
          height: 50px;
          /*background-color: ${swatch.btnBackground};*/
          border: ${swatch.btnBackground} 1px solid;
          border-radius: 12px;
          width: 200px;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          box-shadow: 0 0 0 0 ${swatch.btnBackgroundHover};

          transition: box-shadow 0.3s, opacity 0.3s;
        }
        .link-btn:last-child {
          margin-right: 0;
        }


        .link-btn:hover {
          box-shadow: 0 0 0 4px ${swatch.btnBackgroundHover};
        }

        .link-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s;
        }

        .link-btn:hover .link-icon, .project:hover .link-icon{
          transform: translateX(3px);
        }

        .link-icon:first-child {
          margin-right: 8px;
          margin-left: -16px;
        }

        .link-icon:last-child {
          margin-right: -16px;
          margin-left: 8px;
        }

        .link-title {
          font-size: 1.3rem;
          color: #888;
          transition: color 0.3s ;
        }

        .link-btn:hover .link-title {
          color: #444;
        }

        .link-title {
          font-size: 1.3rem;
          transition: color 0.3s ;
          color: #444;
        }
        
        @media (min-width: 576px){

          .project {
            padding: 0;
            border-radius: 8px;
          }

          .btn-container {
            justify-content: flex-end;
          }

          .link-btn {
            width: 180px;
          }

          .link-title {
            color: #888;
          }

          .link-btn:hover .link-title {
            color: #444;
          }
        }

      `}</style>

      </a>
    </Link>
  )
}


Project.defaultProps = {
  icon: "",
  title: "",
  subtitle: "",
  cover: "",
  content: "",
  links: [],
  target: "",
};