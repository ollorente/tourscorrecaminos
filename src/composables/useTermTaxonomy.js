import { HTTP } from "@/utils/fakeDB"
import { TermTaxonomy, RefTermTaxonomy } from "@/interfcaces/termTaxonomy.interface"

export default () => {
  const GetAllTermTaxonomies = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.termTaxonomies
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
          .map(e => RefTermTaxonomy(e))
      })

    return items
  }

  const GetOneTermTaxonomy = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.termTaxonomies.find((e) => e.id === id)
        return TermTaxonomy(item)
      })

    return item
  }

  return {
    GetAllTermTaxonomies,
    GetOneTermTaxonomy,
  }
}