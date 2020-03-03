import { HyperModel, Exclude, IsEmail } from '@hyperpack/hypermodel'

import { PrimaryGeneratedColumn, Column, Index, Entity } from 'typeorm'

@Entity()
export class User extends HyperModel {
  @PrimaryGeneratedColumn()
  id: number

  @Index('user-username-idx', { unique: true })
  @Column()
  @IsEmail()
  username: string

  @Exclude()
  @Column()
  password: string

  signedToken() {
    //    return jwt.sign({ username: this.username }, jwtSecret)
  }

  async attemptPassword(_password) {
    //   return await bcrypt.compare(password, this.password)
  }

  static async createWithPassword({ _username, _password }) {
    /*
    const hashed = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
    const user = new User()
    user.updateAttributes({ username, password: hashed })
    return await user.save()
    */
  }
}
