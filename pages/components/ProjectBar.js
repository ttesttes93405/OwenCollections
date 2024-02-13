import swatch from "../../styles/swatch"
import Link from "next/link"

import { styled } from '../../styles/stitchesStyles';



const ProjectWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: 4,
  borderRadius: 14,
  margins: [0, 0, 4, 0],
  boxSizing: 'border-box',
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: '#f8f8f8',
  },
  '@s': {
    margins: [0, 12],
  },
  '@l': {}
});

const HeadWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const Icon = styled('img', {
  size: 52,
  borderRadius: 12,
  margin: 4,
  marginRight: 16,
  boxShadow: '0 0 8px #00000018',
});

const TextContainer = styled('div', {
  maxWidth: 'calc(100% - 90px)',
  '& .title': {
    fontSize: '1.6rem',
    color: '#000000',
    fontWeight: 600,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '& .subtitle': {
    fontSize: '1.2rem',
    color: '#888888',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
  },
});

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
      <ProjectWrapper>
        <HeadWrapper>
          <Icon src={icon} />
          <TextContainer>
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </TextContainer>
        </HeadWrapper>
      </ProjectWrapper>
    </Link>
  )
}


ProjectBar.defaultProps = {
  icon: "",
  title: "",
  subtitle: "",
  target: "",
};