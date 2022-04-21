let comments = [
  {
    id: 1,
    body: "this is the first comment",
    like: false,
    dislike: false,

  },
  {
    id: 2,
    body: "this is the second comment",
    like: false,
    dislike: true,
  }
];

let replies = [
  {
    id: 1,
    body: "this is the first reply to the first comment",
    like: true,
    dislike: false,
    commentId: 1,
  },
  {
    id: 2,
    body: "this is the second reply to the first comment",
    like: false,
    dislike: true,
    commentId: 1
  }

]

module.exports= {comments, replies}
