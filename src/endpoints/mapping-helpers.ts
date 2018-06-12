

export function fmap<S,T>(f: (s: S) => T ) : (ss: S[] ) => T[] {
  return (ss) => ss.map(f)
}