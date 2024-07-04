import { HTTP } from "@/utils/fakeDB"

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
          .map(e => {
            return {
              id: e.id,
              postId: e.postId,
              author: e.author,
              authorUrl: e.authorUrl,
              date: e.date,
              content: e.content,
              userId: e.userId,
            }
          })
      })

    return items
  }

  const GetOneComment = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.comments.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllComments,
    GetOneComment,
  }
}