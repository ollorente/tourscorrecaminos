export const PostMeta = (db) => {
  return {
    id: db.meta_id,
    postId: db.post_id,
    key: db.meta_key,
    value: db.meta_value,
  }
}

export const RefPostMeta = (db) => {
  return {
    id: db.meta_id,
    key: db.meta_key,
    value: db.meta_value,
  }
}