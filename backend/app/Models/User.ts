import { DateTime } from 'luxon';
import bcrypt from 'bcryptjs';
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  // serializeAs = null serve para não trazer o campo
  @column()
  public password: string;

  // Criado automaticamente pelo node ace
  @column()
  public rememberMeToken?: string;

  @column()
  public nomeCompleto: string;

  @column()
  public matricula: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  }
}
