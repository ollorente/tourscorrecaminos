import { HTTP } from "@/utils/fakeDB"
import { CommentMeta, RefCommentMeta } from "@/interfcaces/commentMeta.interface"

export default () => {
  const GetAllCommentMetas = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.commentMetas
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
          .map(e => RefCommentMeta(e))
      })

    return items
  }

  const GetOneCommentMeta = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.commentMetas.find((e) => e.id === id)
        return CommentMeta(item)
      })

    return item
  }

  return {
    GetAllCommentMetas,
    GetOneCommentMeta,
  }
}