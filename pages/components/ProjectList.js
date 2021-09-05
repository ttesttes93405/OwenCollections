
import Project from './Project'
import { projectData, } from '../../data';

export default function ProjectList(props) {

  const {
    icon,
    title,
    projectType,
  } = props;

  const bgLineColor = 'rgba(59, 71, 92, 0.01)';

  return (
    <div className="project-list">

      <div className="row header">
        <img className="icon" src={icon} />
        <h2 className="title">{title}</h2>
      </div>

      <div className="project-container">
        {
          projectData
            .filter(p => !projectType || p.type === projectType)
            .map(p => <Project {...p} key={p.title} />)
        }
      </div>

      <style jsx>{`
        
        .header {
          margin-bottom: 24px;
        }

        .project-list {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 16px 16px 0;
          padding: 16px 0 0;
          flex-grow: 1;
          width: 100%;
          align-items: center;
          padding-bottom: 24px;
        }

        .project-list::before {
          position: absolute;
          top: 0;
          bottom: 0;
          right: -9999px;
          left: -9999px;
          content: '';
          z-index: -1;
          background-color: #fff;
          /*
          background-color: #F8F8F8;
          background-image: linear-gradient(
            45deg,
            ${bgLineColor} 12.5%,
            transparent 12.5%,
            transparent 50%,
            ${bgLineColor} 50%,
            ${bgLineColor} 62.5%,
            transparent 62.5%,
            transparent 100%);
          
            background-size: 30px 30px;
            */
        }
        
        .row {
          align-items: center;
          padding: 0 24px;
          width: 100%;
        }

        .icon {
          height: 32px;
          width: 32px;
          margin-right: 8px;
        }

        .title {
          font-size: 2.25rem;
          flex-grow: 1;
        }


        .project-container {
          width: 576px;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          /*grid-column-gap: 24px;
          grid-row-gap: 24px;*/
        }

        @media (max-width: 576px){

          .project-container {
            width: 100%;
          }

        }

      `}</style>

    </div>
  )
}
