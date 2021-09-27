import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({index, item}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const getMovie = async() => {
      try {
        const res = await axios.get("/movies/find/"+item, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  },[item])

  return (
    <>
    <Link to={{pathname: "/watch", movie: movie }}>
      <div
        className="list-item"
        style={{left: isHovered && index * 225 - 50 + index * 10}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && <h1 className="movie-title">{movie?.title}</h1>}
        <img
          src={movie?.imgSm}
          alt="movieimage"
        />
        {isHovered && (
          <>
              <video src={movie.trailer} autoPlay={true} loop/>
              <div className="item-info">
              <div className="icons">
                  <PlayArrow className="icon"/>
                  <Add className="icon"/>
                  <ThumbUpAltOutlined className="icon"/>
                  <ThumbDownAltOutlined className="icon"/>
              </div>

              <div className="item-info-top">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
              </div>

              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
              </div>
          </>
        )}

      </div>
    </Link>
    </>
  );
};

export default ListItem;
