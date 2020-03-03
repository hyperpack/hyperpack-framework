import { HyperModel } from '@hyperpack/hypermodel'
import { PrimaryGeneratedColumn, Column, Index, Entity } from 'typeorm'

class PopBand extends HyperModel {
  @Column()
  frontman: string
}
export { PopBand }
