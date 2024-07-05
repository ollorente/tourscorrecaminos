export const Comment = (db) => {
  return {
    id: db.comment_ID,
    postId: db.comment_post_ID,
    author: db.comment_author,
    authorEmail: db.comment_author_email,
    authorUrl: db.comment_author_url,
    authorIP: db.comment_author_IP,
    date: db.comment_date,
    dateGMT: db.comment_date_gmt,
    content: db.comment_content,
    karma: db.comment_karma,
    approved: db.comment_approved,
    agent: db.comment_agent,
    type: db.comment_type,
    parent: db.comment_parent,
    userId: db.user_id,
  }
}

export const RefComment = (db) => {
  return {
    id: db.comment_ID,
    postId: db.comment_post_ID,
    author: db.comment_author,
    authorEmail: db.comment_author_email,
    authorUrl: db.comment_author_url,
    authorIP: db.comment_author_IP,
    date: db.comment_date,
    dateGMT: db.comment_date_gmt,
    content: db.comment_content,
    karma: db.comment_karma,
    approved: db.comment_approved,
    agent: db.comment_agent,
    type: db.comment_type,
    parent: db.comment_parent,
    userId: db.user_id,
  }
}