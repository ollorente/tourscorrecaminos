import { HTTP } from "@/utils/fakeDB"
import { Link, RefLink } from "@/interfcaces/link.interface"

export default () => {
  const GetAllLinks = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.links
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
          .map(e => RefLink(e))
      })

    return items
  }

  const GetOneLink = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.links.find((e) => e.id === id)
        return Link(item)
      })

    return item
  }

  return {
    GetAllLinks,
    GetOneLink,
  }
}