import {
  createConnection as typeormCreateConnection,
  ConnectionOptionsReader
} from 'typeorm'
import path from 'path'

const createConnection = async (appdir: string) => {
  const conn = new ConnectionOptionsReader({
    root: path.join(appdir, 'config'),
    configName: 'database'
  })
  return typeormCreateConnection(await conn.get('default'))
}

export { createConnection }
