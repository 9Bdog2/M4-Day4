import React, { Component } from "react";
import fantasy from "../data/fantasy.json";
import Card from "react-bootstrap/Card";
import CommentList from "./CommentList";

class Books extends Component {
  state = {
    comments: [],
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
        {fantasy.map((book) => {
          /* return <img className="book-cover" alt="" key={book.asin} src={book.img}/> */
          return (
            <Card className="book-cover">
              <Card.Img variant="top" key={book.asin} src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Price : {book.price}£</Card.Text>
                <Card.Text>Category : {book.category}</Card.Text>
                <CommentList comments={this.state.comments}/>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }

  componentDidMount = async () => {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin,
            {
             headers: {  Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWRlMDRiYjUzZDAwMTViMTllZDEiLCJpYXQiOjE2MzIzMTI4MDAsImV4cCI6MTYzMzUyMjQwMH0.ZEiTPl6hBe2UEm5T239Bdd_a6OldaCdb8ShgjSK-vsI"}
             })

             const retrivedComments = await resp.json()
             this.setState({
                 comments : retrivedComments
             })
  }


}

export default Books;
