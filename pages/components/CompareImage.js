import { useEffect, useRef, useState } from 'react';
import ProjectCover from './ProjectCover';
import { ReactCompareSlider, } from 'react-compare-slider';

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



  return (<div className="diff-image">
    <ReactCompareSlider
      itemOne={<ProjectCover cover={cover1} />}
      itemTwo={<ProjectCover cover={cover2} />}
    />
    {caption && (<p className="caption">{caption}</p>)}

    
  </div>);

}


CompareImage.defaultProps = {
  cover1: "",
  cover2: "",
  style: null,
  caption: null,
};