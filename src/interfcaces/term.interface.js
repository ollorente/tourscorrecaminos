export const Term = (db) => {
  return {
    id: db.term_id,
    name: db.name,
    slug: db.slug,
    group: db.term_group,
  }
}

export const RefTerm = (db) => {
  return {
    id: db.term_id,
    name: db.name,
    slug: db.slug,
  }
}