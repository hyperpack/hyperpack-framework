import Purdy from 'purdy'
import { table } from 'table'
import L from 'lodash'
import asTable from 'as-table'

const purdy = Purdy.stringify

const objectify = m => x => {
  // just always use toJSON for sequelize.
  const invoke = o => (o[m] || o.asJson).bind(o)()

  if (L.isArray(x)) {
    return L.map(x, invoke)
  }
  return invoke(x)
}

const tablify = x => {
  const a = L.isArray(x) ? x : [x]
  const header = Object.keys(L.maxBy(a, _ => Object.keys(_).length))
  const rows = L.map(a, _ => L.map(header, p => _[p]))
  return [header, ...rows]
}

const prelude = log => {
  const o = _ =>
    _.then(objectify('toObject'))
      .then(purdy)
      .then(log)
  const js = _ =>
    _.then(objectify('asJson'))
      .then(purdy)
      .then(log)
  const t = _ =>
    _.then(objectify('toObject'))
      .then(tablify)
      .then(table)
      .then(log)
  const t1 = _ =>
    _.then(L.castArray)
      .then(asTable)
      .then(log)

  return {
    t,
    t1,
    js,
    o
  }
}
export default prelude
