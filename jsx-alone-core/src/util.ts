import { CSSProperties } from './declarations/domElementDeclarations';

export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) { throw new Error(msg) }
  return r
}
// export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
//   try {
//     return f()
//   } catch (error) {
//   }
// }
export function array<T = number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}
export function indent(i: number = 1, tabSize = 2): string {
  return repeat(i * tabSize, ' ')
}

export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length
}

export function removeWhites(s: string, replaceWith= ' ') {
  return s.replace(/\s+/gm, replaceWith).trim()
}
export function randomIntBetween(a: number, b: number) {
  return Math.floor(Math.random() * b) + a
}

export function randomItem<T>(array: T[]): T {
  return array[randomIntBetween(0, array.length)]
}

export function printMs(ms: number, config: {
  minutes?: boolean;
  seconds?: boolean;
  ms?: boolean;
} = { minutes: false, seconds: true, ms: true }) {
  config = { ...{ minutes: false, seconds: true, ms: true }, ...config }
  const seconds = config.seconds && Math.floor(ms / 1000)
  const minutes = config.minutes && seconds && Math.floor(seconds / 60)
  const milliseconds = config.ms && Math.floor(ms % 1000 || ms)
  return `${minutes ? `${minutes} minutes ` : ''}${seconds ? `${seconds} seconds ` : ''}${milliseconds ? `${milliseconds} ms ` : ''}`
}

let _unique: number = 0
export function unique(prefix: string= '_'): string {
  return prefix + _unique++
}

export function objectMap(o: {[k: string]: any}, f: (k: string, v: any) => any) {
  const r: any = {}
  Object.keys(o).forEach(k => {
    r[k] = f(k, o[k])
  })
  return r
}

export function styleObjectToCss(o: Partial<{[k: string]: string|null|undefined}>|CSSProperties, propertiesSeparator= '') {
  return Object.keys(o)
  .map(p =>
    `${stylePropertyNameToCssSyntax(p)}: ${(o as any)[p]};`
    )
    //
    .join(propertiesSeparator)
}
export function stylePropertyNameToCssSyntax(s: string): string {
 let t
 while (t = /([A-Z])/.exec(s)) {
   s = s.substring(0, t.index) + '-' + t[1].toLowerCase() + s.substring(t.index + 1, s.length)
 }
 return s
}
