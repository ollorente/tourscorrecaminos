import { HTTP } from "@/utils/fakeDB"
import { PostMeta, RefPostMeta } from "@/interfcaces/postMeta.interface"

export default () => {
  const GetAllPostMetas = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.postMetas
          .sort(function (a, b) {
            if (a.value > b.value) {
              return 1
            }
            if (a.value < b.value) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefPostMeta(e))
      })

    return items
  }

  const GetOnePostMeta = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.postMetas.find((e) => e.id === id)
        return PostMeta(item)
      })

    return item
  }

  return {
    GetAllPostMetas,
    GetOnePostMeta,
  }
}