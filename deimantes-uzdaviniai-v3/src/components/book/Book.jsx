import React from "react";
import { useState, useEffect } from "react";
import Books from "../books/Books";

const Book = () => {
  const [book, setBook] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch("https://in3.dev/knygos/")
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://in3.dev/knygos/types/")
      .then((res) => res.json())
      .then((data) => setGenre(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!book.length && (
        <div
          style={{ marginTop: "150px", padding: "100px" }}
          class="ui massive active centered inline loader"
        ></div>
      )}
      {book.map((e) => (
        <Books
          key={e.id}
          img={e.img}
          title={e.title}
          author={e.author}
          price={e.price}
          type={genre.length > 0 && genre.find((c) => e.type === c.id).title}
        />
      ))}
    </>
  );
};

export default Book;
