import { DateTime } from 'luxon'
import { BaseModel, column, computed, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'
import _ from 'lodash'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public customersName: string
  @column()
  public customersEmail: string
  @column()
  public customersPhone: string

  @hasMany(() => Item)
  public items: HasMany<typeof Item>

  @computed()
  public get total() {
    if (!this.items || this.items.length === 0) return 0
    else return _.sumBy(this.items, 'price').toFixed(2)
  }

  @computed()
  public get name() {
    return `#O-${this.id}`
  }
}
