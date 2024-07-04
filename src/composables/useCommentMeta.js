import { HTTP } from "@/utils/fakeDB"

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
          .map(e => {
            return {
              id: e.id,
              commentId: e.commentId,
              key: e.key,
              value: e.value,
            }
          })
      })

    return items
  }

  const GetOneCommentMeta = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.commentMetas.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllCommentMetas,
    GetOneCommentMeta,
  }
}