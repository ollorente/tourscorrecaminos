export const TermRelationship = (db) => {
  return {
    objectId: db.object_id,
    termTaxonomyId: db.term_taxonomy_id,
    order: db.term_order,
  }
}

export const RefTermRelationship = (db) => {
  return {
    objectId: db.object_id,
    termTaxonomyId: db.term_taxonomy_id,
    order: db.term_order,
  }
}