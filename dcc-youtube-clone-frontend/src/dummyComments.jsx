let dummyComments = [
  {
    id: 1,
    comment: "this is the first comment",
    like: false,
    dislike: false,
    replies: [
      {
        id: 1,
        reply: "this is the first reply to the first comment",
        like: true,
        dislike: false,
      },
      {
        id: 2,
        reply: "this is the second reply to the first comment",
        like: false,
        dislike: true,
      }
    ]
  },
  {
    id: 2,
    comment: "this is the second comment",
    like: false,
    dislike: true,
    replies: [],
  }
];

export default dummyComments;
