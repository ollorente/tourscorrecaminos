import { HTTP } from "@/utils/fakeDB"

export default () => {
  const GetAllOptions = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return response.options
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
          .map(e => {
            return {
              id: e.id,
              blogId: e.blogId,
              name: e.name,
              value: e.value,
              autoload: e.autoload,
            }
          })
      })

    return items
  }

  const GetOneOption = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.options.find((e) => e.id === id)
        return item
      })

    return item
  }

  return {
    GetAllOptions,
    GetOneOption,
  }
}