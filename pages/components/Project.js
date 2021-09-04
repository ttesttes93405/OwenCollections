import swatch from "../../styles/swatch"


const createVideoComp = (video) => {

  if (!video) {
    return null;
  }

  const { source, ratio, } = video;
  
  if (!source) {
    return null;
  }

  //mp4
  if (source.endsWith(".mp4")) {
    return (<div
      className="project-video"
    >
      <video
        className="video-mp4"
        src={source}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        //controls
      />
      <style jsx>{`

      .project-video {
        margin: 16px 0 16px;
        width: 100%;    
        position: relative;
        padding-top: ${ratio * 100}% ;
        background-color: rgba(0,0,0,0.05);
        border-radius: 8px;
      }

      .video-mp4 {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

    `}</style>
    </div>)
  }

  //embed
  return (<div
    className="project-video"
  >
    <iframe
      className="video-link"
      src={source}
      scrolling="no"
    />
    <style jsx>{`

      .project-video {
        margin: 16px 0 16px;
        width: 100%;    
        overflow: hidden;  
        position: relative;
        padding-top: ${ratio * 100}%;
        background-color: rgba(0,0,0,0.05);
        border-radius: 8px;
      }

      .video-link {
        border-style: none;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

    `}</style>
  </div>)

}

export default function Project(props) {

  const {
    icon,
    title,
    subtitle,
    video,
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

        {createVideoComp(video)}

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
          background-color: ${swatch.main};
          opacity: 0.5;
          transform: translateX(-25px);
        }

        .icon {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          margin-right: 12px;
        }

        .title {
          font-size: 2rem;
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
          color: #555;
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
        }
        .link-btn:last-child {
          margin-right: 0;
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
            padding: 100px 16px;
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
