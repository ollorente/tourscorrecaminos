import { HTTP } from "@/utils/fakeDB"
console.log("🚀 ~ HTTP:", HTTP())

export default () => {
  const GetAllPosts = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = HTTP()
      .then(async (response) => {
        return response.posts
          .filter(e => e.status === "public")
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
              title: e.title,
              excerpt: e.excerpt,
              status: e.status,
              order: e.order,
              mimeType: e.mimeType,
            }
          })
      })

    return items
  }

  const GetOnePost = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.posts.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllPosts,
    GetOnePost,
  }
}