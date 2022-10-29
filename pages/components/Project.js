import ProjectCover from "./ProjectCover";
import swatch from "../../styles/swatch"
import Link from "next/link";

import { styled } from '../../styles/stitchesStyles';



const ProjectWrapper = styled('a', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: 576,
  maxWidth: '100vw',
  marginBottom: 70,
  backgroundColor: '#fafafa',
  boxShadow: '0 0 0 5px #fafafa',
  display: 'flex',
  flexDirection: 'column',

  '@s': {
    borderRadius: 0,
    paddings: [8, 8, 32],
  },
  '@l': {
    borderRadius: 12,
    padding: 16,
    transition: 'background-color 0.2s, box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0 0 0 10px #fafafa, 0 0 0 11px #00000008',
    },
  }
});

const ProjectCoverWrapper = styled('div', {
  // 包起來避免把其他元素的高也算進來
});

const HeadWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  marginTop: 32,
});

const Icon = styled('img', {
  size: 64,
  borderRadius: 16,
  marginRight: 16,
  boxShadow: '0 0 8px #00000018',
  userSelect: 'none',
});

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  '& .title': {
    fontSize: '1.9rem',
    color: '#000000',
    fontWeight: 700,
    margin: 0,
  },
  '& .subtitle': {
    fontSize: '1.3rem',
    color: '#606060',
    margins: [2, 0],
    fontWeight: 300,
  },
});



export default function Project(props) {

  const {
    id,
    icon,
    title,
    subtitle,
    cover,
    target,
  } = props;

  const forcePathCover = {
    ...cover,
    link: target,
    linkTarget: "_self",
  };

  return (
    <Link href={target}>
      <ProjectWrapper className="project">

        <ProjectCoverWrapper>
          <ProjectCover cover={forcePathCover} />
        </ProjectCoverWrapper>

        <HeadWrapper>
          <Icon src={icon} />
          <TextContainer>
            <h2 className="title">{title}</h2>
            {subtitle ? (<p className="subtitle">{subtitle}</p>) : null}
          </TextContainer>
        </HeadWrapper>

      </ProjectWrapper>
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