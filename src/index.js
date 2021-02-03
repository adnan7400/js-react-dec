import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./books";
import Book from "./Book";
//setup vars

function BookList() {
  return (
    <section className="booklist">
      {" "}
      {data.map((book) => {
        // const { img, title, author } = book;
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
