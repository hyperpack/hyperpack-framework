import L from 'lodash'
import { createConnection } from '@hyperpack/hypermodel'
import glob from 'glob'

// eslint-disable-next-line
const load = patt => glob.sync(patt).map(f => require(f))

const buildModels = async app => {
  const connection = await createConnection(app.appdir)
  const models = L.reduce(
    L.flatten(connection.options.entities.map(e => load(e))),
    L.merge
  )
  return { models, connection }
}

export default buildModels
