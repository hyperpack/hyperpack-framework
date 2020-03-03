import { createConnection } from './boot'

const seed = async (app, seedfn) => {
  const connection = await createConnection(app.appdir)
  await seedfn(connection)
}

export { seed }
