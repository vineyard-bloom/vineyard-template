import { Action, Cron } from 'vineyard-cron'

export function scheduleCron(action: Action, frequency: number, name: string): Cron {
  console.log(`Prepared to ${name} every ${frequency / 1000} seconds`)
  return new Cron([{ action, name }], frequency)
}
