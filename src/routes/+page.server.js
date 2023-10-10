import lorem from './lorem'

export function load() {
  return {
    text: lorem(),
  }
}
