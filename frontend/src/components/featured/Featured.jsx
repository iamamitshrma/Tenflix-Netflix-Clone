import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = ({type, setGenre}) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async() => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      <div className="img-wrapper">
        <img
          className="banner-img"
          width="100%"
          src={content?.img}
          alt=""
        />
      </div>

      <div className="info">
        <img src={content?.imgTitle}
        alt="feature" />
        <span className="info-desc">{content?.desc}</span>

        <div className="buttons">
            <Link to="/watch"> 
            <button className="play">
                <PlayArrow />
                <span>Play</span>
            </button>
            </Link>
            <button className="more">
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
