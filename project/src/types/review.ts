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
  id: number
  comment: string
  rating: number
}

type AnswerSendCommentError = {
  error: string
}

type AnswerSendComments = Comments | AnswerSendCommentError

export type {AddReviewObj, CommentData, Comments, CommentAdd, AnswerSendComments};
