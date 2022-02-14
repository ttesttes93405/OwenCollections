
import Project from './Project'
import ProjectBar from './ProjectBar'
import { projectData, } from '../../data';
import classNames from 'classnames';

function ProjectList(props) {

  const {
    icon,
    title,
    projectType,
    projectData,
    view,
    count,
    target,
  } = props;


  const projectTypeList = projectType ? (Array.isArray(projectType) ? projectType : [projectType]) : [];

  // console.log(projectTypeList);

  const interactive = (arr1, arr2) => {

    const result = arr1.filter((e) => {
      return arr2.indexOf(e) > -1
    })

    return result;
  }

  return (
    <div className={classNames("project-list", view)} >

      <div className="row header">
        {icon && <img className="icon" src={icon} />}
        {title && <h2 className="title">{title}</h2>}
      </div>

      <div className="project-container">
        {
          projectData
            .filter(p => projectTypeList.length === 0 || interactive(projectTypeList, p.types).length > 0)
            .slice(0, (count > 0) ? count : projectData.length)
            .map(p => {
              const t = `${target || 'project'}/${p.id}`;
              switch (view) {
                case "card": return (<Project {...p} key={p.title} target={t} />);
                case "bar": return (<ProjectBar {...p} key={p.title} target={t} />);
                default: return (<div>{"ERROR! 未知的 view type"}</div>)
              }
            })
        }
      </div>

      <style jsx>{`
        
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
        
        .project-list.card .header {
          margin-bottom: 24px;
        }

        .row {
          align-items: center;
          padding: 0 8px;
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
        }

        @media (max-width: 576px){

          .project-container {
            width: 100%;
          }

          .row {
            padding: 0 16px;
          }

        }

      `}</style>

    </div>
  )
}

ProjectList.defaultProps = {
  icon: "",
  title: "",
  projectType: [],
  projectData: projectData,
  view: "card",
  count: -1,
};

export default ProjectList;