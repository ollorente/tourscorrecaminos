import { HTTP } from "@/utils/fakeDB"

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
          .map(e => {
            return {
              id: e.id,
              termId: e.termId,
              taxonomy: e.taxonomy,
              parent: e.parent,
              count: e.count,
            }
          })
      })

    return items
  }

  const GetOneTermTaxonomy = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.termTaxonomies.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllTermTaxonomies,
    GetOneTermTaxonomy,
  }
}