import { HTTP } from "@/utils/fakeDB"
import { Option, RefOption } from "@/interfcaces/option.interface"

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
          .map(e => RefOption(e))
      })

    return items
  }

  const GetOneOption = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.options.find((e) => e.id === id)
        return Option(item)
      })

    return item
  }

  return {
    GetAllOptions,
    GetOneOption,
  }
}