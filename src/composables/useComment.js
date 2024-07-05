import { HTTP } from "@/utils/fakeDB"
import { Comment, RefComment } from "@/interfcaces/comment.interface"

export default () => {
  const GetAllComments = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.comments
          .sort(function (a, b) {
            if (a.order > b.order) {
              return 1
            }
            if (a.order < b.order) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefComment(e))
      })

    return items
  }

  const GetOneComment = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.comments.find((e) => e.id === id)
        return Comment(item)
      })

    return item
  }

  return {
    GetAllComments,
    GetOneComment,
  }
}