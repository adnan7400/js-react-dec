import React from "react";

const Book = (props) => {
  const { img, title, author, children } = props;
  //attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Button clicked!");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example button
      </button>
    </article>
  );
};

export default Book;
