import { classToPlain } from 'class-transformer'
import { validate } from 'class-validator'
import { BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm'
import { ValidationException } from './validation-exception'

class HyperModel extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  async beforeSave() {
    const err = await validate(this)
    if (err && err.length > 0) {
      throw new ValidationException(err)
    }
  }

  updateAttributes(attrs) {
    Object.assign(this, attrs)
  }

  asJson() {
    return classToPlain(this)
  }
}

export { HyperModel }
