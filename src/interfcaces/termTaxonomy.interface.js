export const TermTaxonomy = (db) => {
  return {
    id: db.term_taxonomy_id,
    termId: db.term_id,
    taxonomy: db.taxonomy,
    description: db.description,
    parent: db.parent,
    count: db.count,
  }
}

export const RefTermTaxonomy = (db) => {
  return {
    id: db.term_taxonomy_id,
    termId: db.term_id,
    taxonomy: db.taxonomy,
  }
}