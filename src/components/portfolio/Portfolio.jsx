import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { data } from "autoprefixer";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
