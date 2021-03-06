import { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./imgs/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus eum quod tenetur ipsam adipisci sint officia, iste amet deleniti.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./imgs/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./imgs/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (direction) => {
    switch (direction) {
      case "left":
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
        break;
      case "right":
        setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
        break;
      default:
        break;
    }
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className='container' key={d.id}>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className='right'>
                <img src={d.img}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='./imgs/arrow.png'
        alt=''
        className='arrow left'
        onClick={() => handleClick("left")}
      />
      <img
        src='./imgs/arrow.png'
        alt=''
        className='arrow right'
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
