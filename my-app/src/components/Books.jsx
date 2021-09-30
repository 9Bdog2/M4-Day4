import React from "react";
import fantasy from "../data/fantasy.json";
import Card from "react-bootstrap/Card"


export default function Books() {
  console.log(fantasy);

  return (
    <div className= "d-flex flex-wrap">
      {fantasy.map((book) => {
        /* return <img className="book-cover" alt="" key={book.asin} src={book.img}/> */
        return <Card className="book-cover">
          <Card.Img variant="top" key={book.asin} src={book.img}/>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
}
