import { useEffect, useRef, useState } from 'react';
import ProjectCover from './ProjectCover';

const preventDragHandler = (e) => {
  e.preventDefault();
}

export default function CompareImage(props) {

  const {
    cover1,
    cover2,
    style,
    caption
  } = props;


  const ref = useRef(null);
  const [compareRatio, setCompareRatio] = useState(0.5);
  const [moveState, setMoveState] = useState({});



  useEffect(() => {
    if (ref === null) {
      return;
    }
    setMoveState({ ...moveState, width: ref.current.offsetWidth });
  }, [ref]);



  const touchStart = (e) => {
    setMoveState({
      ...moveState,
      mouseDown: true,
      x: e.movementX,
      y: e.movementY,
    });
  };

  const touchMove = (e) => {
    if (!moveState.mouseDown) {
      return;
    }
    const { x, y } = moveState;
    setMoveState({
      ...moveState,
      mouseDown: true,
      x: x + e.movementX,
      y: y + e.movementY,
    });
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const ratio = compareRatio + ((e.movementX) / moveState.width);
    setCompareRatio(clamp(ratio, 0, 1));
  };

  const touchLeave = (e) => setMoveState({ ...moveState, mouseDown: false, });

  return (<div
    className="media"
    ref={ref}
    key={cover1.source}
    style={style || {}}

  >
    <div className="diff-image"
        onDragStart={preventDragHandler}>
      <ProjectCover cover={cover1} />
      <div className="cutter" style={{
        marginLeft: `-${(1 - compareRatio) * 100}%`,
        marginRight: `${(1 - compareRatio) * 100}%`,
      }}>
        <ProjectCover cover={cover2} style={{
          marginLeft: `${(1 - compareRatio) * 100}%`,
        }} />
      </div>
      <div
        className='slider'
        style={{ left: `${compareRatio * 100}%` }}
        onDragStart={preventDragHandler}
      >
        <div
          className="slider-control"
          onDragStart={preventDragHandler}
          onTouchStart={touchStart}
          onMouseDown={touchStart}
          onMouseMove={touchMove}
          onTouchMove={touchMove}
          onTouchEnd={touchLeave}
          onMouseUp={touchLeave}
          onMouseLeave={touchLeave}
        >
          <img src='/icons/col-resize.svg' onDragStart={preventDragHandler} />
        </div>
      </div>
    </div>

    {caption && (<p className="caption">{caption}</p>)}

    <style jsx>{`
             
        .slider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }


        .slider .slider-control {
          display: flex;
          width: 80px;
          height: 80px;
          margin-left: -80px;
          border-style: none;
          border-radius: 9999px;
          flex-shrink: 0;
          background-color: #8884;
          cursor: col-resize;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s;

        }
        
        .slider .slider-control:hover {
          background-color: #8888;
        }

        .slider .slider-control:before {
          position: absolute;
          content: "";
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: #8882;
        }


        .slider .slider-control img{
          display: flex;
          width: 30px;
          height: 30px;
          opacity: 0.3;
        }
        .slider .slider-control:hover img{
          opacity: 0.6;
        }

        .diff-image {
          position: relative;
        }

        .diff-image .cutter {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          box-sizing: content-box;
        }        
        
        `}</style>
  </div >);
}


CompareImage.defaultProps = {
  cover1: "",
  cover2: "",
  style: null,
  caption: null,
};