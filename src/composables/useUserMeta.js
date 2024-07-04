import { HTTP } from "@/utils/fakeDB"

export default () => {
  const GetAllUserMetas = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.userMetas
          .sort(function (a, b) {
            if (a.nicename > b.nicename) {
              return 1
            }
            if (a.nicename < b.nicename) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => {
            return {
              id: e.id,
              userId: e.userId,
              key: e.key,
              value: e.value,
            }
          })
      })

    return items
  }

  const GetOneUserMeta = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.userMetas.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllUserMetas,
    GetOneUserMeta,
  }
}