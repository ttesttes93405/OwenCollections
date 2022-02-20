import ProjectCover from "./ProjectCover";
import swatch from "../../styles/swatch";
import classNames from "classnames";


const h1Regex = RegExp("^# ?(.+)");
const h2Regex = RegExp("^## ?(.+)");
const h3Regex = RegExp("^### ?(.+)");

const olRegex = RegExp("^[0-9]+\. ?(.+)");
const ulRegex = RegExp("^[\-\*] ?(.+)");

const refRegex = RegExp("^\{\{(.+)\}\}$");

const lineRegex = RegExp("[-]{3,}");

function RichText(props) {

  const {
    content,
  } = props;


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


  const contentList = Array.isArray(content) ? content : [content,];

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
    }
  }

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
    </article>
  )
}


export default RichText;