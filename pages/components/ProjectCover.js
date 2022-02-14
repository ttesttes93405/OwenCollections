

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
      /* border: 1px #eee solid; */
      border-radius: 8px;
    }

  `}</style>
  </div>)
}

const linkImgCover = (cover) => {

  const {
    link,
    linkTarget = "_blank",
  } = cover;

  return (
    <a href={link} rel="noreferrer" target={linkTarget}>
      {imgCover(cover)}
    </a>
  )
}

const linkMp4Cover = (cover) => {

  const {
    link,
    linkTarget = "_blank",
  } = cover;

  return (
    <a href={link} rel="noreferrer" target={linkTarget}>
      {mp4Cover(cover)}
    </a>
  );
}

export default function ProjectCover({ cover, }) {

  if (!cover || !cover.source) {
    return null;
  }

  const { type, link, } = cover;

  switch (type) {
    case "mp4":
      return link ? linkMp4Cover(cover) : mp4Cover(cover);
    case "img":
      return link ? linkImgCover(cover) : imgCover(cover);
    case "embed":
      return embedCover(cover);

    default:
      return null;
  }
}
