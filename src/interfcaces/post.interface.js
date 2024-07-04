export const Post = (db) => {
  return {
    id: db.ID,
    author: db.post_author,
    date: db.post_date,
    dateGMT: db.post_date_gmt,
    content: db.post_content,
    title: db.post_title,
    excerpt: db.post_excerpt,
    status: db.post_status,
    commentStatus: db.comment_status,
    pingStatus: db.ping_status,
    password: db.post_password,
    name: db.post_name,
    toPing: db.to_ping,
    pinged: db.pinged,
    modified: db.post_modified,
    modifiedGMT: db.post_modified_gmt,
    contentFiltered: db.post_content_filtered,
    parent: db.post_parent,
    guid: db.guid,
    menuOrder: db.menu_order,
    type: db.post_type,
    mime_type: db.post_mime_type,
    commentCount: db.comment_count,
  }
}

export const RefPost = (db) => {
  return {
    id: db.ID,
    title: db.post_title,
    excerpt: db.post_excerpt,
    status: db.post_status,
    mime_type: db.post_mime_type,
  }
}