import { projectData, } from "../../data"


function seed(a) {
  return function () {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function Background() {

  const viewProjects = projectData.filter(p => p.types.includes("game") || p.types.includes("front-end"));
  const times = viewProjects.length;
  const data = [...Array(times).keys()];


  const random = seed(25);

  const randomSign = () => random() > 0.5 ? 1 : -1;

  return (<div className="background">
    {
      data.map((index) => {

        const z = random();
        const size = (1 - z) * 40 + 60;
        const alpha = (1 - z) * 1;


        //const p = viewProjects[parseInt(viewProjects.length * random())];
        const p = viewProjects[index];

        const x = (random() * 800 + 400) * randomSign();
        const y = (random() * 400);


        return (
          <img src={p.icon} className="icon" key={index}
            style={{
              position: "absolute",
              height: size,
              width: size,
              borderRadius: 24,
              backgroundColor: "#fff",
              opacity: alpha,
              transform: `translate(${x}px, ${y}px)  perspective(5000px) rotate3d(${random() * 0.5},${random() * 0.5},${random() * 0.5},${random() * 100 - 50}deg) `,
              boxShadow: `0 0 10px #0003`,
              filter: `blur(${z * 8 + 12}px)`,
            }} />
        );

      })
    }
    <div className="blur" />

    <style jsx>{`
      .background {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #fff;
        z-index: -10;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .blur {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 0;
      }



      @media (max-width: 576px){

        .icon {
          display: none;
        }

        .blur {
          display: none;
        }
      }


    `}</style>
  </div>);
}

export default Background;