import { sum } from './sum.js'
import { now } from '../common/time.js'

export function main(event, context) {
  return { event, result: sum(1, 2), now: now() }
}
