import { HTTP } from "@/utils/fakeDB"

export default () => {
  const GetAllTerms = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.terms
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
              name: e.name,
              slug: e.slug,
            }
          })
      })

    return items
  }

  const GetOneTerm = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.terms.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllTerms,
    GetOneTerm,
  }
}