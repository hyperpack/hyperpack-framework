import path from 'path'
import { portal } from '../src/portal'

jest.mock('repl')

describe('portal', () => {
  it('assigns context', async () => {
    const res = await portal({
      appdir: path.join(__dirname, 'fixtures', 'type-orm-base')
    })
    expect((res as any).context.PopBand).toBeTruthy()
    expect((res as any).context.connection).toBeTruthy()
    expect((res as any).context.o).toBeTruthy()
  })
})
