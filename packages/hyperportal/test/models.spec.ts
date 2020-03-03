import path from 'path'
import buildModels from '../src/models'

describe('models', () => {
  it('buildModels', async () => {
    const { models, connection } = await buildModels({
      appdir: path.join(__dirname, 'fixtures', 'type-orm-base')
    })
    expect(models).toMatchSnapshot()
    expect(connection).toBeTruthy()
  })
})
