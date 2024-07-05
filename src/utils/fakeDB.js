export const HTTP = async () => {
  return await fetch("/tourscorrecaminos/data.json")
    .then(res => res.json())
}
