import ProjectCover from "./ProjectCover";


const h1Regex = RegExp("^# ?(.+)");
const h2Regex = RegExp("^## ?(.+)");
const h3Regex = RegExp("^### ?(.+)");

const olRegex = RegExp("^\d+\. ?(.+)");
const ulRegex = RegExp("^[\-\*]\. ?(.+)");

function RichText(props) {

  const {
    content,
  } = props;


  const buildString = (content) => {

    let resultGroup;

    //H3
    resultGroup = h3Regex.exec(content);
    if (resultGroup) {
      return (<h3>{resultGroup[1]}</h3>);
    }

    //H2
    resultGroup = h2Regex.exec(content);
    if (resultGroup) {
      return (<h2>{resultGroup[1]}</h2>);
    }

    //H1
    resultGroup = h1Regex.exec(content);
    if (resultGroup) {
      return (<h1>{resultGroup[1]}</h1>);
    }


    //ol
    resultGroup = olRegex.exec(content);
    if (resultGroup) {
      return (<ol>{resultGroup[1]}</ol>);
    }

    //ul
    resultGroup = ulRegex.exec(content);
    if (resultGroup) {
      return (<ul>{resultGroup[1]}</ul>);
    }

    if(content===""){
      return (<span className="space"></span>);
    }

    return (<p>{content}</p>)
  }

  const buildImage = (cover) => {
    return (<ProjectCover cover={cover} />);
  }

  const buildLinks = (link) => {
    console.log(link)
    return (
      <div className="btn">
        <a href={link.link} className="link-btn" key={link.title} target="_blank" rel="noreferrer">
          {link.icon ? <img src={link.icon} className="link-icon" /> : null}
          <p className="link-title">{link.title}</p>
        </a>
      </div>);
  }

  return (
    <div className="rich-text">
      {
        typeof (content) === "string" ?
          buildString(content) :
          content.map(el => {
            switch (typeof (el)) {
              case "string":
                return buildString(el);
              case "object":
                switch (el.contentType) {
                  case "image":
                    return buildImage(el);
                  case "link":
                    return buildLinks(el);
                }
            }
          })
      }
    </div>
  )
}


export default RichText;