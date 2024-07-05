export const UserMeta = (db) => {
  return {
    id: db.umeta_id,
    userId: db.user_id,
    key: db.meta_key,
    value: db.meta_value,
  }
}

export const RefUserMeta = (db) => {
  return {
    id: db.umeta_id,
    key: db.meta_key,
    value: db.meta_value,
  }
}