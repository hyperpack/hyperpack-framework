const path = require('path')

module.exports = {
  type: 'sqlite',
  database: 'db/database.sqlite',
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, '../models/*.ts')],
  migrations: ['src/db/migrate/**/*.ts'],
  subscribers: ['src/app/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/db/migrate',
    subscribersDir: 'src/app/subscribers'
  }
}
