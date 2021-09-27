

const mp4Cover = (cover) => {

  const { source, ratio, } = cover;

  return (<div
    className="project-video"
  >
    <video
      className="cover"
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

    .cover {
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

const embedCover = (cover) => {

  const { source, ratio, } = cover;

  return (<div
    className="project-video"
  >
    <iframe
      className="cover"
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

      .cover {
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

const imgCover = (cover) => {

  const { source, ratio, } = cover;

  return (<div className="project-img">
    <img src={source} className="cover" />
    <style jsx>{`

      .project-img {
        margin: 16px 0 16px;
        width: 100%;    
        position: relative;
        padding-top: ${ratio * 100}% ;
        background-color: rgba(0,0,0,0.05);
        border-radius: 8px;
      }

      .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border: 1px #eee solid;
        border-radius: 8px;
      }

    `}</style>
  </div>)
}

const linkImgCover = (cover) => {

  const { source, ratio, link, } = cover;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="project-img">
        <img src={source} className="cover" />
        <style jsx>{`

          .project-img {
            margin: 16px 0 16px;
            width: 100%;    
            position: relative;
            padding-top: ${ratio * 100}% ;
            background-color: rgba(0,0,0,0.05);
            border-radius: 8px;
          }

          .cover {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border: 1px #eee solid;
            border-radius: 8px;
          }

        `}</style>
      </div>
    </a>
  )
}


export default function ProjectCover({ cover, }) {

  if (!cover || !cover.source) {
    return null;
  }

  const { type, } = cover;

  switch (type) {
    case "mp4":
      return mp4Cover(cover);
    case "img":
      return imgCover(cover);
    case "linkImg":
      return linkImgCover(cover);
    case "embed":
      return embedCover(cover);

    default:
      return null;
  }
}
