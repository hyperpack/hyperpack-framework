import { seed } from '@hyperpack/hypermodel'
import { App } from '../config/boot'
import { User } from '../app/models/user'

seed(App, async () => {
  try {
    const u = new User()
    u.username = 'foobar2@foo.org'
    u.password = 'foobar'
    await u.save()
    console.log('added', u.asJson())
  } catch (err) {
    console.log('error', err)
  }
})
