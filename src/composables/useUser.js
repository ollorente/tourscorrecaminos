import { HTTP } from "@/utils/fakeDB"
import { User, RefUser } from "@/interfcaces/user.interface"

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
          .map(e => RefUser(e))
      })

    return items
  }

  const GetOneUser = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.users.find((e) => e.id === id)
        return User(item)
      })

    return item
  }

  return {
    GetAllUsers,
    GetOneUser,
  }
}