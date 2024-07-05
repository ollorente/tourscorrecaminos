import { HTTP } from "@/utils/fakeDB"
import { TermRelationship, RefTermRelationship } from "@/interfcaces/termRelationship.interface"

export default () => {
  const GetAllTermRelationships = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.termRelationships
          .sort(function (a, b) {
            if (a.slug > b.slug) {
              return 1
            }
            if (a.slug < b.slug) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefTermRelationship(e))
      })

    return items
  }

  const GetOneTermRelationship = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.termRelationships.find((e) => e.id === id)
        return TermRelationship(item)
      })

    return item
  }

  return {
    GetAllTermRelationships,
    GetOneTermRelationship,
  }
}