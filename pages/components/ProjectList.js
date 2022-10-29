
import Project from './Project'
import ProjectBar from './ProjectBar'
import { projectData, } from '../../data';

import classNames from 'classnames';

import { styled } from '../../styles/stitchesStyles';



const ProjectListWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddings: [16, 0, 24, 0],
  flexGrow: 1,
  width: '100%',
  alignItems: 'center',
});

const HeadWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  '& .icon': {
    size: 28,
    marginRight: 12,
  },
  '& .title': {
    fontSize: '2.25rem',
    flexGrow: 1,
    fontWeight: 600,
  },

  '@s': {
    paddings: [0, 16],
  },
  '@l': {
    paddings: [0, 8],
  },
});

const ProjectContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  '@s': {
    width: '100%',
  },
  '@l': {
    width: 576,
  }
});




const interactive = (arr1, arr2) => {

  const result = arr1.filter((e) => {
    return arr2.indexOf(e) > -1
  })

  return result;
}


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


  return (
    <ProjectListWrapper>

      <HeadWrapper>
        {icon && <img className="icon" src={icon} />}
        {title && <h2 className="title">{title}</h2>}
      </HeadWrapper>

      <ProjectContainer>
        {
          projectData
            .filter(p => projectTypeList.length === 0 || interactive(projectTypeList, p.types).length > 0)
            .slice(0, (count > 0) ? count : projectData.length)
            .map(p => {
              const t = `${target}/${p.id}`;
              switch (view) {
                case "card": return (<Project {...p} key={p.title} target={t} />);
                case "bar": return (<ProjectBar {...p} key={p.title} target={t} />);
                default: throw ({ name: 'Unhandle project list view type', message: `未知的 view type: ${view}` });
              }
            })
        }
      </ProjectContainer>

    </ProjectListWrapper>
  )
}

ProjectList.defaultProps = {
  icon: "",
  title: "",
  projectType: [],
  projectData: projectData,
  view: "card",
  count: -1,
  target: "/project",
};

export default ProjectList;