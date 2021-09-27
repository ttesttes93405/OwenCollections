
export default function Intro(props) {

  const {
    picture,
    title,
    subtitle,
    content,
    info,
  } = props;

  return (
    <div className="intro">

      <img className="icon" src={picture} />
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>


      <div className="info-container">
        {info.map(i => (<div className="info" key={i.content}>
          <img src={i.icon} className="info-icon" />
          <p className="info-content">{i.content}</p>
        </div>))}
      </div>

      <div className="content-container">
        {content.map(c => (<p className="content" key={c}>{c}</p>))}
      </div>

      <style jsx>{`
          
          .intro {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            padding: 40px 0 72px;
            width: 100%;
          }

          .icon {
            width: 80px;
            height: 80px;
            border-radius: 9999px;
            margin-left: 16px;
          }

          .title {
            font-size: 2.9rem;
            color: #000;
            font-weight: 800;
            margin: 16px 0 4px;
            margin-left: 16px;
            letter-spacing: 4px;
          }
          .subtitle {
            font-size: 1.5rem;
            color: #000;
            font-weight: 400;
            margin: 0;
            opacity: 0.7;
            margin-left: 16px;
          }

          .info-container {
            margin: 8px 0;
          }

          .info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 16px;
          }

          .info-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            opacity: 0.5;
          }

          .info-content {
            font-size: 1.25rem;
            color:#888;
          }

          .content-container {
            margin: 8px 0 32px 0;
            padding: 16px;
            background-color: #f4f4f4;
            border-radius: 8px;
          }
          
          .content {
            font-size: 1.35rem;
            margin: 0;
            color: #555;
          }

          @media (max-width: 576px){

            .intro {
              padding-left: 16px;
              padding-right: 16px; 
            }

          }
        
        `}</style>
    </div >
  )
}


Intro.defaultProps = {
  picture: "",
  title: "",
  subtitle: "",
  content: [],
  info: [],
};