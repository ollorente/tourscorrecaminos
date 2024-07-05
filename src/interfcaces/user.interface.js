export const User = (db) => {
  return {
    id: db.ID,
    login: db.user_login,
    pass: db.user_pass,
    nicename: db.user_nicename,
    email: db.user_email,
    url: db.user_url,
    registered: db.user_registered,
    activation_key: db.user_activation_key,
    status: db.user_status,
    displayName: db.display_name,
  }
}

export const RefUser = (db) => {
  return {
    id: db.ID,
    nicename: db.user_nicename,
    url: db.user_url,
    displayName: db.display_name,
  }
}