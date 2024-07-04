import { HTTP } from "@/utils/fakeDB"

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
          .map(e => {
            return {
              id: e.id,
              postId: e.postId,
              key: e.key,
              value: e.value,
            }
          })
      })

    return items
  }

  const GetOnePostMeta = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.postMetas.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllPostMetas,
    GetOnePostMeta,
  }
}