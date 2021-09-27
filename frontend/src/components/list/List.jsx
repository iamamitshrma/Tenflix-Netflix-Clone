import ListItem from "../list/ListItem";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";

const List = ({list}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  // const [clickLimit, setClickLimit] = useState(window.innerWidth / 245);
  const clickLimit = window.innerWidth / 245;

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${245 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-245 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="list-title">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slide-arrow left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          {
            list.content.map((item, i) => {
              return <ListItem index={i} item={item}/>
            })
          }
        </div>
        <ArrowForwardIosOutlined
          className="slide-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
