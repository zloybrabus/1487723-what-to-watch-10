type AddReviewObj = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
}

type CommentData = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    id: number
    name: string
  }
};

type Comments = CommentData[] | []

type CommentAdd = {
  id: string,
  comment: string,
  rating: string,
}

type AnswerSendCommentError = {
  error: string
}

type AnswerSendComments = Comments | AnswerSendCommentError

export type {AddReviewObj, CommentData, Comments, CommentAdd, AnswerSendComments};
