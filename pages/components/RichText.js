import ProjectCover from "./ProjectCover";
import CompareImage from "./CompareImage";
import swatch from "../../styles/swatch";
import classNames from "classnames";


const h1Regex = RegExp("^# ?(.+)");
const h2Regex = RegExp("^## ?(.+)");
const h3Regex = RegExp("^### ?(.+)");

const olRegex = RegExp("^[0-9]+\. ?(.+)");
const ulRegex = RegExp("^[\-\*] ?(.+)");

const refRegex = RegExp("^\{\{(.+)\}\}$");

const lineRegex = RegExp("[-]{3,}");


const buildString = (content) => {

  let resultGroup;

  //Space
  if (content.length === 0) {
    return [{
      contentType: "space",
    }];
  }

  //line
  resultGroup = lineRegex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "line",
    }];
  }

  //H3
  resultGroup = h3Regex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "title3",
      content: resultGroup[1],
    }];
  }

  //H2
  resultGroup = h2Regex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "title2",
      content: resultGroup[1],
    }];
  }

  //H1
  resultGroup = h1Regex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "title1",
      content: resultGroup[1],
    }];
  }

  //ol
  resultGroup = olRegex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "orderListElement",
      content: resultGroup[1],
    }];
  }

  //ul
  resultGroup = ulRegex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "unorderListElement",
      content: resultGroup[1],
    }];
  }

  //ref
  resultGroup = refRegex.exec(content);
  if (resultGroup) {
    return [{
      contentType: "reference",
      referenceName: resultGroup[1],
    }];
  }


  //text
  return [{
    contentType: "text",
    content: content,
  }];

}


const preBuild = (contentList) => {
  const preBuildCmds = [];
  contentList.forEach((el) => {
    switch (typeof (el)) {
      case "string":
        el.split("\n").forEach(line => {
          preBuildCmds.push(...buildString(line.trim()));
        });
        return;

      case "object":
        preBuildCmds.push(el);
        return;
    }
  });
  return preBuildCmds;
}

const buildCmds = (cmds) => {
  const groupedCmds = [];
  let refs = {};
  let pointerGroup = null;
  cmds.forEach(cmd => {
    if (cmd.contentType === "orderListElement") {
      if (pointerGroup === null || pointerGroup.contentType !== "orderList") {
        const group = {
          contentType: "orderList",
          elements: [],
        };
        groupedCmds.push(group);
        pointerGroup = group;
      }
      pointerGroup.elements.push(cmd);
    }
    else if (cmd.contentType === "unorderListElement") {
      if (pointerGroup === null || pointerGroup.contentType !== "unorderList") {
        const group = {
          contentType: "unorderList",
          elements: [],
        };
        groupedCmds.push(group);
        pointerGroup = group;
      }
      pointerGroup.elements.push(cmd);
    }

    else {
      if (cmd.contentType === "references") {
        refs = { ...refs, ...cmd.references };
      }
      else if (cmd.contentType === "reference") {
        const refCmd = refs[cmd.referenceName];
        groupedCmds.push({ ...refCmd });
      }
      else {
        groupedCmds.push(cmd);
      }
      pointerGroup = null;
    }
  });
  return groupedCmds;
}

const buildMethod = {
  image: function build(cover) {
    const style = cover.style || {};
    return (<div className="media" key={cover.source} style={style}>
      <ProjectCover cover={cover} />
      {cover.caption && (<p className="caption">{cover.caption}</p>)}
    </div>);
  },
  link: function build(link) {

    const links = link.links || [link,];

    return (
      <div className="btn-container" key={Math.random()}>
        {
          links.map(link =>
          (<a href={link.link} className={classNames("link-btn", link.theme || "default")} key={link.title} target="_blank" rel="noreferrer">
            {link.icon ? <img src={link.icon} className="link-icon" /> : null}
            <p className="link-title">{link.title}</p>
            {link.rightIcon ? <img src={link.rightIcon} className="link-icon link-right-icon" /> : null}
          </a>))
        }
      </div>);
  },
  text: function build({ content, }) {
    return (<p key={content + Math.random()}>{content}</p>);
  },
  orderListElement: function build({ content, }) {
    return (<li key={content + Math.random()}>{content}</li>);
  },
  unorderListElement: function build({ content, }) {
    return (<li key={content + Math.random()}>{content}</li>);
  },
  orderList: function build({ elements, }) {
    return (<ol key={Math.random()}>
      {elements.map(el => buildMethod[el.contentType](el))}
    </ol>);
  },
  unorderList: function build({ elements, }) {
    return (<ul key={Math.random()}>
      {elements.map(el => buildMethod[el.contentType](el))}
    </ul>);
  },
  title1: function build({ content, }) {
    return (<h1 key={content}>{content}</h1>);
  },
  title2: function build({ content, }) {
    return (<h2 key={content}>{content}</h2>);
  },
  title3: function build({ content, }) {
    return (<h3 key={content}>{content}</h3>);
  },
  space: function build() {
    return (<span className="space" key={Math.random()}></span>);
  },
  line: function build() {
    return (<span className="line" key={Math.random()}></span>);
  },
  code: function build({ content, }) {
    return (<pre key={content}><code>{content}</code></pre>);
  },
  diffImage: function build({ cover1, cover2, style, caption }) {
    return (<CompareImage
      key={cover1.source + cover2.source}
      cover1={cover1}
      cover2={cover2}
      style={style}
      caption={caption} />);
  },
  iframe: function build({ link, width, height, }) {
    return (<iframe
      className="iframe"
      key={link}
      src={link}
      style={{ width, height, }}
    ></iframe>)
  }
}


function RichText(props) {

  const {
    content,
  } = props;

  const contentList = Array.isArray(content) ? content : [content,];


  const result = [];

  const builtCmds = buildCmds(preBuild(contentList));

  // console.log(builtCmds);

  builtCmds.forEach((el) => {
    const method = buildMethod[el.contentType];
    const buildElement = method(el);
    result.push(buildElement);
    return;
  });


  return (
    <article className="rich-text">
      {result}
      <style jsx global>{`

        .rich-text p, .rich-text li {
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #222;
          margin: 0 0 4px;
          padding: 0;
          font-weight: 300;
        }

        .rich-text ol, .rich-text ul {
          padding: 0 0 0 24px;
          margin: 8px 0;
          position: relative;
        }

        .rich-text ol {
          list-style:none;
        }

        .rich-text ol li::marker {
          list-style: none;
        }

        .rich-text ol li::before {
          content: counter(list-item) ".";
          position: absolute;
          left: 0px;          
          font-size: 1.4rem;
          line-height: 2.4rem;
          vertical-align: middle;
          color: #000;
          width: 24px;
          text-align: center;
        }


        .rich-text h1, .rich-text h2, .rich-text h3 {
          color: #111;
          margin: 12px 0 8px;
          padding: 0;
          font-weight: 700;
        }

        .rich-text h1 {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        .rich-text h2 {
          font-size: 2.25rem;
          line-height: 3.25rem;
        }

        .rich-text h3 {
          font-size: 2.0rem;
          line-height: 3.0rem;
        }

        .rich-text .space {
          height: 18px;
          display:inline-block;
          width: 100%;
        }

        .rich-text .line {
          height: 2px;
          display:inline-block;
          border-radius: 9999px;
          background-color: #0001;
          width: 30%;
          margin: 0 35%;
        }

        .rich-text .media {
          margin: 16px 0;
        }

        .rich-text code {
          display: block;
          margin: 16px 0;
          padding: 16px;
          background-color: #f4f4f4;
          border-radius: 8px;
          font-size: 1.2rem;
          font-family: "Inconsolata", "Menlo", "Consolas", monospace;
          color: #222;
          overflow-x: scroll;
        }

        .rich-text .caption {
          font-size: 1.25rem;
          color: #888;
          margin: 4px 0 0;
        }          

        .rich-text .btn-container {
          display: flex;
          
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .rich-text .link-btn {
          display: flex;
          
          justify-content: center;
          align-items: center;

          padding: 8px 16px;
          margin: 8px;
          background-color: ${swatch.main};
          border-radius: 12px;
          min-width: 140px;
          max-width: 240px;
          box-sizing: border-box;
          box-shadow: 0 0 0 0 ${swatch.mainHover0};

          transition: box-shadow 0.3s;
        }
        .rich-text .link-btn:hover {
          box-shadow: 0 0 0 4px ${swatch.mainHover};
        }

        .rich-text .link-btn .link-icon {
          margin: 0 8px 0 -8px;
          height: 32px;
          width: 32px;
        }

        .rich-text .link-btn .link-right-icon {
          margin: 0 -8px 0 8px;
        }

        .rich-text .link-btn .link-title {
          font-size: 1.35rem;
          text-align: center;
          color: #fff;
          margin: 0;
          padding: 0;
          height: 32px;
          line-height: 32px;
        }


        .rich-text .link-btn.github {
          background-color: #24292f;
          box-shadow: 0 0 0 0 rgba(36, 41, 47, 0);
        }
        .rich-text .link-btn.github:hover {
          box-shadow: 0 0 0 4px rgba(36, 41, 47, 0.2);
        }
        .rich-text .link-btn.github .link-title {
          color: #fff;
        }


        .rich-text .link-btn.google-play {
          background-color: #eee;
          box-shadow: 0 0 0 0 rgba(200, 200, 200, 0);
        }
        .rich-text .link-btn.google-play:hover {
          box-shadow: 0 0 0 4px rgba(200, 200, 200, 0.4);
        }
        .rich-text .link-btn.google-play .link-title {
          color: #555;
        }


        .rich-text .link-btn.app-store {
          background-color: #222;
          box-shadow: 0 0 0 0 rgba(34, 34, 34, 0);
        }
        .rich-text .link-btn.app-store:hover {
          box-shadow: 0 0 0 4px rgba(34, 34, 34, 0.2);
        }
        .rich-text .link-btn.app-store .link-title {
          color: #fff;
        }


        
        .rich-text .iframe {
          border-style: none;
          margin: 0 auto;
          display: flex;
          border-radius: 8px;
          background-color: #8882;

        }

      `}</style>
    </article>
  )
}


export default RichText;