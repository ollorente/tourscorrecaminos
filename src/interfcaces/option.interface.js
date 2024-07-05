export const Option = (db) => {
  return {
    id: db.option_id,
    name: db.option_name,
    value: db.option_value,
    autoload: db.autoload,
  }
}

export const RefOption = (db) => {
  return {
    id: db.option_id,
    name: db.option_name,
    value: db.option_value,
    autoload: db.autoload,
  }
}