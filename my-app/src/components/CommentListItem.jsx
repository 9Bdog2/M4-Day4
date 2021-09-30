import React, {Component} from "react";

class CommentListItem extends Component {


    render(){
        return(
            <li>
                {this.props.comment.rate}  {this.props.comment.comment}
            </li>
        )
    }
}

export default CommentListItem