
import { styled } from '../../styles/stitchesStyles';




const IntroWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddings: [40, 0, 72],
  width: '100%',
  '@s': {},
  '@l': {
    paddingLeft: 8,
    paddingRight: 8,
  },
});

const Avatar = styled('img', {
  size: 80,
  borderRadius: 9999,
  marginLeft: 16,
});

const Title = styled('h1', {
  fontSize: '2.9rem',
  color: '#000000',
  fontWeight: 800,
  margins: [16, 0, 4, 16],
  letterSpacing: 4,
});

const Subtitle = styled('p', {
  fontSize: '1.5rem',
  color: '#000000',
  fontWeight: 400,
  margin: 0,
  opacity: 0.7,
  marginLeft: 16,
});




const InfoContainer = styled('div', {
  margins: [8, 0],
});

const InfoItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 16,

});

const InfoIcon = styled('img', {
  size: 20,
  marginRight: 8,
  opacity: 0.5,
});

const InfoText = styled('p', {
  fontSize: '1.25rem',
  color: '#808080',
});



const ContentContainer = styled('div', {
  margins: [8, 0, 32],
  paddings: [20, 16],
  borderRadius: 8,
  '& p': {
    fontSize: '1.35rem',
    margin: 0,
    color: '#505050',
    minHeight: 14,
    lineHeight: '2.25rem',
  }
});



export default function Intro(props) {

  const {
    picture,
    title,
    subtitle,
    content,
    info,
  } = props;

  return (
    <IntroWrapper>

      <Avatar src={picture} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <InfoContainer>
        {info.map(i => (<InfoItem key={i.content}>
          <InfoIcon src={i.icon} />
          <InfoText>{i.content}</InfoText>
        </InfoItem>))}
      </InfoContainer>

      <ContentContainer>
        {content.map((c, i) => (<p key={i}>{c}</p>))}
      </ContentContainer>

    </IntroWrapper>
  )
}


Intro.defaultProps = {
  picture: "",
  title: "",
  subtitle: "",
  content: [],
  info: [],
};