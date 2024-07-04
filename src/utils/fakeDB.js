export const HTTP = async () => {
  return await fetch("https://ollorente.github.io/tourscorrecaminos/data.json")
    .then(res => res.json())
}
