import swatch from "../../styles/swatch"
import Link from "next/link"


export default function ProjectBar(props) {

  const {
    id,
    icon,
    title,
    subtitle,
    target,
  } = props;



  return (
    <Link href={target} >
      <a className="project">

        <div className="row head">
          <img className="icon" src={icon} />
          <div className="col">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>


        <style jsx>{`
                
        .project {
          position: relative;
          display: flex;
          flex-direction: column;
          /* background-color: #fff; */
          padding: 4px;
          border-radius: 14px;
          /* height: 80px; */
          margin: 0 0 4px 0;
          box-sizing: border-box;
          cursor: pointer;
          overflow: hidden;
        }

        .project:hover {
          background-color: #f8f8f8;
        }

        .icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          margin: 4px;
          margin-right: 16px;
          box-shadow: 0 0 8px #00000018;
        }

        .title {
          font-size: 1.6rem;
          color: #000;
          font-weight: 600;
          margin: 0;
          overflow: hidden;
          text-overflow : ellipsis;
          white-space: nowrap;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #888;
          margin: 0;
          overflow: hidden;
          text-overflow : ellipsis;
          white-space: nowrap;
          max-width: 100%;
        }
        
        .head {
          align-items: center;
        }
        
        .head .col {
          max-width: calc(100% - 90px);
        }


        @media (max-width: 576px){
          .project {
            margin: 0 12px;
          }
        }

      `}</style>

      </a>
    </Link>
  )
}


ProjectBar.defaultProps = {
  icon: "",
  title: "",
  subtitle: "",
};