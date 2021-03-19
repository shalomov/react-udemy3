import React from "react";
import ReactDOM from "react-dom";
import ApprovealCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovealCard>
        Are you sure you want to do this?
    </ApprovealCard>
      <ApprovealCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today ar 4:45PM"
          content="Nice blog post"
          avatar="https://source.unsplash.com/random"
        />
      </ApprovealCard>

      <ApprovealCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today ar 2:45PM"
          content="I like the subject"
          avatar="https://source.unsplash.com/random"
        />
      </ApprovealCard>

      <ApprovealCard>
        <CommentDetail
          author="Margo"
          timeAgo="Today ar 3:45PM"
          content="I like the writing"
          avatar="https://source.unsplash.com/random"
        />
      </ApprovealCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
