import { init } from "ityped";
import { useEffect, useRef } from "react";

import "./intro.scss";
import catImg from "../../imgs/IMG_1374.PNG";
import arrowImg from "../../imgs/down.png";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Development",
        "Web Design",
        "App design",
        "App Development",
      ],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={catImg} alt='a smiling cat'></img>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi!</h2>
          <h1>we are katitos.</h1>
          <h3>
            And we do <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          {/* See our portfolio */}
          <img src={arrowImg} alt='arrow pointing down'></img>
        </a>
      </div>
    </div>
  );
};

export default Intro;
