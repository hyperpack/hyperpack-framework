/*
challenges

- find configuration and load the entities glob
- before starting repl, create a connection
- boot anything else, we actually need a global, require-able app boot

*/
import repl from 'repl'
import prelude from './prelude'
import buildModels from './models'

//
// prelude
//

//
// configs
//

const portal = async app => {
  const { models, connection } = await buildModels(app)
  console.log('Models:\n=======')
  console.log(Object.keys(models).join('\n'))
  Object.assign(repl.start({ prompt: '❯ ', ignoreUndefined: true }).context, {
    ...prelude(console.log),
    ...models,
    connection
  })
  return repl
}

export { portal }
