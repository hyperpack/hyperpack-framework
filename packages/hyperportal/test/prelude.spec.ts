import { HyperModel } from '@hyperpack/hypermodel'
import { PrimaryGeneratedColumn, Column, Index, Entity } from 'typeorm'
import prelude from '../src/prelude'

class Band extends HyperModel {
  @Column()
  frontman: string
}
const passthru = prelude(x => x)
const maiden = new Band()
maiden.frontman = 'bruce'

const o = Promise.resolve(maiden)

describe('prelude', () => {
  describe('t', () => {
    it('render', async () => {
      expect(await passthru.t(o)).toMatchSnapshot()
    })
  })
  describe('o', () => {
    it('render', async () => {
      expect(await passthru.o(o)).toMatchSnapshot()
    })
  })
  describe('t1', () => {
    it('render', async () => {
      expect(await passthru.t1(o)).toMatchSnapshot()
    })
  })
  describe('js', () => {
    it('render', async () => {
      expect(await passthru.js(o)).toMatchSnapshot()
    })
  })
})
