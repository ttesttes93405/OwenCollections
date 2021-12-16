import ProjectCover from "./ProjectCover";


const h1Regex = RegExp("^# ?(.+)");
const h2Regex = RegExp("^## ?(.+)");
const h3Regex = RegExp("^### ?(.+)");

const olRegex = RegExp("^[0-9]+\. ?(.+)");
const ulRegex = RegExp("^[\-\*] ?(.+)");

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

    //H3
    resultGroup = h3Regex.exec(content);
    if (resultGroup) {
      return [{
        contentType: "title",
        content: resultGroup[1],
      }];
    }

    //H2
    resultGroup = h2Regex.exec(content);
    if (resultGroup) {
      return [{
        contentType: "title",
        content: resultGroup[1],
      }];
    }

    //H1
    resultGroup = h1Regex.exec(content);
    if (resultGroup) {
      return [{
        contentType: "title",
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

    //text
    return [{
      contentType: "text",
      content: content,
    }];

  }

  const preBuildCmds = [];
  content.forEach((el) => {
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


  const buildMethod = {
    image: (cover) => {
      return (<ProjectCover cover={cover} key={cover.source} />);
    },
    link: (link) => {
      return (
        <div className="btn" key={link.link}>
          <a href={link.link} className="link-btn" key={link.title} target="_blank" rel="noreferrer">
            {link.icon ? <img src={link.icon} className="link-icon" /> : null}
            <p className="link-title">{link.title}</p>
          </a>
        </div>);
    },
    text: ({ content, }) => {
      return (<p key={content}>{content}</p>);
    },
    orderListElement: ({ content, }) => {
      return (<li key={content}>{content}</li>);
    },
    unorderListElement: ({ content, }) => {
      return (<li key={content}>{content}</li>);
    },
    orderList: ({ elements, }) => {
      return (<ol key={Math.random()}>
        {elements.map(el => buildMethod[el.contentType](el))}
      </ol>);
    },
    unorderList: ({ elements, }) => {
      return (<ul key={Math.random()}>
        {elements.map(el => buildMethod[el.contentType](el))}
      </ul>);
    },
    title: ({ content, }) => {
      return (<h2 key={content}>{content}</h2>);
    },
    space: () => {
      return (<span className="space" key={Math.random()}></span>);
    },
  }

  const groupList = (cmds) => {
    const groupedCmds = [];
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
        pointerGroup = null;
        groupedCmds.push(cmd);
      }
    });
    return groupedCmds;
  }

  const grouped = groupList(preBuildCmds);


  const result = [];

  grouped.forEach((el) => {
    const buildElement = buildMethod[el.contentType](el);
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