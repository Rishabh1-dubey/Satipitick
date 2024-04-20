import React from "react";
import Comments from "./Comments";

const commentsData = [
  {
    name: "Rishabh Dubey",
    text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
    replies: [
      {
        name: "Aryan Dubey",
        text: " maa baap ke pair mai swarg haii",
        replies: [],
      },
    ],
  },
  {
    name: "Abhishek Singh",
    text: "koi BKL hi hoga to naa Manta hoo",
    replies: [
      {
        name: "Yash",
        text: "Bhai tu abhi jyda bol rha hai ",
        replies: [],
      },
    ],
  },
  {
    name: "Vivek",
    text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
    replies: [
      {
        name: "sarvesh",
        text: "Vivek bhai aap Kb aa Gye",
        replies: [
          {
            name: "Rishabh Dubey",
            text: "are Vivek bhai aa gye yhi badi baat haii",
            replies: [
              {
                name: "Abhishek",
                text: "Kya Bolti Public",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rishabh Dubey",
    text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
    replies: [
      {
        name: "Rishabh Dubey",
        text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
        replies: [
          {
            name: "Rishabh Dubey",
            text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rishabh Dubey",
    text: "Kaun kaun manta hai ki maa baap ke pair mai swarg haii",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className=" text-2xl font-bold">Comments:</div>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
