

const mp4Cover = (cover, style) => {

  const { source, ratio, } = cover;

  return (<div
    className="project-video"
    style={style}
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

const embedCover = (cover, style) => {

  const { source, ratio, } = cover;

  return (<div
    className="project-video"
    style={style}
  >
    <iframe
      className="cover"
      src={source}
      scrolling="no"
    />
    <style jsx>{`

      .project-video {
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

const imgCover = (cover, style) => {

  const { source, ratio, } = cover;

  return (<div className="project-img" style={style}>
    <div className="cover" />
    <style jsx>{`

    .project-img {
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
      background-image: url(${source});
      background-position: center;
      background-size: cover;
      left: 0;
      right: 0;
      top: 0;
      border: 1px #eee solid;
      border-radius: 8px;
    }

  `}</style>
  </div>)
}

const linkImgCover = (cover, style) => {

  const {
    link,
    linkTarget = "_blank",
  } = cover;

  return (
    <a href={link} rel="noreferrer" target={linkTarget} style={style}>
      {imgCover(cover)}
    </a>
  )
}

const linkMp4Cover = (cover, style) => {

  const {
    link,
    linkTarget = "_blank",
  } = cover;

  return (
    <a href={link} rel="noreferrer" target={linkTarget} style={style}>
      {mp4Cover(cover)}
    </a>
  );
}

export default function ProjectCover({ cover, style, }) {

  if (!cover || !cover.source) {
    return null;
  }

  const { type, link, } = cover;

  switch (type) {
    case "mp4":
      return link ? linkMp4Cover(cover, style) : mp4Cover(cover, style);
    case "img":
      return link ? linkImgCover(cover, style) : imgCover(cover, style);
    case "embed":
      return embedCover(cover, style);

    default:
      return null;
  }
}
