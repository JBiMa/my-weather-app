import React from "react";
import "./descriptions.css";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather }) => {
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: "°C",
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: "°C",
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: "°C",
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: "m / s",
    },
  ];
  return (
    <div className="section section_description">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className="card">
          <div className="description_card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;

// <div className="card">
{
  /* <div className="description_card-icon">
<FaArrowDown />
<small>min</small>
</div>
<h2>32°C</h2>
</div>
<div className="card">
<div className="description_card-icon">
<FaArrowDown />
<small>min</small>
</div>
<h2>32°C</h2>
</div>
<div className="card">
<div className="description_card-icon">
<FaArrowDown />
<small>min</small>
</div>
<h2>32°C</h2>
</div>
<div className="card">
<div className="description_card-icon">
<FaArrowDown />
<small>min</small>
</div>
<h2>32°C</h2>
</div> */
}
