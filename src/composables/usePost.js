import { HTTP } from "@/utils/fakeDB"
import { Post, RefPost } from "@/interfcaces/post.interface"

export default () => {
  const GetAllPosts = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.posts
          .filter(e => e.post_type === "post")
          .filter(e => e.post_status === "publish")
          .sort(function (a, b) {
            if (a.menuOrder > b.menuOrder) {
              return 1
            }
            if (a.menuOrder < b.menuOrder) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefPost(e))
      })

      return items
    }

  const GetOnePost = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.posts.find((e) => e.ID === id)
        return Post(item)
      })

    return item
  }

  return {
    GetAllPosts,
    GetOnePost,
  }
}