import { ValidationError } from 'class-validator'
import { nonenum } from './decorators'

class ValidationException {
  @nonenum({ propValue: true })
  expose

  status

  validationErrors

  constructor(errs: ValidationError[]) {
    this.status = 400
    this.validationErrors = errs.map(({ property, constraints }) => ({
      property,
      constraints
    }))
  }
}

export { ValidationException }
