export const HTTP = async () => {
  // return await fetch("https://ollorente.github.io/tourscorrecaminos/data.json")
  return await fetch("http://localhost:5173/tourscorrecaminos/data.json")
    .then(res => res.json())
}
