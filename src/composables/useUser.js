import { HTTP } from "@/utils/fakeDB"

export default () => {
  const GetAllUsers = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.users
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
              nicename: e.nicename,
              url: e.url,
              displayName: e.displayName,
            }
          })
      })

    return items
  }

  const GetOneUser = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.users.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllUsers,
    GetOneUser,
  }
}